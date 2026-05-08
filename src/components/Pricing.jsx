import { Check, Users } from 'lucide-react';

const plans = [
  {
    name: 'Angaritarad-AI Programa',
    price: '$697.000',
    period: '',
    description: 'El recorrido completo para entrenar tu agente',
    features: ['Todos los módulos + talleres en vivo', 'Comunidad médica + repositorio de configuraciones', 'Certificado de finalización', 'Garantía de 14 días'],
    badge: null,
    highlighted: false,
    tag: 'Médicos & Especialistas',
  },
  {
    name: 'Agente Angaritarad-AI',
    price: '$59.000',
    period: '/mes',
    description: 'Tu asistente IA en producción, gestionado por nosotros',
    strikethrough: '$944.000 COP',
    features: ['WhatsApp conectado a tu agente', 'Panel de supervisión Chatwoot', 'Base de usuarios Supabase', 'Soporte de infraestructura incluido', 'Pago mensual'],
    badge: 'Solo graduados',
    subBadge: 'Inicio: 25 de junio — Cupos limitados',
    highlighted: true,
    tag: 'Graduados AngaritaRad-AI',
  },
  {
    name: 'Angaritarad-AI Suite',
    price: 'A consultar',
    period: '',
    description: 'Para clínicas, grupos médicos y hospitales',
    features: ['Múltiples usuarios con roles diferenciados', 'Admin centralizado con reportes de uso', 'Integración con sistemas existentes', 'Onboarding personalizado'],
    badge: null,
    highlighted: false,
    tag: null,
  },
];

export default function Pricing({ onOpenModal }) {
  return (
    <section id="precios" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Planes</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: '#17171c', margin: '0 0 16px' }}>
            Planes de Implementación Angaritarad-AI
          </h2>
          <p style={{ fontSize: 17, color: '#616161', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
            Elige el nivel de autonomía que tu práctica clínica necesita.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, alignItems: 'start' }} className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} style={{
              border: plan.highlighted ? '2px solid #ef4444' : '1px solid #e5e7eb',
              borderRadius: 16, padding: 28,
              background: plan.highlighted ? '#fff' : '#fafafa',
              transform: plan.highlighted ? 'scale(1.02)' : 'none',
              boxShadow: plan.highlighted ? '0 8px 32px rgba(239,68,68,0.12)' : 'none',
              display: 'flex', flexDirection: 'column', position: 'relative',
            }}>
              {plan.badge && (
                <span style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: plan.badge === 'Solo graduados' ? '#1863dc' : '#ef4444', color: '#fff', fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 32, whiteSpace: 'nowrap', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {plan.badge}
                </span>
              )}

              {plan.tag && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(24,99,220,0.07)', border: '1px solid rgba(24,99,220,0.15)', borderRadius: 32, padding: '4px 10px', marginBottom: 16, width: 'fit-content' }}>
                  <Users size={12} color="#1863dc" />
                  <span style={{ fontSize: 11, color: '#1863dc', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{plan.tag}</span>
                </div>
              )}

              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 16, color: '#17171c', margin: '0 0 8px' }}>{plan.name}</h3>

              <div style={{ marginBottom: 8 }}>
                {plan.strikethrough && <span style={{ textDecoration: 'line-through', fontSize: 13, color: '#93939f', display: 'block' }}>{plan.strikethrough}</span>}
                <span style={{ fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: 400, color: '#17171c', letterSpacing: '-0.02em' }}>{plan.price}</span>
                {plan.price !== 'A consultar' && <span style={{ fontSize: 13, color: '#93939f', marginLeft: 2 }}>COP{plan.period}</span>}
              </div>

              <p style={{ fontSize: 13, color: '#616161', margin: '0 0 24px', lineHeight: 1.5 }}>{plan.description}</p>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Check size={14} color="#22c55e" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 13, color: '#212121', lineHeight: 1.4 }}>{f}</span>
                  </div>
                ))}
              </div>

              {plan.badge === 'Solo graduados' ? (
                <>
                  <a
                    href="mailto:angaritarad@gmail.com?subject=Extensión agente radiología — Graduado&body=Hola Dr. Angarita, terminé el curso y quiero extender el agente de radiología."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ width: '100%', justifyContent: 'center', fontSize: 14, padding: '11px 20px', textDecoration: 'none' }}>
                    Acceso exclusivo graduados
                  </a>
                  <p style={{ fontSize: 11, color: '#93939f', textAlign: 'center', marginTop: 8 }}>
                    Disponible al completar los 8 módulos del curso
                  </p>
                </>
              ) : (
                <button onClick={onOpenModal}
                  className={plan.highlighted ? 'btn-brand' : 'btn-outline'}
                  style={{ width: '100%', justifyContent: 'center', fontSize: 14, padding: '11px 20px' }}>
                  {plan.price === 'A consultar' ? 'Solicitar información' : 'Comenzar'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-grid > div { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
