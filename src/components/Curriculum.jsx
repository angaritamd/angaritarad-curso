import { useState } from 'react';
import { ChevronDown, Clock } from 'lucide-react';
import { useLang } from '../i18n';

// Catálogo cherry-pick: 12 skills. Los Fundamentos flotan libres (opcionales,
// no bloquean nada); M1 es el único requerido y abre el resto; M8 cierra.
// El headline dice qué te permite hacer, no de qué trata.
// id/tone/hint(presencia) son estructurales y viven en ambos idiomas; el
// texto (badge, title, contents, hint) se traduce en STR.

const STR = {
  es: {
    contenidoLabel: 'Contenido',
    fundamentoOpcional: 'Fundamento · opcional',
    eyebrow: 'El contenido',
    h2: <>Aprende lo que necesitas,<br /><span style={{ color: 'var(--body)' }}>cuando lo necesitas.</span></>,
    navLineas: [
      'No hay orden fijo — elige los skills según lo que necesites.',
      '¿Nuevo en IA? Arranca en orden y no te pierdes.',
      'Cada módulo abre y cierra con un video que te dice qué hacer.',
    ],
    fundamentosLabel: 'Fundamentos',
    fundamentosDesc: 'Opcionales. No bloquean nada — tómalos cuando quieras, o sáltatelos.',
    puntoPartidaLabel: 'El punto de partida',
    puntoPartidaDesc: 'Sin M1 no hay tracking de tu progreso. Al terminarlo se abre el catálogo completo.',
    elegirLabel: 'Elige tus skills',
    elegirDesc: 'En cualquier orden. La única recomendación: M5 antes que M6.',
    graduacionLabel: 'Graduación',
    graduacionDesc: 'Se abre cuando completas el resto del catálogo.',
    fundamentos: [
      {
        id: 'F1',
        title: 'Ubica dónde está hoy la IA que usas',
        time: '20 min',
        contents: ['Las 3 eras de la IA', 'Qué cambió con los modelos generativos', 'Qué esperar y qué no de un agente clínico'],
      },
      {
        id: 'F2',
        title: 'Reconoce cuándo la IA se está equivocando',
        time: '20 min',
        contents: ['Por qué falla la IA', 'Alucinación: qué la causa', 'Señales de que una respuesta no es confiable', 'Qué nunca delegar'],
      },
      {
        id: 'F3',
        title: 'Entiende qué hace el modelo con lo que le escribes',
        time: '20 min',
        contents: ['Qué pasa dentro de un LLM', 'Ventana de contexto', 'Por qué el mismo prompt da respuestas distintas'],
      },
      {
        id: 'F4',
        title: 'Escribe prompts que no desperdicien contexto',
        time: '20 min',
        contents: ['Tokenización', 'Cómo se cuenta un token', 'Por qué un texto largo se corta', 'Costo y límites en la práctica'],
      },
    ],
    modulos: [
      {
        id: 'M1',
        badge: 'Empieza aquí · requerido',
        tone: 'required',
        title: 'Ten tu agente respondiendo en tu WhatsApp',
        time: '20 min',
        contents: [
          'Activación del agente en tu número',
          'Tu huella digital en GitHub: dónde queda tu progreso',
          'Primera conversación clínica de prueba',
          'Cómo se registra lo que completas',
        ],
      },
      {
        id: 'M2',
        badge: 'Requiere M1',
        tone: 'open',
        title: 'Escribe notas, remisiones y certificados en segundos',
        time: '20 min',
        contents: ['Documentación asistida', 'Razonamiento aumentado: la IA propone, tú decides', 'Plantillas con tu criterio, no genéricas', 'Revisión y firma'],
      },
      {
        id: 'M3',
        badge: 'Requiere M1',
        tone: 'open',
        title: 'Decide si construyes a tu escala o a la de tu institución',
        time: '20 min',
        contents: ['Clinical Coder vs Hospital Coder', 'Los 4 pilares del Hospital Coder', 'Qué cambia en gobernanza y acceso', 'Cómo elegir tu ruta'],
      },
      {
        id: 'M4',
        badge: 'Requiere M1',
        tone: 'open',
        title: 'Deja corriendo solas las tareas que hoy repites',
        time: '20 min',
        contents: ['Tu primer flujo en n8n, sin programar', 'Recordatorios y seguimientos automáticos', 'Qué automatizar y qué nunca', 'Cómo saber si un flujo falló'],
      },
      {
        id: 'M5',
        badge: 'Requiere M1',
        tone: 'open',
        hint: 'Recomendado antes de M6',
        title: 'Haz que el agente responda desde tus propias fuentes',
        time: '20 min',
        contents: ['RAG: tu segunda memoria clínica', 'Cargar tus guías, libros y protocolos', 'El agente cita de dónde sacó la respuesta', 'Mantener las fuentes al día'],
      },
      {
        id: 'M6',
        badge: 'Requiere M1',
        tone: 'open',
        hint: 'Va después de M5',
        title: 'Convierte lo que sabes en un artículo publicable',
        time: '20 min',
        contents: ['De tus fuentes a un borrador', 'Estructura de artículo, resumen y post', 'Revisión y control de autoría', 'Dónde publicarlo'],
      },
      {
        id: 'M7',
        badge: 'Requiere M1',
        tone: 'open',
        title: 'Trabaja con imágenes dentro de tu flujo clínico',
        time: '20 min',
        contents: ['IA e imágenes: qué puede y qué no', 'Lectura asistida y sus límites', 'Manejo responsable del material visual', 'Cuándo el ojo humano es irremplazable'],
      },
    ],
    graduacion: {
      id: 'M8',
      badge: 'Requiere el resto',
      tone: 'gated',
      title: 'Cierra con un entregable auditado y citable',
      time: '20 min',
      contents: [
        'Dr. Jarvis audita tu entregable',
        'DOI vía Zenodo: tu trabajo queda citable',
        'Tu CV digital con lo que construiste',
        'Entrada a la comunidad AngaritaRad-AI',
      ],
    },
  },
  en: {
    contenidoLabel: 'Contents',
    fundamentoOpcional: 'Fundamental · optional',
    eyebrow: 'The content',
    h2: <>Learn what you need,<br /><span style={{ color: 'var(--body)' }}>when you need it.</span></>,
    navLineas: [
      'No fixed order — choose the skills based on what you need.',
      "New to AI? Start in order and you won't get lost.",
      'Every module opens and closes with a video that tells you what to do.',
    ],
    fundamentosLabel: 'Fundamentals',
    fundamentosDesc: "Optional. They don't block anything — take them whenever you want, or skip them.",
    puntoPartidaLabel: 'Where to start',
    puntoPartidaDesc: "Without M1 there's no tracking of your progress. Finishing it unlocks the full catalog.",
    elegirLabel: 'Choose your skills',
    elegirDesc: 'In any order. The only recommendation: M5 before M6.',
    graduacionLabel: 'Graduation',
    graduacionDesc: 'Unlocks once you complete the rest of the catalog.',
    fundamentos: [
      {
        id: 'F1',
        title: 'Understand where the AI you use stands today',
        time: '20 min',
        contents: ['The 3 eras of AI', 'What changed with generative models', 'What to expect — and not expect — from a clinical agent'],
      },
      {
        id: 'F2',
        title: "Recognize when AI is getting it wrong",
        time: '20 min',
        contents: ['Why AI fails', 'Hallucination: what causes it', "Signs a response isn't trustworthy", 'What to never delegate'],
      },
      {
        id: 'F3',
        title: 'Understand what the model does with what you write',
        time: '20 min',
        contents: ['What happens inside an LLM', 'Context window', 'Why the same prompt gives different answers'],
      },
      {
        id: 'F4',
        title: "Write prompts that don't waste context",
        time: '20 min',
        contents: ['Tokenization', 'How a token is counted', 'Why long text gets cut off', 'Cost and limits in practice'],
      },
    ],
    modulos: [
      {
        id: 'M1',
        badge: 'Start here · required',
        tone: 'required',
        title: 'Get your agent answering on your WhatsApp',
        time: '20 min',
        contents: [
          'Activating the agent on your number',
          'Your GitHub footprint: where your progress lives',
          'First test clinical conversation',
          'How what you complete gets recorded',
        ],
      },
      {
        id: 'M2',
        badge: 'Requires M1',
        tone: 'open',
        title: 'Write notes, referrals, and certificates in seconds',
        time: '20 min',
        contents: ['Assisted documentation', 'Augmented reasoning: AI proposes, you decide', 'Templates built on your judgment, not generic ones', 'Review and sign-off'],
      },
      {
        id: 'M3',
        badge: 'Requires M1',
        tone: 'open',
        title: "Decide whether to build at your scale or your institution's",
        time: '20 min',
        contents: ['Clinical Coder vs Hospital Coder', 'The 4 pillars of Hospital Coder', 'What changes in governance and access', 'How to choose your path'],
      },
      {
        id: 'M4',
        badge: 'Requires M1',
        tone: 'open',
        title: 'Let the tasks you repeat today run on their own',
        time: '20 min',
        contents: ['Your first n8n flow, no coding', 'Automatic reminders and follow-ups', 'What to automate and what never to', 'How to know if a flow failed'],
      },
      {
        id: 'M5',
        badge: 'Requires M1',
        tone: 'open',
        hint: 'Recommended before M6',
        title: 'Make the agent answer from your own sources',
        time: '20 min',
        contents: ['RAG: your second clinical memory', 'Loading your guidelines, books, and protocols', 'The agent cites where the answer came from', 'Keeping your sources up to date'],
      },
      {
        id: 'M6',
        badge: 'Requires M1',
        tone: 'open',
        hint: 'Comes after M5',
        title: 'Turn what you know into a publishable article',
        time: '20 min',
        contents: ['From your sources to a draft', 'Article structure, abstract, and post', 'Review and authorship control', 'Where to publish it'],
      },
      {
        id: 'M7',
        badge: 'Requires M1',
        tone: 'open',
        title: 'Work with images inside your clinical workflow',
        time: '20 min',
        contents: ["AI and images: what it can and can't do", 'Assisted reading and its limits', 'Responsible handling of visual material', 'When the human eye is irreplaceable'],
      },
    ],
    graduacion: {
      id: 'M8',
      badge: 'Requires the rest',
      tone: 'gated',
      title: 'Close out with an audited, citable deliverable',
      time: '20 min',
      contents: [
        'Dr. Jarvis audits your deliverable',
        'DOI via Zenodo: your work becomes citable',
        'Your digital CV built from what you made',
        'Entry into the AngaritaRad-AI community',
      ],
    },
  },
};

/** Una skill del catálogo. El desplegable es independiente: varias pueden estar abiertas. */
function SkillCard({ item, open, onToggle, variant = 'modulo', contenidoLabel, fundamentoOpcionalLabel }) {
  const isFund = variant === 'fundamento';
  const accent = isFund ? 'var(--fundamento)' : 'var(--primary)';
  const badgeText = isFund ? fundamentoOpcionalLabel : item.badge;
  const isOpen = open;

  return (
    <div
      className="card"
      style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        ...(isFund ? { borderColor: 'var(--fundamento-line)' } : null),
      }}>
      <div style={{ padding: '20px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 12 }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.05em',
            color: accent, border: `1px solid ${isFund ? 'var(--fundamento-line)' : 'rgba(245,78,0,0.35)'}`,
            background: isFund ? 'var(--fundamento-soft)' : 'rgba(245,78,0,0.10)',
            borderRadius: 6, padding: '3px 8px', flexShrink: 0,
          }}>{item.id}</span>

          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em',
            color: item.tone === 'required' ? 'var(--on-primary)' : accent,
            background: item.tone === 'required' ? 'var(--primary)' : (isFund ? 'var(--fundamento-soft)' : 'transparent'),
            border: item.tone === 'required' ? 'none' : `1px solid ${isFund ? 'var(--fundamento-line)' : 'var(--hairline-strong)'}`,
            borderRadius: 6, padding: '3px 9px',
          }}>{badgeText}</span>

          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--muted)', fontSize: 12, fontFamily: 'var(--font-mono)', marginLeft: 'auto' }}>
            <Clock size={12} /> {item.time}
          </span>
        </div>

        <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 17, color: 'var(--ink)', letterSpacing: '-0.01em', margin: 0, lineHeight: 1.35 }}>
          {item.title}
        </h3>

        {item.hint && (
          <p style={{ fontSize: 12, color: 'var(--muted)', margin: '8px 0 0', fontFamily: 'var(--font-mono)' }}>{item.hint}</p>
        )}
      </div>

      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%', textAlign: 'left', padding: '14px 24px 18px', marginTop: 'auto',
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 6,
          color: 'var(--body)', fontSize: 13, fontFamily: 'var(--font-sans)',
        }}>
        {contenidoLabel}
        <ChevronDown size={14} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.18s ease' }} />
      </button>

      {isOpen && (
        <ul style={{ listStyle: 'none', margin: 0, padding: '0 24px 22px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {item.contents.map((c) => (
            <li key={c} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.6, color: 'var(--body)' }}>
              <span aria-hidden="true" style={{ color: accent, flexShrink: 0, marginTop: 7, width: 4, height: 4, borderRadius: '50%', background: accent, display: 'inline-block' }} />
              {c}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Curriculum() {
  const lang = useLang();
  const t = STR[lang] || STR.es;

  // Cherry-pick: varias skills abiertas a la vez, no una sola.
  const [open, setOpen] = useState(() => new Set(['M1']));
  const toggle = (id) => setOpen((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  return (
    <div id="contenido">
      {/* Banda de entrada sobre --canvas-mid: encabezado y box de navegación.
          Da el escalón de fondo que antes aportaba NoPitch, sin sumar copy. */}
      <section style={{ background: 'var(--canvas-mid)', borderBottom: '1px solid var(--hairline)', padding: '96px 24px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>{t.eyebrow}</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 16px', lineHeight: 1.1 }}>
            {t.h2}
          </h2>
          {/* Box de navegación. La narrativa larga vive en /introduccion —
              aquí solo va lo que hace falta para moverse por el catálogo. */}
          <div className="card card--static card--raised" style={{ maxWidth: 660, padding: '20px 24px', margin: 0 }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {t.navLineas.map((linea) => (
              <li key={linea} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.6, color: 'var(--body)' }}>
                <span aria-hidden="true" style={{ flexShrink: 0, marginTop: 8, width: 4, height: 4, borderRadius: '50%', background: 'var(--primary)', display: 'inline-block' }} />
                {linea}
              </li>
            ))}
          </ul>
        </div>

        </div>
      </section>

      {/* Catálogo sobre el lienzo base */}
      <section style={{ background: 'var(--canvas)', padding: '56px 24px 96px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
        {/* Fundamentos — flotan libres, no bloquean nada */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
          <span className="mono-label" style={{ color: 'var(--fundamento)' }}>{t.fundamentosLabel}</span>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>{t.fundamentosDesc}</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, marginBottom: 48 }} className="catalogo-grid">
          {t.fundamentos.map((f) => (
            <SkillCard key={f.id} item={f} variant="fundamento" open={open.has(f.id)} onToggle={() => toggle(f.id)} contenidoLabel={t.contenidoLabel} fundamentoOpcionalLabel={t.fundamentoOpcional} />
          ))}
        </div>

        {/* M1 — la única puerta */}
        <span className="mono-label" style={{ display: 'block', marginBottom: 6 }}>{t.puntoPartidaLabel}</span>
        <p style={{ fontSize: 13, color: 'var(--muted)', margin: '0 0 12px' }}>
          {t.puntoPartidaDesc}
        </p>
        <div style={{ marginBottom: 48 }}>
          <SkillCard item={t.modulos[0]} open={open.has('M1')} onToggle={() => toggle('M1')} contenidoLabel={t.contenidoLabel} fundamentoOpcionalLabel={t.fundamentoOpcional} />
        </div>

        {/* M2–M7 — cherry-pick */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
          <span className="mono-label">{t.elegirLabel}</span>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>{t.elegirDesc}</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, marginBottom: 48 }} className="catalogo-grid">
          {t.modulos.slice(1).map((m) => (
            <SkillCard key={m.id} item={m} open={open.has(m.id)} onToggle={() => toggle(m.id)} contenidoLabel={t.contenidoLabel} fundamentoOpcionalLabel={t.fundamentoOpcional} />
          ))}
        </div>

        {/* M8 — cierre */}
        <span className="mono-label" style={{ display: 'block', marginBottom: 6 }}>{t.graduacionLabel}</span>
        <p style={{ fontSize: 13, color: 'var(--muted)', margin: '0 0 12px' }}>
          {t.graduacionDesc}
        </p>
        <SkillCard item={t.graduacion} open={open.has('M8')} onToggle={() => toggle('M8')} contenidoLabel={t.contenidoLabel} fundamentoOpcionalLabel={t.fundamentoOpcional} />
        </div>
      </section>

      <style>{`@media (max-width: 720px) { .catalogo-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
