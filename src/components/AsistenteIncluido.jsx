// Sección "asistente de IA incluido" (2026-09-13): va en /precio justo antes de
// PricingSimposio, para dejar claro el valor incluido antes de mostrar el precio.
// Lenguaje deliberadamente no técnico: nada de proveedores ni infraestructura.
// i18n 2026-09-15: bilingüe vía useLang(); Icon queda en un array independiente del
// idioma (usos) y el texto se toma de STR[lang].usos por índice.
import { FileText, MessageCircle, FolderOpen } from 'lucide-react';
import { BRAND } from '../theme';
import { useLang } from '../i18n';

// Campo independiente del idioma (icono) — el texto vive en STR.
const usos = [
  { Icon: FileText },
  { Icon: MessageCircle },
  { Icon: FolderOpen },
];

const STR = {
  es: {
    eyebrow: 'Incluido en el curso',
    h2: 'Te llevas tu propio asistente de IA',
    sub: 'Durante el curso configuras, con acompañamiento, un asistente de IA personalizado para tu práctica médica. Todo desde una app conversacional simple: sin instalar nada, sin programar.',
    usos: [
      {
        title: 'Redacción clínica',
        body: 'Te apoya en la redacción de reportes e historias clínicas, con tu estilo y tu especialidad.',
      },
      {
        title: 'Dudas rápidas',
        body: 'Resuelve preguntas clínicas puntuales en el momento, sin salir de la conversación.',
      },
      {
        title: 'Tus casos, en orden',
        body: 'Organiza la información de tus casos para que la encuentres cuando la necesites.',
      },
    ],
    detalle1Title: 'No es una demo',
    detalle1Body: 'Tu asistente viene con una bolsa de créditos incluida — aproximadamente 2 meses de uso — y sigue funcionando después de terminar el curso.',
    detalle2Title: 'Tú decides si continúa',
    detalle2Body: 'Cuando se acaben los créditos incluidos, eliges: sigues usándolo con una mensualidad, o lo dejas ahí. Sin obligación de continuar.',
    diferenciador: <>No es solo un curso que ves y olvidas: <span style={{ color: BRAND }}>sales con una herramienta que ya está trabajando para ti.</span></>,
  },
  en: {
    eyebrow: 'Included in the course',
    h2: 'You leave with your own AI assistant',
    sub: 'During the course you configure, with guidance, a personalized AI assistant for your medical practice. All from a simple conversational app: nothing to install, nothing to code.',
    usos: [
      {
        title: 'Clinical drafting',
        body: 'It helps you draft reports and clinical histories, in your own style and specialty.',
      },
      {
        title: 'Quick questions',
        body: 'Resolves specific clinical questions on the spot, without leaving the conversation.',
      },
      {
        title: 'Your cases, organized',
        body: 'Organizes your case information so you can find it when you need it.',
      },
    ],
    detalle1Title: 'It is not a demo',
    detalle1Body: 'Your assistant comes with a bag of credits included — approximately 2 months of use — and keeps working after the course ends.',
    detalle2Title: 'You decide whether it continues',
    detalle2Body: 'When the included credits run out, you choose: keep using it with a monthly fee, or leave it there. No obligation to continue.',
    diferenciador: <>It is not just a course you watch and forget: <span style={{ color: BRAND }}>you leave with a tool that is already working for you.</span></>,
  },
};

export default function AsistenteIncluido() {
  const lang = useLang();
  const t = STR[lang] || STR.es;

  return (
    <section id="asistente-incluido" style={{ background: 'var(--canvas-mid)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>{t.eyebrow}</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 16px' }}>
            {t.h2}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--body)', maxWidth: 640, margin: '0 auto' }}>
            {t.sub}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }} className="asistente-grid">
          {usos.map(({ Icon }, i) => {
            const { title, body } = t.usos[i];
            return (
              <div key={title} className="card" style={{ padding: '28px' }}>
                <div className="card-icon" style={{ marginBottom: 16 }}>
                  <Icon size={20} color={BRAND} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--body)', margin: 0 }}>{body}</p>
              </div>
            );
          })}
        </div>

        <div className="card" style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} id="asistente-detalle">
          <div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
              {t.detalle1Title}
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--body)', margin: 0 }}>
              {t.detalle1Body}
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
              {t.detalle2Title}
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--body)', margin: 0 }}>
              {t.detalle2Body}
            </p>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: 40, fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', lineHeight: 1.6, color: 'var(--ink)', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          {t.diferenciador}
        </p>

      </div>
      <style>{`@media (max-width: 768px) {
        .asistente-grid { grid-template-columns: 1fr !important; }
        #asistente-detalle { grid-template-columns: 1fr !important; }
      }`}</style>
    </section>
  );
}
