import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { BRAND, BRAND_ACTIVE, INK } from '../theme';

const faqs = [
  { q: '¿Necesito saber de IA?', a: 'No. Empiezas desde cero; los fundamentos bonus te ponen al día.' },
  { q: '¿Tengo que programar?', a: 'Nunca. Los talleres y el agente hacen el trabajo técnico; tú aportas el criterio clínico.' },
  { q: '¿Cuánto tiempo dedico?', a: '2 a 3 horas por semana. Los módulos son cortos y prácticos.' },
  { q: '¿Qué me llevo al terminar?', a: 'Un asistente clínico activo, un portfolio real y acceso a la comunidad.' },
];

export function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ background: 'var(--canvas-mid)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>FAQ</span>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 40px' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map((faq, i) => (
            <div key={i} className="card card--raised">
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', textAlign: 'left', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 15, color: 'var(--ink)' }}>{faq.q}</span>
                <span style={{ color: 'var(--muted)', flexShrink: 0 }}>{open === i ? <Minus size={16} /> : <Plus size={16} />}</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 20px' }}>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--body)', margin: 0 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const audience = [
  { icon: '🩺', title: 'Médicos Generales', body: 'Centraliza tu práctica en un solo agente. Elimina las suscripciones separadas de dictado, agenda y consulta — todo en tu WhatsApp.' },
  { icon: '⚕️', title: 'Especialistas', body: 'Carga los protocolos de tu especialidad. El agente responde con tu criterio clínico, no con guías genéricas de internet.' },
  { icon: '🏥', title: 'Clínicas y Centros', body: 'Despliega el agente para todo tu equipo con acceso controlado. Supervisa cada conversación desde el panel de administración.' },
  { icon: '🔬', title: 'Radiología', body: 'Protocolos de indicación, criterios de reporte y diagnóstico diferencial — disponibles en tiempo real por WhatsApp.' },
];

export function TargetAudience() {
  return (
    <section style={{ background: 'var(--canvas)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>¿Para quién es?</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 16px' }}>
            Diseñado para <span style={{ color: 'var(--primary)' }}>Profesionales de la Salud</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--body)', maxWidth: 440, margin: '0 auto', lineHeight: 1.6 }}>
            Una red de agentes médicos interconectada y descentralizada.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="audience-grid">
          {audience.map((item, i) => (
            <div key={i} className="card card--raised" style={{ padding: '24px 28px' }}>
              <span style={{ fontSize: 24, display: 'block', marginBottom: 12 }}>{item.icon}</span>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)', margin: '0 0 8px' }}>{item.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--body)', margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .audience-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

export function FinalCTA({ onOpenModal }) {
  return (
    <section style={{ background: 'var(--canvas)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <span className="mono-label" style={{ color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 24 }}>Comienza hoy mismo</span>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', color: 'var(--ink)', margin: '0 0 20px', lineHeight: 1.05 }}>
          Empieza a usar IA en tu consulta.
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', marginBottom: 40 }}>
          Un curso práctico para médicos y especialistas.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 480, margin: '0 auto 40px', textAlign: 'left' }} className="checkmarks-grid">
          {['Desde cero', 'Sin código', 'Talleres prácticos', 'Comunidad de médicos'].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--aurora-mint)', fontSize: 14, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>{item}</span>
            </div>
          ))}
        </div>
        <button onClick={onOpenModal} style={{ background: 'var(--primary)', color: 'var(--ink)', padding: '16px 36px', borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: 16, fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '-0.01em', boxShadow: '0 4px 20px rgba(245,78,0,0.3)', transition: 'background 0.2s' }}
          onMouseEnter={e => e.target.style.background = BRAND_ACTIVE}
          onMouseLeave={e => e.target.style.background = BRAND}>
          Quiero el curso
        </button>
      </div>
      <style>{`@media (max-width: 480px) { .checkmarks-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

export function Footer({ onOpenPrivacy }) {
  return (
    <footer style={{ background: 'var(--canvas-card)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, marginBottom: 32, alignItems: 'start' }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12 }}>A</span>
              </div>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, color: 'var(--ink)', letterSpacing: '-0.01em' }}>AngaritaRad-AI</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', maxWidth: 320, lineHeight: 1.6, margin: 0 }}>
              IA aplicada a la práctica médica, para médicos latinoamericanos.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { label: '@angaritarad', href: 'https://www.instagram.com/angaritarad' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/angaritarad/' },
              { label: 'YouTube', href: 'https://www.youtube.com/@angaritarad' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = INK}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>© 2026 Saludchat SAAS. Bogotá, Colombia.</span>
          <button onClick={onOpenPrivacy} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'underline' }}>
            Privacidad & Términos
          </button>
        </div>
      </div>
      <style>{`@media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </footer>
  );
}
