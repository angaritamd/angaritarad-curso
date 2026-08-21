const results = [
  'Documenta notas de historia clínica, remisiones y certificados en segundos',
  'Ten un asistente clínico que responde con tu criterio',
  'Automatiza tareas repetitivas sin escribir una línea de código',
  'Construye tu memoria clínica y publica tu conocimiento',
];

const stats = [
  { n: '7', label: 'Módulos prácticos', sub: 'Construyes algo real en cada uno' },
  { n: '✎', label: 'Talleres guiados', sub: 'Paso a paso, sin tecnicismos' },
  { n: '0', label: 'Desde cero', sub: 'Sin saber nada de IA' },
];

export default function NoPitch() {
  return (
    <section style={{ background: 'var(--canvas-mid)', padding: '80px 24px', color: 'var(--ink)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <span className="mono-label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 24, display: 'block' }}>
          Qué vas a lograr
        </span>
        <h2 style={{
          fontFamily: 'var(--font-sans)', fontWeight: 400,
          fontSize: 'clamp(1.75rem, 4vw, 3rem)',
          lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32,
        }}>
          No es un curso de teoría.<br />
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Es IA aplicada a tu práctica.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 680, margin: '0 auto 48px', textAlign: 'left' }} className="results-grid">
          {results.map((item, i) => (
            <div key={i} className="card" style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '16px 18px' }}>
              <span style={{ color: 'var(--aurora-mint)', fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 700, margin: '0 auto', textAlign: 'left' }} className="stats-grid">
          {stats.map(item => (
            <div key={item.label} style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 20 }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 36, fontWeight: 400, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1 }}>{item.n}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)', marginTop: 8 }}>{item.label}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .results-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
