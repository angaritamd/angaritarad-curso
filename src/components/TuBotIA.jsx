// Sección propia del kit de bots (2026-09-14): ruta /bots, entrada "Tu Bot de IA" en el rail.
// Modelo mental tipo Poe/Grok (lista de bots + costo por uso + balance recargable) contado
// en lenguaje clínico, sin jerga. Todo es visual/estático: los costos y balances de las cards
// son ilustrativos (así lo dice el caption) hasta que exista el sistema real de créditos.
// i18n 2026-09-15: bilingüe vía useLang(); Icon/balance quedan en arrays independientes del
// idioma (bots/creditos) y los textos se toman de STR[lang].bots / STR[lang].creditos por índice.

import { AudioLines, SlidersHorizontal, ScanSearch, Coins, Wallet, RefreshCw } from 'lucide-react';
import { BRAND } from '../theme';
import { useLang } from '../i18n';

// Campos independientes del idioma (icono, balance ilustrativo) — el texto vive en STR.
const bots = [
  { Icon: AudioLines, balance: 0.85 },
  { Icon: SlidersHorizontal, balance: 0.85 },
  { Icon: ScanSearch, balance: 0.85 },
];

const creditos = [
  { Icon: Coins },
  { Icon: Wallet },
  { Icon: RefreshCw },
];

const STR = {
  es: {
    eyebrow: 'Tu kit de bots',
    h2: 'Tu Bot de IA',
    sub: 'Durante el taller construyes, paso a paso, tu propio kit de bots de IA para tu práctica médica — no uno, sino varios, cada uno para una tarea distinta.',
    botsLabel: 'Lo que construyes con tus manos',
    bots: [
      {
        name: 'Bot de reportes',
        tag: 'Transcripción y redacción',
        body: 'Le hablas o le pegas el hallazgo y te arma el reporte estructurado, listo para revisar y firmar.',
        costo: '~10 créditos / mensaje',
      },
      {
        name: 'Bot personalizado',
        tag: 'Configurable por API',
        body: 'El que Miguel arma contigo en el taller, ajustado a tu especialidad y a tu flujo de trabajo.',
        costo: '~15 créditos / mensaje',
      },
      {
        name: 'Bot de imágenes',
        tag: 'Integración MCloud/MHub',
        body: 'Subes un estudio DICOM y lo procesa contra modelos de IA especializados — por ejemplo, detección de hallazgos en CT — devolviendo resultados estructurados. La misma tecnología de la demo del simposio, ahora como herramienta tuya.',
        costo: '~100 créditos / estudio',
      },
    ],
    balanceLabel: 'Balance de créditos',
    caption: 'Costos y balances ilustrativos: los valores finales de cada bot se definen contigo en el taller.',
    creditosLabel: 'Cómo funcionan los créditos',
    creditos: [
      {
        title: 'Como un plan prepago',
        body: 'Cada bot consume una cantidad de créditos por uso — como el saldo de un prepago, no una suscripción obligatoria.',
      },
      {
        title: 'Sales con la bolsa cargada',
        body: 'Terminas el curso con créditos ya incluidos, suficientes para ~2 meses de uso normal en tu consulta.',
      },
      {
        title: 'Recargas solo si quieres',
        body: 'Si se acaban, son recargables. Tú decides si sigues; no hay obligación ni bloqueo automático del acceso a tu propio bot.',
      },
    ],
    diferenciador: <>Estos bots son tuyos — no son una demo del curso: <span style={{ color: BRAND }}>los sigues usando después, en tu consulta, con tus propios casos.</span></>,
  },
  en: {
    eyebrow: 'Your bot kit',
    h2: 'Your AI Bot',
    sub: 'During the workshop you build, step by step, your own kit of AI bots for your medical practice — not just one, but several, each for a different task.',
    botsLabel: 'What you build with your own hands',
    bots: [
      {
        name: 'Report bot',
        tag: 'Transcription and drafting',
        body: 'You speak or paste the finding and it drafts the structured report, ready to review and sign.',
        costo: '~10 credits / message',
      },
      {
        name: 'Custom bot',
        tag: 'API-configurable',
        body: 'The one Miguel builds with you in the workshop, tailored to your specialty and your workflow.',
        costo: '~15 credits / message',
      },
      {
        name: 'Imaging bot',
        tag: 'MCloud/MHub integration',
        body: 'You upload a DICOM study and it runs it against specialized AI models — for example, CT findings detection — returning structured results. The same technology from the symposium demo, now as your own tool.',
        costo: '~100 credits / study',
      },
    ],
    balanceLabel: 'Credit balance',
    caption: 'Illustrative costs and balances: final values for each bot are defined with you during the workshop.',
    creditosLabel: 'How credits work',
    creditos: [
      {
        title: 'Like a prepaid plan',
        body: 'Each bot consumes a number of credits per use — like a prepaid balance, not a mandatory subscription.',
      },
      {
        title: 'You leave with credits loaded',
        body: 'You finish the course with credits already included, enough for ~2 months of normal use in your practice.',
      },
      {
        title: 'Top up only if you want',
        body: 'If they run out, they are rechargeable. You decide whether to continue; there is no obligation or automatic lockout of access to your own bot.',
      },
    ],
    diferenciador: <>These bots are yours — not a course demo: <span style={{ color: BRAND }}>you keep using them afterward, in your practice, with your own cases.</span></>,
  },
};

function BalanceBar({ value, label }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span className="mono-label" style={{ fontSize: 10 }}>{label}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--body)' }}>{Math.round(value * 100)}%</span>
      </div>
      <div style={{ height: 6, borderRadius: 'var(--r-pill)', background: 'var(--canvas-soft)', border: '1px solid var(--hairline)', overflow: 'hidden' }}>
        <div style={{ width: `${value * 100}%`, height: '100%', background: BRAND, borderRadius: 'var(--r-pill)' }} />
      </div>
    </div>
  );
}

export default function TuBotIA() {
  const lang = useLang();
  const t = STR[lang] || STR.es;

  return (
    <section id="tu-bot" style={{ background: 'var(--canvas)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>{t.eyebrow}</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 16px' }}>
            {t.h2}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--body)', maxWidth: 680, margin: '0 auto' }}>
            {t.sub}
          </p>
        </div>

        {/* Bot cards */}
        <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>{t.botsLabel}</span>
        <div className="bots-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 12 }}>
          {bots.map(({ Icon, balance }, i) => {
            const { name, tag, body, costo } = t.bots[i];
            return (
              <div key={name} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div className="card-icon">
                    <Icon size={20} color={BRAND} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)', margin: 0, letterSpacing: '-0.01em' }}>{name}</h3>
                    <span className="mono-label" style={{ fontSize: 10 }}>{tag}</span>
                  </div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--body)', margin: 0, flexGrow: 1 }}>{body}</p>
                <span style={{ alignSelf: 'flex-start', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink)', background: 'rgba(245,78,0,0.10)', border: '1px solid rgba(245,78,0,0.25)', borderRadius: 'var(--r-pill)', padding: '4px 12px' }}>
                  {costo}
                </span>
                <BalanceBar value={balance} label={t.balanceLabel} />
              </div>
            );
          })}
        </div>
        <p style={{ fontSize: 12, color: 'var(--muted)', margin: '0 0 48px' }}>
          {t.caption}
        </p>

        {/* Sistema de créditos */}
        <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>{t.creditosLabel}</span>
        <div className="bots-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 48 }}>
          {creditos.map(({ Icon }, i) => {
            const { title, body } = t.creditos[i];
            return (
              <div key={title} className="card card--static" style={{ padding: '28px' }}>
                <div className="card-icon" style={{ marginBottom: 16 }}>
                  <Icon size={20} color={BRAND} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--body)', margin: 0 }}>{body}</p>
              </div>
            );
          })}
        </div>

        {/* Diferenciador */}
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', lineHeight: 1.6, color: 'var(--ink)', maxWidth: 600, margin: '0 auto' }}>
          {t.diferenciador}
        </p>

      </div>
      <style>{`@media (max-width: 900px) { #tu-bot .bots-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
