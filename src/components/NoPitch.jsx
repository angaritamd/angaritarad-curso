export default function NoPitch() {
  return (
    <section style={{ background: '#003c33', padding: '80px 24px', color: '#fff' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <span className="mono-label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 24, display: 'block' }}>
          La diferencia
        </span>
        <h2 style={{
          fontFamily: 'Space Grotesk', fontWeight: 400,
          fontSize: 'clamp(1.75rem, 4vw, 3rem)',
          lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: 24,
        }}>
          No es un curso de videos.<br />
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Es el entrenamiento de tu agente.</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto 40px' }}>
          Los cursos de IA para médicos enseñan a usar ChatGPT. Este programa tiene un objetivo diferente: al terminar el Módulo 0, tu agente ya está activo respondiendo por WhatsApp. Cada módulo siguiente le enseña algo nuevo — con tu voz, tus guías, tus criterios.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 700, margin: '0 auto', textAlign: 'left' }}>
          {[
            { n: '0', label: 'Agente activo', sub: 'Desde el primer módulo' },
            { n: '8', label: 'Módulos prácticos', sub: 'Con entregable concreto' },
            { n: '∞', label: 'Acceso de por vida', sub: 'A tu agente configurado' },
          ].map(item => (
            <div key={item.n} style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 20 }}>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: 36, fontWeight: 400, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>{item.n}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#fff', marginTop: 8 }}>{item.label}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          section > div > div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
