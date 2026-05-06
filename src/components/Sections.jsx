import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: '¿Qué es Angaritarad-AI?', a: 'Angaritarad-AI es tu agente de IA médica personal. Vive en un grupo privado de WhatsApp y te ayuda a dictar historias clínicas, hacer triaje, agendar pacientes y evaluar riesgo clínico. Lo usas desde el primer día del curso y lo conservas al terminar.' },
  { q: '¿Necesito saber programar o manejar servidores?', a: 'Para nada. Nosotros gestionamos toda la infraestructura. Tú solo necesitas WhatsApp y ganas de aprender. Sin instalaciones, sin comandos, sin complicaciones técnicas.' },
  { q: '¿Cómo accedo a mi agente?', a: 'Al inscribirte recibes una invitación a tu grupo privado de WhatsApp. Ese es tu canal directo con tu agente Angaritarad-AI, disponible 24/7 desde cualquier dispositivo.' },
  { q: '¿Es seguro para los datos de mis pacientes?', a: 'Sí, con una regla fundamental que enseñamos desde el Módulo 0: nunca ingreses datos identificables de pacientes. Los casos deben ser siempre anonimizados. La plataforma tiene cifrado, backups diarios y políticas de retención claras.' },
  { q: '¿El agente reemplaza mi criterio clínico?', a: 'No, y este punto es fundamental. Angaritarad-AI es tu copiloto de productividad y apoyo educativo. Cada respuesta clínica incluye automáticamente un recordatorio de que requiere tu validación profesional.' },
  { q: '¿Qué pasa cuando termino el curso?', a: 'Conservas acceso a tu agente con los skills de todos los módulos del curso (acceso de por vida). Los skills avanzados de Radiología del Módulo Bonus tienen un plan de continuidad separado.' },
  { q: '¿Funciona con mi especialidad?', a: 'Sí. El agente tiene skills generales para todos los médicos (dictado, triaje, agendamiento) y un módulo bonus específico para radiología. En la comunidad, médicos de distintas especialidades van construyendo y compartiendo nuevos skills.' },
];

export function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ background: '#fafafa', padding: '96px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>FAQ</span>
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em', color: '#17171c', margin: '0 0 40px' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ borderTop: '1px solid #e5e7eb' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 15, color: '#17171c' }}>{faq.q}</span>
                <span style={{ color: '#93939f', flexShrink: 0 }}>{open === i ? <Minus size={16} /> : <Plus size={16} />}</span>
              </button>
              {open === i && (
                <div style={{ paddingBottom: 20 }}>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: '#616161', margin: 0 }}>{faq.a}</p>
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
    <section style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>¿Para quién es?</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: '#17171c', margin: '0 0 16px' }}>
            Diseñado para <span style={{ color: '#ef4444' }}>Profesionales de la Salud</span>
          </h2>
          <p style={{ fontSize: 17, color: '#616161', maxWidth: 440, margin: '0 auto', lineHeight: 1.6 }}>
            Una red de agentes médicos interconectada y descentralizada.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="audience-grid">
          {audience.map((item, i) => (
            <div key={i} style={{ background: '#fafafa', border: '1px solid #f2f2f2', borderRadius: 12, padding: '24px 28px', transition: 'border-color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#ef4444'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#f2f2f2'}>
              <span style={{ fontSize: 24, display: 'block', marginBottom: 12 }}>{item.icon}</span>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 16, color: '#17171c', margin: '0 0 8px' }}>{item.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: '#616161', margin: 0 }}>{item.body}</p>
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
    <section style={{ background: '#17171c', padding: '96px 24px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <span className="mono-label" style={{ color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 24 }}>Comienza hoy mismo</span>
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
          Tu agente te espera.
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', marginBottom: 40 }}>
          Al activarlo, tienes un asistente médico entrenado con tu conocimiento — activo 24/7, accesible por WhatsApp, supervisado por ti.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 480, margin: '0 auto 40px', textAlign: 'left' }} className="checkmarks-grid">
          {['Agente configurado para tu especialidad', 'WhatsApp conectado desde el Módulo 0', 'Panel de supervisión en tiempo real', 'Sin código, sin servidores, sin complicaciones'].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ color: '#22c55e', fontSize: 14, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>{item}</span>
            </div>
          ))}
        </div>
        <button onClick={onOpenModal} style={{ background: '#ef4444', color: '#fff', padding: '16px 36px', borderRadius: 32, border: 'none', cursor: 'pointer', fontSize: 16, fontFamily: 'Space Grotesk', fontWeight: 500, letterSpacing: '-0.01em', boxShadow: '0 4px 20px rgba(239,68,68,0.3)', transition: 'background 0.2s' }}
          onMouseEnter={e => e.target.style.background = '#b91c1c'}
          onMouseLeave={e => e.target.style.background = '#ef4444'}>
          Inscribirme al Programa
        </button>
      </div>
      <style>{`@media (max-width: 480px) { .checkmarks-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

export function Footer({ onOpenPrivacy }) {
  return (
    <footer style={{ background: '#17171c', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, marginBottom: 32, alignItems: 'start' }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 12 }}>A</span>
              </div>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 14, color: '#fff', letterSpacing: '-0.01em' }}>AngaritaRad-AI</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', maxWidth: 320, lineHeight: 1.6, margin: 0 }}>
              Agentes de IA médica para profesionales de la salud latinoamericanos. OpenRad.ai
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
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>© 2026 AngaritaRad. Bogotá, Colombia.</span>
          <button onClick={onOpenPrivacy} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'underline' }}>
            Privacidad & Términos
          </button>
        </div>
      </div>
      <style>{`@media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </footer>
  );
}
