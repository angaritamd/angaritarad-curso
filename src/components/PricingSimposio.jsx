// Sección de precios lanzada el día del IV Simposio (2026-09-11).
// Contenido y paleta teal vienen del welcome pack del curso (ver public/welcome.html);
// por eso la sección es una "isla clara" sobre el canvas oscuro del sitio.
// Los botones abren el modal de registro existente — no hay pasarela de pago embebida aún.

const TEAL = '#1D9E75';
const TEAL_LIGHT = '#E1F5EE';
const TEAL_DARK = '#085041';
const AMBER_LIGHT = '#FAEEDA';
const AMBER = '#BA7517';
const AMBER_DARK = '#633806';
const TEXT = '#1a1a1a';
const MUTED = '#6b6b6b';
const HINT = '#9e9e9e';
const BORDER = 'rgba(0,0,0,0.1)';

const checks = ['✓ Acceso inmediato', '✓ Todos los módulos', '✓ Comunidad + soporte'];

const infoItems = [
  { label: 'Inicio del curso', value: '1 de octubre', desc: 'Acceso inmediato a todos los módulos.' },
  { label: 'Duración', value: '8 semanas', desc: 'Autorrítmo. Cada módulo toma ~2 horas.' },
  { label: 'Certificación', value: 'DOI + GitHub', desc: 'No PDF. Credencial auditable profesional.' },
];

const faqs = [
  {
    q: '¿Qué incluye exactamente?',
    a: 'Acceso a 8 módulos de contenido, práctica en WhatsApp con tu agente personal, comunidad privada, templates y herramientas de automatización. Todo lo que necesitas para activar tu IA clínica.',
  },
  {
    q: '¿Hay reembolso?',
    a: 'Garantía de 7 días. Si después de revisar los primeros módulos cambias de parecer, devolvemos tu inversión sin preguntas.',
  },
  {
    q: '¿Necesito conocimientos técnicos previos?',
    a: 'No. El curso parte de cero. Si eres médico y usas WhatsApp, estás listo. Las herramientas (n8n, RAG, etc.) se enseñan paso a paso sin código.',
  },
  {
    q: '¿Qué métodos de pago aceptan?',
    a: 'Transferencia bancaria, tarjeta crédito/débito (Wompi), PSE. Los botones de pago arriba te guían por cada opción.',
  },
];

export default function PricingSimposio({ onOpenModal }) {
  const btnStyle = {
    width: '100%', padding: '0.875rem 1.5rem', borderRadius: 100, background: TEAL,
    color: '#fff', border: 'none', fontSize: 14, fontWeight: 600, cursor: 'pointer',
    transition: 'all 0.2s ease', fontFamily: 'inherit',
  };

  return (
    <section id="pricing" style={{ background: '#f0efe9', padding: '4rem 0 0' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 3rem 4rem' }} className="ps-wrap">

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: TEXT, marginBottom: '0.5rem' }} className="ps-title">Inversión en tu desarrollo</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, maxWidth: 640 }}>Un curso práctico, integral y auditable. La inversión refleja el valor de tomar el control de tu IA clínica desde hoy.</p>
        </div>

        {/* Price Cards Grid */}
        <div className="ps-grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '2rem 0' }}>

          {/* Card 1: Pago único */}
          <div style={{ background: '#fff', border: `0.5px solid ${BORDER}`, borderRadius: 12, padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: HINT, marginBottom: '1rem' }}>Pago único</div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: '0.5rem' }}>Precio regular</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 32, fontWeight: 600, color: TEXT, lineHeight: 1 }}>$980.000</div>
              <div style={{ fontSize: 13, color: MUTED, marginTop: '0.5rem' }}>Pesos colombianos</div>
            </div>

            <div style={{ background: TEAL_LIGHT, border: `1.5px solid ${TEAL}`, borderRadius: 12, padding: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: TEAL_DARK, marginBottom: '0.25rem' }}>🎉 Descuento por Simposio</div>
              <div style={{ fontSize: 12, color: TEAL_DARK, lineHeight: 1.6 }}>
                10% de descuento aplicado ahora por ser asistente al IV Simposio de Imágenes Diagnósticas.
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: '0.5rem' }}>Tu precio con descuento</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 28, fontWeight: 600, color: TEAL, lineHeight: 1 }}>$882.000</div>
            </div>

            <button onClick={onOpenModal} style={btnStyle}>Pagar ahora</button>

            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: `0.5px solid ${BORDER}` }}>
              {checks.map((c) => (
                <div key={c} style={{ fontSize: 12, color: HINT, marginTop: c === checks[0] ? 0 : '0.5rem' }}>{c}</div>
              ))}
            </div>
          </div>

          {/* Card 2: 2 cuotas (destacada) */}
          <div style={{ background: '#fff', border: `1.5px solid ${TEAL}`, borderRadius: 12, padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, background: TEAL, color: '#fff', padding: '0.4rem 1rem', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Recomendado</div>

            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: TEAL_DARK, marginBottom: '1rem', marginTop: '0.25rem' }}>2 cuotas sin interés</div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: 13, color: TEAL_DARK, marginBottom: '0.5rem' }}>Por cuota</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 32, fontWeight: 600, color: TEAL, lineHeight: 1 }}>$441.000</div>
              <div style={{ fontSize: 13, color: TEAL_DARK, marginTop: '0.5rem' }}>Pesos colombianos</div>
            </div>

            <div style={{ background: AMBER_LIGHT, border: `1.5px solid ${AMBER}`, borderRadius: 12, padding: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: AMBER_DARK, marginBottom: '0.25rem' }}>📅 Cronograma</div>
              <div style={{ fontSize: 12, color: AMBER_DARK, lineHeight: 1.6 }}>
                Cuota 1: Al inscribirte. Cuota 2: 30 días después.
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: 13, color: TEAL_DARK, marginBottom: '0.5rem', fontWeight: 600 }}>Total con descuento: $882.000</div>
            </div>

            <button onClick={onOpenModal} style={btnStyle}>Pagar en 2 cuotas</button>

            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: `1.5px solid ${TEAL_LIGHT}` }}>
              {[...checks, '✓ Sin interés'].map((c, i) => (
                <div key={c} style={{ fontSize: 12, color: TEAL_DARK, marginTop: i === 0 ? 0 : '0.5rem', fontWeight: 500 }}>{c}</div>
              ))}
            </div>
          </div>

        </div>

        {/* Key Info Box */}
        <div style={{ background: 'linear-gradient(135deg, #f5fdf9 0%, #E1F5EE 100%)', border: '0.5px solid rgba(29, 158, 117, 0.3)', borderRadius: 12, padding: '1.5rem', margin: '2rem 0' }}>
          <div className="ps-grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {infoItems.map((item) => (
              <div key={item.label}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: TEAL_DARK, marginBottom: '0.5rem' }}>{item.label}</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: TEAL }}>{item.value}</div>
                <div style={{ fontSize: 12, color: MUTED, marginTop: '0.25rem' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, color: TEXT, marginBottom: '1rem' }}>Preguntas frecuentes</h3>
          <div className="ps-grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {faqs.map((f) => (
              <div key={f.q} style={{ background: '#f8f8f6', borderRadius: 12, padding: '1.5rem' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: TEXT, marginBottom: '0.75rem' }}>{f.q}</div>
                <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.7 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bottom */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem', padding: '2rem', background: TEAL_LIGHT, borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, color: TEAL_DARK, marginBottom: '0.75rem' }}>¿Listo para comenzar?</h3>
          <p style={{ fontSize: 14, color: TEAL, marginBottom: '1.5rem' }}>Los cupos del Simposio tienen este 10% de descuento. Expira cuando comience el curso el 1 de octubre.</p>
          <button onClick={onOpenModal} style={{ ...btnStyle, width: 'auto', padding: '0.875rem 2rem', fontSize: 15 }}>Inscribirse ahora</button>
        </div>

      </div>

      <style>{`
        @media (max-width: 700px) {
          #pricing .ps-wrap { padding: 0 1.5rem 3rem !important; }
          #pricing .ps-grid2 { grid-template-columns: 1fr !important; }
          #pricing .ps-grid3 { grid-template-columns: 1fr !important; }
          #pricing .ps-title { font-size: 22px !important; }
        }
      `}</style>
    </section>
  );
}
