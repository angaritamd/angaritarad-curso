import { ArrowRight, PlayCircle } from 'lucide-react';

const CDN = 'https://horizons-cdn.hostinger.com/1b0a5bfe-2477-4a6f-b6d0-9e4cdbc81f2c';

export default function Hero({ onOpenModal }) {
  return (
    <section style={{ background: '#fff', paddingTop: 72, paddingBottom: 96, overflow: 'hidden', position: 'relative' }}>
      {/* Subtle background accent */}
      <div style={{
        position: 'absolute', top: -100, right: -100, width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
          <span className="mono-label">Programa para Médicos</span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
          <span className="mono-label" style={{ color: '#ef4444' }}>Inscripción abierta</span>
        </div>

        {/* Main headline - Cohere editorial scale */}
        <div style={{ maxWidth: 780, marginBottom: 32 }}>
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

        {/* Media band - screenshots + agent card */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, maxWidth: 900 }}>
          {/* Main screenshot gallery */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { src: `${CDN}/155820f404a389a4534ca60dede13691.jpg`, caption: 'Dictado → SOAP automático' },
              { src: `${CDN}/9e8e8eda08e86fdbce8e625311ac48cc.jpg`, caption: 'Consulta clínica en segundos' },
            ].map((img, i) => (
              <div key={i} style={{ borderRadius: 22, overflow: 'hidden', border: '1px solid #f2f2f2', position: 'relative' }}>
                <img src={img.src} alt={img.caption} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(23,23,28,0.85)', padding: '8px 12px' }}>
                  <span style={{ color: '#fff', fontSize: 11, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Agent console card - dark */}
          <div style={{
            background: '#17171c', borderRadius: 22, padding: 24, display: 'flex', flexDirection: 'column', gap: 16,
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ color: '#93939f', fontSize: 11, fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Angaritarad-AI</span>
            </div>
            <div style={{ fontSize: 13, color: '#d9d9dd', lineHeight: 1.5 }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '10px 12px', marginBottom: 8, fontSize: 12, color: '#93939f' }}>
                Paciente 65a dolor torácico opresivo…
              </div>
              <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 8, padding: '10px 12px' }}>
                <div style={{ color: '#fca5a5', fontSize: 11, marginBottom: 4, fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Respuesta</div>
                S: Dolor opresivo, irradiado, 2h<br />
                A: SCA probable<br />
                P: ECG + troponinas urgente
              </div>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['WhatsApp', 'Supabase', 'Resend'].map(b => (
                <span key={b} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 4, padding: '3px 8px', fontSize: 10, color: '#93939f', fontFamily: 'JetBrains Mono, monospace' }}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid #f2f2f2', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          <span className="mono-label">Instructor certificado</span>
          <span style={{ color: '#212121', fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 500 }}>Harvard Executive Education</span>
          <span style={{ color: '#d9d9dd' }}>·</span>
          <span style={{ color: '#212121', fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 500 }}>+10K seguidores @angaritarad</span>
          <span style={{ color: '#d9d9dd' }}>·</span>
          <span style={{ color: '#212121', fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 500 }}>OpenRad.ai</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 2fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
