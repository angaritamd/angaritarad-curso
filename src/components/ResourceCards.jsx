import { ArrowRight } from 'lucide-react';

const resources = [
  {
    gradient: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
    tag: 'GUÍA GRATUITA',
    title: 'Cómo dictar una historia clínica en 30 segundos con IA',
    desc: 'El flujo exacto que usan los médicos del programa para acelerar su documentación diaria.',
    cta: 'Descargar guía',
  },
  {
    gradient: 'linear-gradient(135deg, #003c33 0%, #065f46 100%)',
    tag: 'WEBINAR',
    title: 'IA en radiología: lo que ya funciona hoy en Latinoamérica',
    desc: 'Casos reales de radiólogos colombianos usando agentes en su práctica diaria.',
    cta: 'Ver grabación',
  },
  {
    gradient: 'linear-gradient(135deg, #1863dc 0%, #1e40af 100%)',
    tag: 'CHECKLIST',
    title: 'Red flags clínicas por especialidad — configura tu agente',
    desc: 'Plantilla lista para cargar en tu agente con las alertas más críticas de tu especialidad.',
    cta: 'Obtener checklist',
  },
];

export default function ResourceCards({ onOpenModal }) {
  return (
    <section style={{ background: '#fafafa', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="mono-label" style={{ display: 'block', marginBottom: 12 }}>Recursos</span>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em', color: '#17171c', margin: 0 }}>
              Herramientas para empezar hoy
            </h2>
          </div>
          <button onClick={onOpenModal} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: '#ef4444', fontFamily: 'Space Grotesk', fontWeight: 500 }}>
            Ver todos los recursos <ArrowRight size={14} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="resources-grid">
          {resources.map((r, i) => (
            <div key={i} style={{ borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: r.gradient, padding: '32px 28px 28px', flex: 1 }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: 16 }}>{r.tag}</span>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 18, color: '#fff', margin: '0 0 12px', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{r.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
              </div>
              <button onClick={onOpenModal} style={{ background: 'rgba(0,0,0,0.85)', border: 'none', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', color: '#fff', fontSize: 13, fontFamily: 'Space Grotesk', fontWeight: 500 }}>
                {r.cta} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .resources-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
