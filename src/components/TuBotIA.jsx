// Sección propia del kit de bots (2026-09-14): ruta /bots, entrada "Tu Bot de IA" en el rail.
// Modelo mental tipo Poe/Grok (lista de bots + costo por uso + balance recargable) contado
// en lenguaje clínico, sin jerga. Todo es visual/estático: los costos y balances de las cards
// son ilustrativos (así lo dice el caption) hasta que exista el sistema real de créditos.

import { AudioLines, SlidersHorizontal, ScanSearch, Coins, Wallet, RefreshCw } from 'lucide-react';
import { BRAND } from '../theme';

const bots = [
  {
    Icon: AudioLines,
    name: 'Bot de reportes',
    tag: 'Transcripción y redacción',
    body: 'Le hablas o le pegas el hallazgo y te arma el reporte estructurado, listo para revisar y firmar.',
    costo: '~10 créditos / mensaje',
    balance: 0.85,
  },
  {
    Icon: SlidersHorizontal,
    name: 'Bot personalizado',
    tag: 'Configurable por API',
    body: 'El que Miguel arma contigo en el taller, ajustado a tu especialidad y a tu flujo de trabajo.',
    costo: '~15 créditos / mensaje',
    balance: 0.85,
  },
  {
    Icon: ScanSearch,
    name: 'Bot de imágenes',
    tag: 'Integración MCloud/MHub',
    body: 'Subes un estudio DICOM y lo procesa contra modelos de IA especializados — por ejemplo, detección de hallazgos en CT — devolviendo resultados estructurados. La misma tecnología de la demo del simposio, ahora como herramienta tuya.',
    costo: '~100 créditos / estudio',
    balance: 0.85,
  },
];

const creditos = [
  {
    Icon: Coins,
    title: 'Como un plan prepago',
    body: 'Cada bot consume una cantidad de créditos por uso — como el saldo de un prepago, no una suscripción obligatoria.',
  },
  {
    Icon: Wallet,
    title: 'Sales con la bolsa cargada',
    body: 'Terminas el curso con créditos ya incluidos, suficientes para ~2 meses de uso normal en tu consulta.',
  },
  {
    Icon: RefreshCw,
    title: 'Recargas solo si quieres',
    body: 'Si se acaban, son recargables. Tú decides si sigues; no hay obligación ni bloqueo automático del acceso a tu propio bot.',
  },
];

function BalanceBar({ value }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span className="mono-label" style={{ fontSize: 10 }}>Balance de créditos</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--body)' }}>{Math.round(value * 100)}%</span>
      </div>
      <div style={{ height: 6, borderRadius: 'var(--r-pill)', background: 'var(--canvas-soft)', border: '1px solid var(--hairline)', overflow: 'hidden' }}>
        <div style={{ width: `${value * 100}%`, height: '100%', background: BRAND, borderRadius: 'var(--r-pill)' }} />
      </div>
    </div>
  );
}

export default function TuBotIA() {
  return (
    <section id="tu-bot" style={{ background: 'var(--canvas)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Tu kit de bots</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 16px' }}>
            Tu Bot de IA
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--body)', maxWidth: 680, margin: '0 auto' }}>
            Durante el taller construyes, paso a paso, tu propio kit de bots de IA para tu práctica
            médica — no uno, sino varios, cada uno para una tarea distinta.
          </p>
        </div>

        {/* Bot cards */}
        <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Lo que construyes con tus manos</span>
        <div className="bots-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 12 }}>
          {bots.map(({ Icon, name, tag, body, costo, balance }) => (
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
              <BalanceBar value={balance} />
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: 'var(--muted)', margin: '0 0 48px' }}>
          Costos y balances ilustrativos: los valores finales de cada bot se definen contigo en el taller.
        </p>

        {/* Sistema de créditos */}
        <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Cómo funcionan los créditos</span>
        <div className="bots-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 48 }}>
          {creditos.map(({ Icon, title, body }) => (
            <div key={title} className="card card--static" style={{ padding: '28px' }}>
              <div className="card-icon" style={{ marginBottom: 16 }}>
                <Icon size={20} color={BRAND} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--body)', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>

        {/* Diferenciador */}
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', lineHeight: 1.6, color: 'var(--ink)', maxWidth: 600, margin: '0 auto' }}>
          Estos bots son tuyos — no son una demo del curso: <span style={{ color: BRAND }}>los sigues usando después, en tu consulta, con tus propios casos.</span>
        </p>

      </div>
      <style>{`@media (max-width: 900px) { #tu-bot .bots-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
