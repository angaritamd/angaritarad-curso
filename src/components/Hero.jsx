import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <>
      <section style={{ background: '#fff', paddingTop: 0, paddingBottom: 0, overflow: 'hidden', position: 'relative', minHeight: '90vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="hero-section">

        {/* Left column */}
        <div style={{ padding: '96px 48px 96px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <span className="mono-label">Programa para Médicos</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
            <span className="mono-label" style={{ color: '#ef4444' }}>Inscripción abierta</span>
          </div>

          {/* Main headline */}
          <div style={{ marginBottom: 32 }}>
            <h1 style={{
              fontFamily: 'Space Grotesk', fontWeight: 400,
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              lineHeight: 1, letterSpacing: '-0.03em',
              color: '#17171c', margin: 0,
            }}>
              Tu agente médico.<br />
              <span style={{ color: '#ef4444' }}>Activo desde el día uno.</span>
            </h1>
          </div>

          {/* Subhead */}
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#616161', maxWidth: 560, marginBottom: 40 }}>
            Configura tu propio agente de IA médica en WhatsApp. Ahorra tiempo, centraliza tus herramientas y mejora tu práctica clínica — sin código, sin servidores.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 64, alignItems: 'center' }}>
            <button onClick={onOpenModal} className="btn-brand" style={{ fontSize: 15, padding: '14px 28px' }}>
              Inscribirme al Programa <ArrowRight size={16} />
            </button>
            <a href="#practica" onClick={(e) => { e.preventDefault(); document.querySelector('#practica')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-outline" style={{ fontSize: 15, padding: '14px 28px' }}>
              <PlayCircle size={16} /> Ver el agente en acción
            </a>
          </div>

          {/* Trust strip */}
          <div style={{ paddingTop: 32, borderTop: '1px solid #f2f2f2', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
            <span className="mono-label">Instructor certificado</span>
            <span style={{ color: '#212121', fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 500 }}>Harvard Executive Education</span>
            <span style={{ color: '#d9d9dd' }}>·</span>
            <span style={{ color: '#212121', fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 500 }}>+10K seguidores @angaritarad</span>
            <span style={{ color: '#d9d9dd' }}>·</span>
            <span style={{ color: '#212121', fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 500 }}>OpenRad.ai</span>
          </div>
        </div>

        {/* Right column - editorial image */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 600 }}>
          <img
            src="/gluco.jpg"
            alt="Médico revisando estudios de imagen"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)' }} />
          {/* Floating agent card */}
          <div style={{ position: 'absolute', bottom: 40, left: 32, right: 32 }}>
            <div style={{ background: 'rgba(23,23,28,0.92)', backdropFilter: 'blur(12px)', borderRadius: 16, padding: '20px 24px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93939f' }}>ANGARITARAD-AI · EN VIVO</span>
              </div>
              <div style={{ fontSize: 13, color: '#d1d5db', lineHeight: 1.6 }}>
                <span style={{ color: '#ef4444', fontFamily: 'JetBrains Mono, monospace' }}>S: </span>Dolor opresivo, irradiado, 2h<br/>
                <span style={{ color: '#ef4444', fontFamily: 'JetBrains Mono, monospace' }}>A: </span>SCA probable<br/>
                <span style={{ color: '#ef4444', fontFamily: 'JetBrains Mono, monospace' }}>P: </span>ECG + troponinas urgente
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three dark chat cards - full-width dark band */}
      <div className="hero-cards-grid" style={{ background: '#0f0f13', padding: '48px 64px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>

        {/* Card 1 - SOAP */}
        <div style={{ background: '#17171c', borderRadius: 22, padding: 20, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93939f' }}>ANGARITARAD-AI</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '9px 12px', fontSize: 12, color: '#93939f' }}>
            Mujer 58a, dolor abdominal, fiebre…
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '10px 12px' }}>
            <div style={{ fontSize: 12, color: '#d1d5db', lineHeight: 1.7 }}>
              <span style={{ color: '#ef4444', fontFamily: 'JetBrains Mono, monospace' }}>S: </span>Dolor abdominal agudo, fiebre<br/>
              <span style={{ color: '#ef4444', fontFamily: 'JetBrains Mono, monospace' }}>A: </span>Sospecha apendicitis<br/>
              <span style={{ color: '#ef4444', fontFamily: 'JetBrains Mono, monospace' }}>P: </span>Ecografía + valoración quirúrgica
            </div>
          </div>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#374151' }}>Dictado → SOAP automático</span>
        </div>

        {/* Card 2 - Consulta */}
        <div style={{ background: '#17171c', borderRadius: 22, padding: 20, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93939f' }}>ANGARITARAD-AI</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '9px 12px', fontSize: 12, color: '#93939f' }}>
            Dame un tip de radiología para hoy
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '10px 12px' }}>
            <div style={{ fontSize: 12, color: '#d1d5db', lineHeight: 1.7 }}>
              <span style={{ color: '#ef4444', fontFamily: 'JetBrains Mono, monospace' }}>· </span>Busca realce verdadero en TC<br/>
              <span style={{ color: '#ef4444', fontFamily: 'JetBrains Mono, monospace' }}>· </span>&gt;20 UH pre/poscontraste<br/>
              <span style={{ color: '#ef4444', fontFamily: 'JetBrains Mono, monospace' }}>· </span>RM si zona gris
            </div>
          </div>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#374151' }}>Consulta clínica en segundos</span>
        </div>

        {/* Card 3 - Console */}
        <div style={{ background: '#17171c', borderRadius: 22, padding: 24, display: 'flex', flexDirection: 'column', gap: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ color: '#93939f', fontSize: 11, fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Angaritarad-AI</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '10px 12px', fontSize: 12, color: '#93939f' }}>
            Paciente 65a dolor torácico opresivo…
          </div>
          <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 8, padding: '10px 12px' }}>
            <div style={{ color: '#fca5a5', fontSize: 11, marginBottom: 4, fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Respuesta</div>
            <div style={{ fontSize: 13, color: '#fff', lineHeight: 1.6 }}>
              S: Dolor opresivo, irradiado, 2h<br/>
              A: SCA probable<br/>
              P: ECG + troponinas urgente
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; }
          .hero-cards-grid { grid-template-columns: 1fr !important; padding: 32px 24px !important; }
        }
      `}</style>
    </>
  );
}
