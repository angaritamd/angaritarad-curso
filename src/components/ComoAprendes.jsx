import { Wrench, MessageCircle } from 'lucide-react';

const ways = [
  {
    Icon: Wrench,
    title: 'Talleres prácticos',
    body: 'Paso a paso construyes algo real en cada sesión: tu agente, tus automatizaciones, tu base de conocimiento.',
  },
  {
    Icon: MessageCircle,
    title: 'Tu agente clínico',
    body: 'Te acompaña desde el primer módulo y aprende del contexto de tu especialidad.',
  },
];

export default function ComoAprendes() {
  return (
    <section style={{ background: '#fafafa', padding: '96px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Metodología</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: '#17171c', margin: '0 0 12px' }}>
            Cómo aprendes
          </h2>
          <p style={{ fontSize: 17, color: '#616161', margin: 0, lineHeight: 1.6 }}>
            Dos formas, ninguna necesita que programes.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="comoaprendes-grid">
          {ways.map(({ Icon, title, body }) => (
            <div key={title} style={{ background: '#fff', border: '1px solid #f2f2f2', borderRadius: 12, padding: '32px 28px' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(239,68,68,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon size={20} color="#ef4444" />
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 17, color: '#17171c', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: '#616161', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .comoaprendes-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
