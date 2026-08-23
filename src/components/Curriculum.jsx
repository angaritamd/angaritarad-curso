import { useState } from 'react';
import { ChevronDown, Clock } from 'lucide-react';

// Catálogo cherry-pick: 12 skills. Los Fundamentos flotan libres (opcionales,
// no bloquean nada); M1 es el único requerido y abre el resto; M8 cierra.
// El headline dice qué te permite hacer, no de qué trata.

const fundamentos = [
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
];

const modulos = [
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
];

const graduacion = {
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
};

/** Una skill del catálogo. El desplegable es independiente: varias pueden estar abiertas. */
function SkillCard({ item, open, onToggle, variant = 'modulo' }) {
  const isFund = variant === 'fundamento';
  const accent = isFund ? 'var(--fundamento)' : 'var(--primary)';
  const badgeText = isFund ? 'Fundamento · opcional' : item.badge;
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
        Contenido
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
  // Cherry-pick: varias skills abiertas a la vez, no una sola.
  const [open, setOpen] = useState(() => new Set(['M1']));
  const toggle = (id) => setOpen((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  return (
    <section id="contenido" style={{ background: 'var(--canvas)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>El contenido</span>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 16px', lineHeight: 1.1 }}>
          Aprende lo que necesitas,<br />
          <span style={{ color: 'var(--body)' }}>cuando lo necesitas.</span>
        </h2>
        <p style={{ fontSize: 17, color: 'var(--body)', margin: '0 0 12px', lineHeight: 1.65, maxWidth: 660 }}>
          12 skills de ~20 minutos. Empiezas por M1 y desde ahí eliges: no hay
          un orden obligatorio ni hay que verlo todo. Tomas la skill el día que
          te hace falta en la consulta.
        </p>
        <p style={{ fontSize: 15, color: 'var(--muted)', margin: '0 0 12px', lineHeight: 1.65, maxWidth: 660 }}>
          Nunca programas. Configuras tus agentes escribiéndoles en lenguaje
          natural, igual que le explicarías un caso a un colega.
        </p>
        <p style={{ fontSize: 15, color: 'var(--muted)', margin: '0 0 48px', lineHeight: 1.65, maxWidth: 660 }}>
          Los videos en vivo van tejidos dentro de cada módulo, antes y después
          de las skills, para darle ritmo al curso y resolver dudas sobre lo que
          acabas de montar.
        </p>

        {/* Fundamentos — flotan libres, no bloquean nada */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
          <span className="mono-label" style={{ color: 'var(--fundamento)' }}>Fundamentos</span>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>Opcionales. No bloquean nada — tómalos cuando quieras, o sáltatelos.</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, marginBottom: 48 }} className="catalogo-grid">
          {fundamentos.map((f) => (
            <SkillCard key={f.id} item={f} variant="fundamento" open={open.has(f.id)} onToggle={() => toggle(f.id)} />
          ))}
        </div>

        {/* M1 — la única puerta */}
        <span className="mono-label" style={{ display: 'block', marginBottom: 6 }}>El punto de partida</span>
        <p style={{ fontSize: 13, color: 'var(--muted)', margin: '0 0 12px' }}>
          Sin M1 no hay tracking de tu progreso. Al terminarlo se abre el catálogo completo.
        </p>
        <div style={{ marginBottom: 48 }}>
          <SkillCard item={modulos[0]} open={open.has('M1')} onToggle={() => toggle('M1')} />
        </div>

        {/* M2–M7 — cherry-pick */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
          <span className="mono-label">Elige tus skills</span>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>En cualquier orden. La única recomendación: M5 antes que M6.</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, marginBottom: 48 }} className="catalogo-grid">
          {modulos.slice(1).map((m) => (
            <SkillCard key={m.id} item={m} open={open.has(m.id)} onToggle={() => toggle(m.id)} />
          ))}
        </div>

        {/* M8 — cierre */}
        <span className="mono-label" style={{ display: 'block', marginBottom: 6 }}>Graduación</span>
        <p style={{ fontSize: 13, color: 'var(--muted)', margin: '0 0 12px' }}>
          Se abre cuando completas el resto del catálogo.
        </p>
        <SkillCard item={graduacion} open={open.has('M8')} onToggle={() => toggle('M8')} />
      </div>

      <style>{`@media (max-width: 720px) { .catalogo-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
