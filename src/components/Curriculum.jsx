import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// Estructura real del curso: 13 piezas (4 Fundamentals + 1 Orientación + 8 Módulos)
// más 2 recaps grabados en cámara.
// TODO(Miguel): F1–F4 y M6–M8 no tienen título/descripción pública todavía —
// cuando estén definidos, agregarlos aquí con el mismo formato que M0–M5.

const stages = [
  { n: '01', label: 'Fundamentals', count: '4 piezas', range: 'F1 – F4' },
  { n: '02', label: 'Orientación', count: '1 pieza', range: 'M0' },
  { n: '03', label: 'Módulos principales', count: '8 módulos', range: 'M1 – M8' },
  { n: '04', label: 'Recaps', count: '2 grabados en cámara', range: 'R1 – R2' },
];

const orientation = [
  { id: 'M0', title: 'Activa tu asistente en WhatsApp', deliverable: 'Acceso a infraestructura y agente activo en tu número', description: 'Activas tu agente Angaritarad-AI y lo conectas a tu WhatsApp. Realizas tu primera consulta clínica y entiendes en la práctica cómo un agente supera a herramientas tradicionales. Desde el inicio ves respuestas útiles aplicadas a tu trabajo diario.', result: 'Tu asistente queda funcionando en tu número y listo para uso clínico inmediato.' },
];

const mainModules = [
  { id: 'M1', title: 'Usa tu agente en la práctica real', deliverable: 'Primeros usos clínicos aplicados', description: 'Empiezas a usar el agente como parte de tu consulta. Dictas información clínica, haces preguntas rápidas y consultas casos reales. El agente responde, organiza y te ayuda a tomar decisiones de forma más ágil. Este módulo está enfocado en uso diario, no en configuración.', result: 'Integras el agente en tu flujo clínico desde el primer día.' },
  { id: 'M2', title: 'Haz que el agente piense como tú', deliverable: 'Protocolos clínicos y criterios personalizados activos', description: 'Configuras tu agente con tus protocolos, guías y criterios de especialidad. Ajustas su forma de responder para que refleje tu criterio clínico y tu estilo de trabajo. El agente deja de ser genérico y empieza a alinearse con tu práctica médica.', result: 'Un asistente personalizado que responde según tus estándares clínicos.' },
  { id: 'M3', title: 'Automatiza tareas que te quitan tiempo', deliverable: 'Primer flujo automático activo', description: 'Configuras automatizaciones simples para seguimiento de pacientes, recordatorios y respuestas frecuentes. El agente empieza a ejecutar tareas sin que tengas que intervenir en cada interacción.', result: 'Reducción de carga operativa y más tiempo disponible para actividades clínicas.' },
  { id: 'M4', title: 'Usa el agente como filtro clínico', deliverable: 'Checklist de seguridad y red flags activo', description: 'Defines criterios de alerta y banderas rojas según tu especialidad. El agente funciona como un segundo filtro antes de tomar decisiones, ayudando a identificar situaciones que requieren mayor atención.', result: 'Mayor seguridad en la práctica clínica y apoyo en la toma de decisiones.' },
  { id: 'M5', title: 'Integra tu equipo al sistema', deliverable: 'Equipo conectado con supervisión activa', description: 'Incorporas a tu equipo de trabajo al uso del agente, asignando niveles de acceso según el rol. Puedes supervisar interacciones y mantener control sobre la comunicación clínica desde un solo lugar.', result: 'El agente deja de ser individual y se convierte en una herramienta operativa para todo el equipo.' },
];

// Módulos avanzados sin detalle público todavía (ver TODO arriba).
const upcomingModules = ['M6', 'M7', 'M8'];

function GroupLabel({ children }) {
  return (
    <span className="mono-label" style={{ display: 'block', margin: '40px 0 8px' }}>
      {children}
    </span>
  );
}

function AccordionRow({ mod, open, onToggle }) {
  const isOpen = open === mod.id;
  return (
    <div style={{ borderBottom: '1px solid #e5e7eb' }}>
      <button onClick={() => onToggle(mod.id)} style={{
        width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flex: 1 }}>
          <span style={{
            background: '#17171c', color: '#fff', borderRadius: 6, padding: '2px 8px', fontSize: 11,
            fontFamily: 'JetBrains Mono, monospace', flexShrink: 0, marginTop: 2,
            textTransform: 'uppercase', letterSpacing: '0.05em',
          }}>
            {mod.id}
          </span>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 15, color: '#17171c', letterSpacing: '-0.01em' }}>
            {mod.title}
          </span>
        </div>
        <div style={{ flexShrink: 0, color: '#93939f', marginTop: 2 }}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      {isOpen && (
        <div style={{ paddingBottom: 24, paddingLeft: 56 }}>
          <div style={{ background: '#fafafa', border: '1px solid #f2f2f2', borderRadius: 10, padding: '16px 20px', marginBottom: 12 }}>
            <span className="mono-label" style={{ display: 'block', marginBottom: 6 }}>Entregable</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: '#17171c' }}>{mod.deliverable}</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: '#616161', margin: '0 0 12px' }}>{mod.description}</p>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <span style={{ color: '#22c55e', fontSize: 14, flexShrink: 0 }}>✓</span>
            <span style={{ fontSize: 14, color: '#212121', fontWeight: 500 }}>{mod.result}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Curriculum() {
  const [open, setOpen] = useState('M0');
  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <section id="temario" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Estructura del curso</span>
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: '#17171c', margin: '0 0 8px' }}>
          13 piezas. Un camino claro.
        </h2>
        <p style={{ fontSize: 17, color: '#616161', marginBottom: 40, lineHeight: 1.6 }}>
          Cuatro fundamentals, una orientación para activar tu agente y ocho módulos
          prácticos — cada uno con un entregable concreto. Más dos recaps grabados
          en cámara.
        </p>

        {/* Overview: las 4 etapas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }} className="stages-grid">
          {stages.map((s) => (
            <div key={s.n} style={{ background: '#fafafa', border: '1px solid #f2f2f2', borderRadius: 12, padding: '18px 16px' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#ef4444', display: 'block', marginBottom: 10 }}>{s.n}</span>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 14, color: '#17171c', letterSpacing: '-0.01em', marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: '#93939f' }}>{s.count}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#93939f', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.range}</div>
            </div>
          ))}
        </div>

        {/* 01 · Fundamentals */}
        <GroupLabel>01 · Fundamentals</GroupLabel>
        <div style={{ borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '20px 0', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          {['F1', 'F2', 'F3', 'F4'].map((f) => (
            <span key={f} style={{ background: '#eeece7', color: '#17171c', borderRadius: 6, padding: '2px 8px', fontSize: 11, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}>{f}</span>
          ))}
          <span style={{ fontSize: 14, color: '#616161' }}>
            La base del programa antes de activar tu agente. Detalle completo al inscribirte.
          </span>
        </div>

        {/* 02 · Orientación */}
        <GroupLabel>02 · Orientación</GroupLabel>
        <div style={{ borderTop: '1px solid #e5e7eb' }}>
          {orientation.map((mod) => (
            <AccordionRow key={mod.id} mod={mod} open={open} onToggle={toggle} />
          ))}
        </div>

        {/* 03 · Módulos principales */}
        <GroupLabel>03 · Módulos principales</GroupLabel>
        <div style={{ borderTop: '1px solid #e5e7eb' }}>
          {mainModules.map((mod) => (
            <AccordionRow key={mod.id} mod={mod} open={open} onToggle={toggle} />
          ))}
          <div style={{ borderBottom: '1px solid #e5e7eb', padding: '20px 0', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            {upcomingModules.map((m) => (
              <span key={m} style={{ background: '#17171c', color: '#fff', borderRadius: 6, padding: '2px 8px', fontSize: 11, fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m}</span>
            ))}
            <span style={{ fontSize: 14, color: '#616161' }}>
              Módulos avanzados — temario completo al inscribirte.
            </span>
          </div>
        </div>

        {/* 04 · Recaps */}
        <GroupLabel>04 · Recaps</GroupLabel>
        <div style={{ borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '20px 0', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          {['R1', 'R2'].map((r) => (
            <span key={r} style={{ background: '#ef4444', color: '#fff', borderRadius: 6, padding: '2px 8px', fontSize: 11, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}>{r}</span>
          ))}
          <span style={{ fontSize: 14, color: '#616161' }}>
            Dos recaps grabados en cámara para repasar el programa completo.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stages-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
