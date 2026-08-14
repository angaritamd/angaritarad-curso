export default function PrecioInteres({ onOpenModal }) {
  return (
    <section id="precio" style={{ background: '#eeece7', padding: '96px 24px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Inversión</span>
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: '#17171c', margin: '0 0 16px' }}>
          Un solo precio, todo incluido.
        </h2>
        <p style={{ fontSize: 17, color: '#616161', lineHeight: 1.6, margin: '0 0 36px' }}>
          Sin planes complicados. Un pago, acceso completo al curso, los talleres,
          tu agente y la comunidad.
        </p>
        <button onClick={onOpenModal} className="btn-brand" style={{ fontSize: 16, padding: '16px 36px' }}>
          Me interesa el curso
        </button>
        <p style={{ fontSize: 13, color: '#93939f', marginTop: 16 }}>
          Te escribimos con los detalles y el valor.
        </p>
      </div>
    </section>
  );
}
