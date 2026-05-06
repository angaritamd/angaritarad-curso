const benefits = [
  {
    icon: '🧠',
    title: 'Tu conocimiento, no el de internet',
    body: 'El agente responde con los protocolos que tú cargas. Tus criterios de derivación, tus guías de manejo, tu especialidad — no el promedio de internet.',
  },
  {
    icon: '💬',
    title: 'WhatsApp como centro de control',
    body: 'Sin apps nuevas. Escribes como siempre. El agente responde, recuerda el contexto y atiende a tu equipo con distintos niveles de acceso desde un solo canal.',
  },
  {
    icon: '📅',
    title: 'Agendamiento sin Apps',
    body: 'Integración nativa con WhatsApp. Tu equipo chatea con el agente y las citas aparecen organizadas automáticamente — sin secretarias adicionales ni portales complejos.',
  },
  {
    icon: '🛡️',
    title: 'Tus criterios de alerta, no los de internet',
    body: 'Configuras tus banderas rojas por especialidad. El agente actúa como segundo criterio antes de decidir — con tus protocolos, no con guías genéricas.',
  },
  {
    icon: '👥',
    title: 'Comunidad médica activa',
    body: 'Accede a configuraciones compartidas por otros médicos. Un cardiólogo comparte su protocolo, un radiólogo el suyo. Tu agente mejora con la comunidad.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" style={{ background: '#eeece7', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start' }} className="benefits-grid">
          {/* Left sticky header */}
          <div style={{ position: 'sticky', top: 96 }}>
            <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Por qué elegirlo</span>
            <h2 style={{
              fontFamily: 'Space Grotesk', fontWeight: 400,
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              letterSpacing: '-0.02em', color: '#17171c', margin: '0 0 20px',
            }}>
              Un agente que trabaja como tú quieres que trabaje.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#616161' }}>
              Centralizamos múltiples capacidades en un solo agente configurado por ti para tu consulta.
            </p>
          </div>

          {/* Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{
                background: '#fff', border: '1px solid #f2f2f2',
                borderRadius: i === 0 ? '16px 16px 4px 4px' : i === benefits.length - 1 ? '4px 4px 16px 16px' : '4px',
                padding: '24px 28px',
                transition: 'box-shadow 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 22, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{b.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 16, color: '#17171c', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                      {b.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: '#616161', margin: 0 }}>{b.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
          .benefits-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
