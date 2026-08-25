#!/usr/bin/env python3
import json, os, subprocess, sys, datetime, time, urllib.request, urllib.error
from pathlib import Path

LINEAR_SECRET = "/root/.secrets/linear.json"
GITHUB_SECRET = "/root/.secrets/github.json"   # {"token": "ghp_...", "base": "master"}
CLAUDE = "/usr/bin/claude"
ALLOWED_CODE = "Edit,Write,Read,Bash(ls *),Bash(cat *),Bash(grep *),Bash(find *)"
STATE = Path("/root/.watcher-linear")
LABEL_CODE = "code"
LABEL_ASK = "ASK"
# nombre proyecto Linear -> (carpeta repo, "owner/repo" en GitHub)
PROYECTOS = {
    # nombre en Linear: (carpeta repo, "owner/repo", rama_base)
    "curso-web": ("/root/proyectos/angaritarad-curso", "angaritamd/angaritarad-curso", "master"),
    "marinasformula": ("/root/proyectos/marinasformula-web", "angaritamd/marinasformula-web", "main"),
    "curso-platform": ("/root/proyectos/angaritarad-curso-platform", "angaritamd/angaritarad-curso-platform", "main"),
    "talleres-openclaw": ("/root/proyectos/talleres-openclaw", "angaritarad-academy/talleres-openclaw", "main"),
    "clicrad-app": ("/root/proyectos/clicrad-v2", "angaritamd/clicrad-v2", "master"),
}
ESTADO_COLA = "Todo"
ESTADO_TRABAJANDO = "In Progress"
ESTADO_REVISION = "In Review"
ESTADO_HECHO = "Done"

LOGS = STATE / "logs"
LOCK = STATE / "watcher.lock"
STATE.mkdir(exist_ok=True); LOGS.mkdir(exist_ok=True)
API = "https://api.linear.app/graphql"
cfg = json.loads(Path(LINEAR_SECRET).read_text())
API_KEY = cfg["api_key"]
gh = json.loads(Path(GITHUB_SECRET).read_text())
GH_TOKEN = gh["token"]
GH_BASE = gh.get("base", "master")

def evento(msg):
    with (STATE / "eventos.log").open("a") as f:
        f.write(f"{datetime.datetime.now():%Y-%m-%d %H:%M:%S} {msg}\n")

def gql(query, variables=None):
    body = json.dumps({"query": query, "variables": variables or {}}).encode()
    req = urllib.request.Request(API, data=body, method="POST")
    req.add_header("Content-Type", "application/json")
    req.add_header("Authorization", API_KEY)
    with urllib.request.urlopen(req, timeout=30) as r:
        data = json.loads(r.read().decode())
    if "errors" in data:
        raise RuntimeError(json.dumps(data["errors"]))
    return data["data"]

def estados_del_equipo(team_name):
    q = "query($name:String!){ teams(filter:{name:{eq:$name}}){ nodes{ id states{ nodes{ id name } } } } }"
    nodes = gql(q, {"name": team_name})["teams"]["nodes"]
    if not nodes:
        raise RuntimeError("No existe el equipo " + team_name)
    return {s["name"]: s["id"] for s in nodes[0]["states"]["nodes"]}

def buscar_pendientes():
    q = ("query($state:String!){ issues(filter:{state:{name:{eq:$state}}}, first:50){ "
         "nodes{ id identifier title description project{ name } labels{ nodes{ name } } } } }")
    nodes = gql(q, {"state": ESTADO_COLA})["issues"]["nodes"]
    out = []
    for n in nodes:
        etiquetas = {l["name"] for l in n.get("labels", {}).get("nodes", [])}
        if LABEL_CODE in etiquetas or LABEL_ASK in etiquetas:
            n["_labels"] = etiquetas
            out.append(n)
    return out

def mover(issue_id, state_id):
    q = "mutation($id:String!,$state:String!){ issueUpdate(id:$id, input:{stateId:$state}){ success } }"
    gql(q, {"id": issue_id, "state": state_id})

def comentar(issue_id, texto):
    q = "mutation($id:String!,$body:String!){ commentCreate(input:{issueId:$id, body:$body}){ success } }"
    gql(q, {"id": issue_id, "body": texto})

def git(repo, *args):
    return subprocess.run(["git", "-C", repo, *args], capture_output=True, text=True)

def asegurar_exclude(repo):
    # que git ignore .claude/ para que no se cuele en commits
    excl = Path(repo) / ".git" / "info" / "exclude"
    try:
        contenido = excl.read_text() if excl.exists() else ""
        if ".claude/" not in contenido:
            with excl.open("a") as f:
                f.write("\n.claude/\n")
    except Exception:
        pass

def limpiar_worktrees(repo):
    import shutil
    # remover con git (maneja worktrees locked) cada worktree que no sea el principal
    out = git(repo, "worktree", "list", "--porcelain").stdout
    principal = str(Path(repo).resolve())
    for linea in out.splitlines():
        if linea.startswith("worktree "):
            ruta = linea[len("worktree "):].strip()
            if str(Path(ruta).resolve()) != principal:
                git(repo, "worktree", "remove", "--force", ruta)
    git(repo, "worktree", "prune")
    # por si quedo la carpeta suelta
    wt = Path(repo) / ".claude" / "worktrees"
    if wt.exists():
        shutil.rmtree(wt, ignore_errors=True)
    git(repo, "worktree", "prune")
    # borrar ramas worktree-* residuales
    ramas = git(repo, "branch").stdout
    for l in ramas.splitlines():
        nombre = l.replace("*", "").strip()
        if nombre.startswith("worktree-"):
            git(repo, "branch", "-D", nombre)

def abrir_pr(owner_repo, rama, titulo, cuerpo, base):
    url = "https://api.github.com/repos/" + owner_repo + "/pulls"
    body = json.dumps({"title": titulo, "head": rama, "base": base, "body": cuerpo}).encode()
    req = urllib.request.Request(url, data=body, method="POST")
    req.add_header("Authorization", "token " + GH_TOKEN)
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("User-Agent", "watcher-vps")
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode())

if LOCK.exists():
    if time.time() - LOCK.stat().st_mtime < 3600:
        sys.exit(0)
    LOCK.unlink(missing_ok=True)
LOCK.write_text(str(os.getpid()))

try:
    estados = estados_del_equipo(cfg["team"])
    faltan = [e for e in (ESTADO_COLA, ESTADO_TRABAJANDO, ESTADO_REVISION, ESTADO_HECHO) if e not in estados]
    if faltan:
        evento("ERROR: faltan estados en Linear: " + ", ".join(faltan))
        sys.exit(1)

    pendientes = buscar_pendientes()
    if not pendientes:
        sys.exit(0)

    issue = pendientes[-1]
    iid = issue["id"]
    ident = issue["identifier"]
    titulo = issue.get("title") or ident
    instr = (issue.get("description") or "").strip()
    proyecto = (issue.get("project") or {}).get("name")
    etiquetas = issue["_labels"]

    if LABEL_CODE in etiquetas and LABEL_ASK in etiquetas:
        mover(iid, estados[ESTADO_TRABAJANDO])
        comentar(iid, "Este issue tiene las etiquetas code y ASK a la vez. Decide una sola.")
        evento(ident + " ambas etiquetas - rechazado")
        sys.exit(0)

    modo_ask = LABEL_ASK in etiquetas

    if not proyecto or proyecto not in PROYECTOS:
        mover(iid, estados[ESTADO_TRABAJANDO])
        comentar(iid, "No se a que repo mandar esto. Proyecto no mapeado: " + str(proyecto))
        evento(ident + " proyecto no mapeado: " + str(proyecto))
        sys.exit(0)

    if not instr:
        mover(iid, estados[ESTADO_TRABAJANDO])
        comentar(iid, "El issue no tiene descripcion. Escribe la instruccion y vuelvelo a Todo.")
        evento(ident + " sin descripcion")
        sys.exit(0)

    repo, owner_repo, base = PROYECTOS[proyecto]
    mover(iid, estados[ESTADO_TRABAJANDO])
    ts = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")

    asegurar_exclude(repo)
    limpiar_worktrees(repo)

    # SIEMPRE partir de la ultima version de GitHub, en master limpio
    git(repo, "checkout", base)
    git(repo, "fetch", "origin")
    git(repo, "reset", "--hard", "origin/" + base)

    if modo_ask:
        prompt = ("MODO SOLO LECTURA. Responde la consulta leyendo el repositorio. "
                  "NO edites archivos, NO uses git, NO crees worktrees. Solo explica.\n\n" + instr)
        r = subprocess.run([CLAUDE, "-p", prompt, "--permission-mode", "plan"],
                           cwd=repo, capture_output=True, text=True, timeout=1800)
        (LOGS / (ts + "-" + ident + ".log")).write_text(
            "FECHA: " + ts + "\nISSUE: " + ident + " [ASK]\n" + instr +
            "\n\n--- STDOUT ---\n" + r.stdout + "\n--- STDERR ---\n" + r.stderr +
            "\nCODIGO: " + str(r.returncode) + "\n")
        resp = (r.stdout.strip() or r.stderr.strip() or "(sin salida)")
        if r.returncode == 0:
            comentar(iid, "Respuesta de Claude Code (solo lectura)\n\n" + resp)
            mover(iid, estados[ESTADO_HECHO])
            evento(ident + " [ASK] -> Done")
        else:
            comentar(iid, "Error ASK (codigo " + str(r.returncode) + ")\n\n" + resp[:3000])
            evento(ident + " [ASK] ERROR")
        sys.exit(0)

    # ----- MODO code: Code edita en master; el watcher ramifica DESPUES -----
    prompt_code = ("Edita los archivos de este repositorio segun la instruccion. "
                   "Trabaja directamente sobre los archivos del directorio actual. "
                   "NO uses git (nada de add, commit, push, branch, checkout). "
                   "NO crees git worktrees ni carpetas nuevas de trabajo. Solo edita los archivos.\n\n" + instr)
    r = subprocess.run(
        [CLAUDE, "-p", prompt_code, "--permission-mode", "acceptEdits", "--allowedTools", ALLOWED_CODE],
        cwd=repo, capture_output=True, text=True, timeout=1800)
    (LOGS / (ts + "-" + ident + ".log")).write_text(
        "FECHA: " + ts + "\nISSUE: " + ident + " [code]\n" + instr +
        "\n\n--- STDOUT ---\n" + r.stdout + "\n--- STDERR ---\n" + r.stderr +
        "\nCODIGO: " + str(r.returncode) + "\n")
    resp = (r.stdout.strip() or r.stderr.strip() or "(sin salida)")

    if r.returncode != 0:
        comentar(iid, "Error al ejecutar (codigo " + str(r.returncode) + ") - queda en In Progress.\n\n" + resp[:3000])
        evento(ident + " [code] ERROR ejecucion")
        sys.exit(0)

    # por si Code dejo un worktree, traer esos cambios NO aplica; trabajamos el working tree principal
    limpiar_worktrees(repo)

    # capturar cambios en el working tree principal (master)
    git(repo, "add", "-A")
    est = git(repo, "status", "--porcelain")
    if est.stdout.strip() == "":
        comentar(iid, "Code no dejo cambios en el repo. Respuesta:\n\n" + resp[:3000])
        git(repo, "reset", "--hard", "origin/" + base)
        mover(iid, estados[ESTADO_HECHO])
        evento(ident + " [code] sin cambios -> Done")
        sys.exit(0)

    # crear rama con los cambios ya hechos y commitear
    rama = "code/" + ident.lower() + "-" + ts
    git(repo, "checkout", "-b", rama)
    git(repo, "add", "-A")
    git(repo, "commit", "-m", ident + ": " + titulo)

    # push de la rama con token
    push_url = "https://x-access-token:" + GH_TOKEN + "@github.com/" + owner_repo + ".git"
    pr = git(repo, "push", push_url, rama)
    if pr.returncode != 0:
        comentar(iid, "No pude hacer push de la rama. Error:\n\n" + (pr.stderr[:2000] or "(sin detalle)"))
        git(repo, "checkout", base)
        git(repo, "reset", "--hard", "origin/" + base)
        evento(ident + " [code] ERROR push")
        sys.exit(0)

    try:
        pr_data = abrir_pr(owner_repo, rama, ident + ": " + titulo,
                           "Automatizado por el watcher desde Linear " + ident + ".\n\n" + resp[:5000], base)
        pr_url = pr_data.get("html_url", "(sin url)")
        comentar(iid, "PR abierto para revisar:\n" + pr_url + "\n\nResumen de Code:\n\n" + resp[:3000])
        mover(iid, estados[ESTADO_REVISION])
        evento(ident + " [code] -> In Review, PR " + pr_url)
    except Exception as e:
        comentar(iid, "Rama subida pero fallo abrir el PR: " + str(e) + "\nRama: " + rama)
        evento(ident + " [code] ERROR abrir PR: " + str(e))

    # dejar el working tree principal limpio en master
    git(repo, "checkout", base)
    git(repo, "reset", "--hard", "origin/" + base)

finally:
    LOCK.unlink(missing_ok=True)
