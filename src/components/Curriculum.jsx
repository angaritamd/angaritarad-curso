import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const modules = [
  { id: 0, title: 'MÓDULO 0 — Activa tu asistente en WhatsApp', deliverable: 'Acceso a infraestructura y agente activo en tu número', description: 'Activas tu agente Angaritarad-AI y lo conectas a tu WhatsApp. Realizas tu primera consulta clínica y entiendes en la práctica cómo un agente supera a herramientas tradicionales. Desde el inicio ves respuestas útiles aplicadas a tu trabajo diario.', result: 'Tu asistente queda funcionando en tu número y listo para uso clínico inmediato.' },
  { id: 1, title: 'MÓDULO 1 — Usa tu agente en la práctica real', deliverable: 'Primeros usos clínicos aplicados', description: 'Empiezas a usar el agente como parte de tu consulta. Dictas información clínica, haces preguntas rápidas y consultas casos reales. El agente responde, organiza y te ayuda a tomar decisiones de forma más ágil. Este módulo está enfocado en uso diario, no en configuración.', result: 'Integras el agente en tu flujo clínico desde el primer día.' },
  { id: 2, title: 'MÓDULO 2 — Haz que el agente piense como tú', deliverable: 'Protocolos clínicos y criterios personalizados activos', description: 'Configuras tu agente con tus protocolos, guías y criterios de especialidad. Ajustas su forma de responder para que refleje tu criterio clínico y tu estilo de trabajo. El agente deja de ser genérico y empieza a alinearse con tu práctica médica.', result: 'Un asistente personalizado que responde según tus estándares clínicos.' },
  { id: 3, title: 'MÓDULO 3 — Automatiza tareas que te quitan tiempo', deliverable: 'Primer flujo automático activo', description: 'Configuras automatizaciones simples para seguimiento de pacientes, recordatorios y respuestas frecuentes. El agente empieza a ejecutar tareas sin que tengas que intervenir en cada interacción.', result: 'Reducción de carga operativa y más tiempo disponible para actividades clínicas.' },
  { id: 4, title: 'MÓDULO 4 — Usa el agente como filtro clínico', deliverable: 'Checklist de seguridad y red flags activo', description: 'Defines criterios de alerta y banderas rojas según tu especialidad. El agente funciona como un segundo filtro antes de tomar decisiones, ayudando a identificar situaciones que requieren mayor atención.', result: 'Mayor seguridad en la práctica clínica y apoyo en la toma de decisiones.' },
  { id: 5, title: 'MÓDULO 5 — Integra tu equipo al sistema', deliverable: 'Equipo conectado con supervisión activa', description: 'Incorporas a tu equipo de trabajo al uso del agente, asignando niveles de acceso según el rol. Puedes supervisar interacciones y mantener control sobre la comunicación clínica desde un solo lugar.', result: 'El agente deja de ser individual y se convierte en una herramienta operativa para todo el equipo.' },
  { id: 'bonus', title: 'MÓDULO BONUS — Aplicación en radiología e imágenes', deliverable: 'Protocolos de reporte estructurado y análisis clínico', description: 'Aplicación del agente en escenarios de radiología, incluyendo generación de reportes estructurados, apoyo en diagnóstico diferencial y estandarización de criterios de indicación.', result: 'Uso especializado del agente en entornos de diagnóstico por imágenes.', badge: 'Bonus' },
  { id: 'final', title: 'MÓDULO FINAL — Comunidad Angaritarad-AI', deliverable: 'Acceso a repositorio de configuraciones y red profesional', description: 'Acceso a una comunidad donde puedes intercambiar configuraciones, aprender de otros médicos y mejorar continuamente el desempeño de tu agente.', result: 'Evolución constante del sistema mediante aprendizaje colectivo.', badge: 'Comunidad' },
];

export default function Curriculum() {
  const [open, setOpen] = useState(0);

  return (
    <section id="temario" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Temario</span>
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: '#17171c', margin: '0 0 8px' }}>
          8 módulos. Cada uno con un entregable concreto.
        </h2>
        <p style={{ fontSize: 17, color: '#616161', marginBottom: 48, lineHeight: 1.6 }}>
          No teoría. Al terminar cada módulo, tu agente hace algo nuevo que antes no hacía.
        </p>

        <div style={{ borderTop: '1px solid #e5e7eb' }}>
          {modules.map((mod) => (
            <div key={mod.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <button onClick={() => setOpen(mod.id)} style={{
                width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flex: 1 }}>
                  <span style={{
                    background: typeof mod.id === 'number' ? '#17171c' : '#ef4444',
                    color: '#fff', borderRadius: 6, padding: '2px 8px', fontSize: 11,
                    fontFamily: 'JetBrains Mono, monospace', flexShrink: 0, marginTop: 2,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                  }}>
                    {mod.badge || `M${mod.id}`}
                  </span>
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 15, color: '#17171c', letterSpacing: '-0.01em' }}>
                    {mod.title.replace(/^MÓDULO \w+ — /, '')}
                  </span>
                </div>
                <div style={{ flexShrink: 0, color: '#93939f', marginTop: 2 }}>
                  {open === mod.id ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {open === mod.id && (
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
          ))}
        </div>
      </div>
    </section>
  );
}
