import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { AuroraBlobs, NeuralCanvas } from './motion';

export default function Hero({ onOpenModal }) {
  return (
    <>
      <section style={{ background: 'var(--canvas)', paddingTop: 0, paddingBottom: 0, overflow: 'hidden', position: 'relative', minHeight: '90vh', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr' }} className="hero-section">

        {/* Left column */}
        <div style={{ position: 'relative', padding: '88px 40px 88px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          {/* Ambiente compartido con angaritarad.com: aurora + red de partículas */}
          <AuroraBlobs />
          <NeuralCanvas />
          <div style={{ position: 'relative', zIndex: 2 }}>

          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <span className="mono-label">Curso para médicos y especialistas</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--primary)', display: 'inline-block' }} />
            <span className="mono-label" style={{ color: 'var(--primary)' }}>Inscripción abierta</span>
          </div>

          {/* Main headline */}
          <div style={{ marginBottom: 32 }}>
            <h1 style={{
              fontFamily: 'var(--font-sans)', fontWeight: 400,
              fontSize: 'clamp(2.25rem, 4.2vw, 3.5rem)',
              lineHeight: 1, letterSpacing: '-0.03em',
              color: 'var(--ink)', margin: 0,
            }}>
              Aprende a usar IA<br />
              <span style={{ color: 'var(--primary)' }}>en tu práctica.</span>
            </h1>
          </div>

          {/* Subhead */}
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--body)', maxWidth: 560, marginBottom: 40 }}>
            Un curso práctico para médicos y especialistas. Documenta, razona, automatiza y publica con inteligencia artificial — sin código y sin saber nada de IA.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 64, alignItems: 'center' }}>
            <button onClick={onOpenModal} className="btn-brand" style={{ fontSize: 16, padding: '16px 32px' }}>
              Quiero aplicar IA en mi consulta <ArrowRight size={16} />
            </button>
            <Link to="/temario" className="btn-outline" style={{ fontSize: 15, padding: '14px 28px' }}>
              <PlayCircle size={16} /> Ver el temario
            </Link>
          </div>

          {/* Trust strip */}
          <div style={{ paddingTop: 32, borderTop: '1px solid var(--hairline)', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
            <span className="mono-label">Instructor certificado</span>
            <span style={{ color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500 }}>Harvard Exec. Ed.</span>
            <span style={{ color: 'var(--muted)' }}>·</span>
            <span style={{ color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500 }}>@angaritarad</span>
          </div>

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
            <div style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)', borderRadius: 16, padding: '20px 24px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--aurora-mint)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)' }}>ANGARITARAD-AI · EN VIVO</span>
              </div>
              <div style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>S: </span>Dolor opresivo, irradiado, 2h<br/>
                <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>A: </span>SCA probable<br/>
                <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>P: </span>ECG + troponinas urgente
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
