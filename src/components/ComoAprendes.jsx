import { Wrench, MessageCircle } from 'lucide-react';
import { BRAND } from '../theme';

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
    <section style={{ background: 'var(--canvas-mid)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Metodología</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 12px' }}>
            Cómo aprendes
          </h2>
          <p style={{ fontSize: 17, color: 'var(--body)', margin: 0, lineHeight: 1.6 }}>
            Dos formas, ninguna necesita que programes.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="comoaprendes-grid">
          {ways.map(({ Icon, title, body }) => (
            <div key={title} className="card" style={{ padding: '32px 28px' }}>
              <div className="card-icon" style={{ marginBottom: 16 }}>
                <Icon size={20} color={BRAND} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 17, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--body)', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>

        {/* Hilo conductor */}
        <div className="card" style={{ padding: '36px 32px', marginTop: 16, textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 18, color: 'var(--ink)', margin: '0 0 10px', letterSpacing: '-0.01em' }}>
            Un hilo conductor de principio a fin
          </h3>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--body)', margin: '0 auto', maxWidth: 620 }}>
            Cada taller construye una pieza de un proyecto real, como si estuvieras
            implementando IA en tu propio consultorio u hospital. Al terminar no solo
            sabes usar herramientas: quedas entrenado para crear e implementar tu
            propio proyecto de IA. Y tu agente clínico sigue contigo después del curso.
          </p>
        </div>

      </div>
      <style>{`@media (max-width: 640px) { .comoaprendes-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
