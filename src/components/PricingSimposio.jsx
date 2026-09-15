// Sección de precios lanzada el día del IV Simposio (2026-09-11).
// Reprecio 2026-09-13: $450.000 único / 2×$238.000 — reemplaza los $882.000 con 10% de Simposio, que ya no aplica.
// Rediseño 2026-09-13: se abandona la "isla clara" teal del welcome pack por el sistema dark
// del sitio (canvas/naranja/Inter+JetBrains Mono). id="precio" es el ancla del sidebar.
// i18n 2026-09-16: bilingüe vía useLang(); en EN los precios se muestran en USD con la TRM
// fija de referencia (src/i18n.js) — el pago real sigue siendo en COP vía Wompi, de ahí la nota.
// Botones de pago: placeholder visual sin acción (title="Coming soon") hasta tener pasarela (Wompi/PSE).

import { Check, Calendar, ShieldCheck } from 'lucide-react';
import { BRAND } from '../theme';
import { useLang, fmtUSD } from '../i18n';

// Precios en COP — única fuente; el USD se deriva con la TRM fija.
const P = { unico: 450000, unicoAntes: 882000, cuota: 238000, cuotaAntes: 441000, total: 476000, ahorro: 26000 };

const STR = {
  es: {
    eyebrow: 'Inversión',
    h2: 'Inversión en tu desarrollo',
    sub: 'Un curso práctico, integral y auditable. La inversión refleja el valor de tomar el control de tu IA clínica desde hoy.',
    urgencia: 'Inicia el 1 de octubre · Cupos limitados',
    incluyeLabel: 'Tu inscripción incluye',
    incluye: [
      '8 módulos de contenido, de cero a resultados',
      'Tu propio asistente de IA con ~2 meses de créditos incluidos',
      'Práctica en WhatsApp con tu agente personal',
      'Comunidad privada + soporte durante el curso',
      'Certificación auditable (DOI + GitHub), no un PDF',
    ],
    unicoLabel: 'Pago único',
    badge: 'Más elegido',
    unicoPrecio: '$450.000', unicoMoneda: 'COP',
    unicoNota: <><s>Antes $882.000</s> · Ahorras $26.000 frente al plan en cuotas</>,
    pagarAhora: 'Pagar ahora',
    cuotasLabel: '2 cuotas sin interés',
    cuotaPrecio: '$238.000', cuotaMoneda: 'COP / cuota',
    cuotaNota: <><s>Antes $441.000 c/u</s> · Total $476.000 · Cuota 1 al inscribirte, cuota 2 a los 30 días</>,
    pagarCuotas: 'Pagar en 2 cuotas',
    trmNota: null,
    checks: ['Acceso inmediato', 'Todos los módulos', 'Comunidad + soporte'],
    sinInteres: 'Sin interés',
    garantia: 'Garantía de 7 días: si cambias de parecer, devolvemos tu inversión sin preguntas.',
    info: [
      { label: 'Inicio del curso', value: '1 de octubre', desc: 'Acceso inmediato a todos los módulos.' },
      { label: 'Duración', value: '8 semanas', desc: 'Autorrítmo. Cada módulo toma ~2 horas.' },
      { label: 'Certificación', value: 'DOI + GitHub', desc: 'No PDF. Credencial auditable profesional.' },
    ],
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      { q: '¿Qué incluye exactamente?', a: 'Acceso a 8 módulos de contenido, práctica en WhatsApp con tu agente personal, comunidad privada, templates y herramientas de automatización. Todo lo que necesitas para activar tu IA clínica.' },
      { q: '¿Hay reembolso?', a: 'Garantía de 7 días. Si después de revisar los primeros módulos cambias de parecer, devolvemos tu inversión sin preguntas.' },
      { q: '¿Necesito conocimientos técnicos previos?', a: 'No. El curso parte de cero. Si eres médico y usas WhatsApp, estás listo. Las herramientas (n8n, RAG, etc.) se enseñan paso a paso sin código.' },
      { q: '¿Qué métodos de pago aceptan?', a: 'Transferencia bancaria, tarjeta crédito/débito (Wompi), PSE. Los botones de pago arriba te guían por cada opción.' },
    ],
    ctaTitle: '¿Listo para comenzar?',
    ctaSub: 'El curso comienza el 1 de octubre. Asegura tu cupo antes del inicio.',
    ctaBtn: 'Inscribirse ahora',
  },
  en: {
    eyebrow: 'Pricing',
    h2: 'An investment in your practice',
    sub: 'A practical, comprehensive, auditable course. The price reflects the value of taking control of your clinical AI starting today.',
    urgencia: 'Starts October 1st · Limited seats',
    incluyeLabel: 'Your enrollment includes',
    incluye: [
      '8 content modules, from zero to results',
      'Your own AI assistant with ~2 months of credits included',
      'Hands-on practice in WhatsApp with your personal agent',
      'Private community + support throughout the course',
      'Auditable certification (DOI + GitHub), not a PDF',
    ],
    unicoLabel: 'One-time payment',
    badge: 'Most popular',
    unicoPrecio: fmtUSD(P.unico).replace(' USD', ''), unicoMoneda: 'USD',
    unicoNota: <><s>Was {fmtUSD(P.unicoAntes)}</s> · Save {fmtUSD(P.ahorro)} vs. the installment plan</>,
    pagarAhora: 'Pay now',
    cuotasLabel: '2 interest-free installments',
    cuotaPrecio: fmtUSD(P.cuota).replace(' USD', ''), cuotaMoneda: 'USD / installment',
    cuotaNota: <><s>Was {fmtUSD(P.cuotaAntes)} each</s> · Total {fmtUSD(P.total)} · 1st at enrollment, 2nd after 30 days</>,
    pagarCuotas: 'Pay in 2 installments',
    trmNota: 'Reference rate: 1 USD ≈ 3,300 COP. Payments are processed in Colombian pesos (Wompi).',
    checks: ['Immediate access', 'All modules', 'Community + support'],
    sinInteres: 'Interest-free',
    garantia: '7-day guarantee: if you change your mind, we refund your money, no questions asked.',
    info: [
      { label: 'Course start', value: 'October 1st', desc: 'Immediate access to all modules.' },
      { label: 'Duration', value: '8 weeks', desc: 'Self-paced. Each module takes ~2 hours.' },
      { label: 'Certification', value: 'DOI + GitHub', desc: 'Not a PDF. A professional, auditable credential.' },
    ],
    faqTitle: 'Frequently asked questions',
    faqs: [
      { q: 'What exactly is included?', a: 'Access to 8 content modules, WhatsApp practice with your personal agent, a private community, templates, and automation tools. Everything you need to activate your clinical AI.' },
      { q: 'Is there a refund?', a: '7-day guarantee. If you change your mind after reviewing the first modules, we refund your money, no questions asked.' },
      { q: 'Do I need prior technical knowledge?', a: 'No. The course starts from zero. If you are a physician and use WhatsApp, you are ready. The tools (n8n, RAG, etc.) are taught step by step, no code required.' },
      { q: 'Which payment methods do you accept?', a: 'Bank transfer, credit/debit card (Wompi), PSE. The payment buttons above guide you through each option.' },
    ],
    ctaTitle: 'Ready to start?',
    ctaSub: 'The course starts October 1st. Secure your seat before it begins.',
    ctaBtn: 'Enroll now',
  },
};

const h3Style = { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)', margin: 0, letterSpacing: '-0.01em' };
const monoPrice = { fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1 };

function CheckRow({ children, strong }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
      <Check size={15} color={BRAND} style={{ flexShrink: 0, marginTop: 3 }} />
      <span style={{ fontSize: 13, lineHeight: 1.5, color: strong ? 'var(--ink)' : 'var(--body)' }}>{children}</span>
    </div>
  );
}

export default function PricingSimposio() {
  const lang = useLang();
  const t = STR[lang] || STR.es;

  const trmNota = t.trmNota && (
    <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: -14, marginBottom: 24, lineHeight: 1.5 }}>{t.trmNota}</div>
  );

  return (
    <section id="precio" style={{ background: 'var(--canvas)', padding: '96px 24px', scrollMarginTop: 'calc(var(--nav-h) + 16px)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>{t.eyebrow}</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 16px' }}>
            {t.h2}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--body)', maxWidth: 620, margin: '0 auto 20px' }}>
            {t.sub}
          </p>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 'var(--r-pill)', background: 'rgba(245,78,0,0.10)', border: '1px solid rgba(245,78,0,0.25)' }}>
            <Calendar size={14} color={BRAND} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink)' }}>
              {t.urgencia}
            </span>
          </span>
        </div>

        {/* Value stack: qué te llevas, antes del precio */}
        <div className="card card--static" style={{ padding: '28px 32px', marginBottom: 24 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>{t.incluyeLabel}</span>
          <div className="precio-incluye" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 32px' }}>
            {t.incluye.map((item) => <CheckRow key={item} strong>{item}</CheckRow>)}
          </div>
        </div>

        {/* Tarjetas de precio */}
        <div className="precio-grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>

          {/* Card 1: Pago único (destacada) */}
          <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', border: '1px solid rgba(245,78,0,0.45)', boxShadow: '0 1px 2px rgba(0,0,0,0.35), 0 0 0 1px rgba(245,78,0,0.12), inset 0 1px 0 rgba(255,255,255,0.045)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <span className="mono-label" style={{ color: 'var(--ink)' }}>{t.unicoLabel}</span>
              <span style={{ background: 'var(--primary)', color: 'var(--on-primary)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '5px 12px', borderRadius: 'var(--r-pill)' }}>
                {t.badge}
              </span>
            </div>

            <div style={{ marginBottom: 8 }}>
              <span style={{ ...monoPrice, fontSize: 40 }}>{t.unicoPrecio}</span>
              <span style={{ fontSize: 14, color: 'var(--muted)', marginLeft: 8 }}>{t.unicoMoneda}</span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
              {t.unicoNota}
            </div>
            {trmNota}

            <button title="Coming soon" className="btn-brand" style={{ width: '100%', fontSize: 15, padding: '13px 22px' }}>{t.pagarAhora}</button>

            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--hairline)', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {t.checks.map((c) => <CheckRow key={c}>{c}</CheckRow>)}
            </div>
          </div>

          {/* Card 2: 2 cuotas */}
          <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, minHeight: 26 }}>
              <span className="mono-label">{t.cuotasLabel}</span>
            </div>

            <div style={{ marginBottom: 8 }}>
              <span style={{ ...monoPrice, fontSize: 40 }}>{t.cuotaPrecio}</span>
              <span style={{ fontSize: 14, color: 'var(--muted)', marginLeft: 8 }}>{t.cuotaMoneda}</span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
              {t.cuotaNota}
            </div>
            {trmNota}

            <button title="Coming soon" className="btn-outline" style={{ width: '100%', fontSize: 15, padding: '13px 22px' }}>{t.pagarCuotas}</button>

            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--hairline)', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[...t.checks, t.sinInteres].map((c) => <CheckRow key={c}>{c}</CheckRow>)}
            </div>
          </div>

        </div>

        {/* Garantía */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 48 }}>
          <ShieldCheck size={15} color="var(--muted)" />
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>{t.garantia}</span>
        </div>

        {/* Datos clave */}
        <div className="card card--static precio-grid3" style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 48 }}>
          {t.info.map((item) => (
            <div key={item.label}>
              <span className="mono-label" style={{ display: 'block', marginBottom: 8 }}>{item.label}</span>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 600, color: BRAND }}>{item.value}</div>
              <div style={{ fontSize: 13, color: 'var(--body)', marginTop: 4, lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* TODO testimonial: bloque listo pero sin datos reales — activar cuando haya
            una cita verificada de un alumno (nombre + especialidad + permiso de uso).
        <figure className="card card--static" style={{ padding: '28px 32px', marginBottom: 48 }}>
          <blockquote style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: 'var(--ink)' }}>“…”</blockquote>
          <figcaption style={{ marginTop: 12, fontSize: 13, color: 'var(--muted)' }}>— Nombre, especialidad</figcaption>
        </figure>
        */}

        {/* FAQ */}
        <div style={{ marginBottom: 48 }}>
          <h3 style={{ ...h3Style, fontSize: 18, marginBottom: 20 }}>{t.faqTitle}</h3>
          <div className="precio-grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {t.faqs.map((f) => (
              <div key={f.q} style={{ background: 'var(--canvas-soft)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', padding: '24px' }}>
                <div style={{ ...h3Style, fontSize: 14, marginBottom: 10 }}>{f.q}</div>
                <div style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.7 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA de cierre */}
        <div className="card card--static" style={{ textAlign: 'center', padding: '40px 32px' }}>
          <h3 style={{ ...h3Style, fontSize: 20, marginBottom: 10 }}>{t.ctaTitle}</h3>
          <p style={{ fontSize: 14, color: 'var(--body)', margin: '0 0 24px' }}>{t.ctaSub}</p>
          <button title="Coming soon" className="btn-brand" style={{ padding: '13px 32px', fontSize: 15 }}>{t.ctaBtn}</button>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #precio .precio-grid2 { grid-template-columns: 1fr !important; }
          #precio .precio-grid3 { grid-template-columns: 1fr !important; gap: 24px !important; }
          #precio .precio-incluye { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
