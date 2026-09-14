// Sección "asistente de IA incluido" (2026-09-13): va en /precio justo antes de
// PricingSimposio, para dejar claro el valor incluido antes de mostrar el precio.
// Lenguaje deliberadamente no técnico: nada de proveedores ni infraestructura.
import { FileText, MessageCircle, FolderOpen } from 'lucide-react';
import { BRAND } from '../theme';

const usos = [
  {
    Icon: FileText,
    title: 'Redacción clínica',
    body: 'Te apoya en la redacción de reportes e historias clínicas, con tu estilo y tu especialidad.',
  },
  {
    Icon: MessageCircle,
    title: 'Dudas rápidas',
    body: 'Resuelve preguntas clínicas puntuales en el momento, sin salir de la conversación.',
  },
  {
    Icon: FolderOpen,
    title: 'Tus casos, en orden',
    body: 'Organiza la información de tus casos para que la encuentres cuando la necesites.',
  },
];

export default function AsistenteIncluido() {
  return (
    <section id="asistente-incluido" style={{ background: 'var(--canvas-mid)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Incluido en el curso</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 16px' }}>
            Te llevas tu propio asistente de IA
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--body)', maxWidth: 640, margin: '0 auto' }}>
            Durante el curso configuras, con acompañamiento, un asistente de IA personalizado para tu
            práctica médica. Todo desde una app conversacional simple: sin instalar nada, sin programar.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }} className="asistente-grid">
          {usos.map(({ Icon, title, body }) => (
            <div key={title} className="card" style={{ padding: '28px' }}>
              <div className="card-icon" style={{ marginBottom: 16 }}>
                <Icon size={20} color={BRAND} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--body)', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} id="asistente-detalle">
          <div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
              No es una demo
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--body)', margin: 0 }}>
              Tu asistente viene con una bolsa de créditos incluida — aproximadamente 2 meses de uso —
              y sigue funcionando después de terminar el curso.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
              Tú decides si continúa
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--body)', margin: 0 }}>
              Cuando se acaben los créditos incluidos, eliges: sigues usándolo con una mensualidad,
              o lo dejas ahí. Sin obligación de continuar.
            </p>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: 40, fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', lineHeight: 1.6, color: 'var(--ink)', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          No es solo un curso que ves y olvidas: <span style={{ color: BRAND }}>sales con una herramienta que ya está trabajando para ti.</span>
        </p>

      </div>
      <style>{`@media (max-width: 768px) {
        .asistente-grid { grid-template-columns: 1fr !important; }
        #asistente-detalle { grid-template-columns: 1fr !important; }
      }`}</style>
    </section>
  );
}
