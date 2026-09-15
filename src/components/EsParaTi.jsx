// i18n 2026-09-15: bilingüe vía useLang(); Icon queda en un array independiente del
// idioma (items) y el texto se toma de STR[lang].items por índice.
import { User, CheckCircle, Star } from 'lucide-react';
import { BRAND } from '../theme';
import { useLang } from '../i18n';

// Campo independiente del idioma (icono) — el texto vive en STR.
const items = [
  { Icon: User },
  { Icon: CheckCircle },
  { Icon: Star },
];

const STR = {
  es: {
    eyebrow: '¿Es para ti?',
    h2: '¿Es para ti?',
    items: [
      {
        title: 'Para quién',
        body: 'Médicos y especialistas que trabajan en consultorio o en hospitales y quieren usar IA con criterio clínico.',
      },
      {
        title: 'Requisitos',
        body: 'WhatsApp y otras plataformas gratuitas y fáciles de instalar. Nada más.',
      },
      {
        title: 'Nivel',
        body: 'Desde cero. No necesitas saber nada de IA: los fundamentos bonus te ponen al día.',
      },
    ],
  },
  en: {
    eyebrow: 'Is it for you?',
    h2: 'Is it for you?',
    items: [
      {
        title: 'Who it is for',
        body: 'Physicians and specialists who work in private practice or hospitals and want to use AI with clinical judgment.',
      },
      {
        title: 'Requirements',
        body: 'WhatsApp and other free, easy-to-install platforms. Nothing else.',
      },
      {
        title: 'Level',
        body: 'From zero. You do not need to know anything about AI: the bonus fundamentals get you up to speed.',
      },
    ],
  },
};

export default function EsParaTi() {
  const lang = useLang();
  const t = STR[lang] || STR.es;

  return (
    <section id="es-para-ti" style={{ background: 'var(--canvas)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>{t.eyebrow}</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0 }}>
            {t.h2}
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="esparati-grid">
          {items.map(({ Icon }, i) => {
            const { title, body } = t.items[i];
            return (
              <div key={title} className="card card--raised" style={{ padding: '28px' }}>
                <div className="card-icon" style={{ marginBottom: 16 }}>
                  <Icon size={20} color={BRAND} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--body)', margin: 0 }}>{body}</p>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .esparati-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
