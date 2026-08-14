import { PlayCircle } from 'lucide-react';

// TODO(Miguel): reemplazar PLACEHOLDER por el ID real del video de YouTube
// (lo que va después de watch?v= en la URL). Mientras sea PLACEHOLDER se
// muestra el recuadro "Video próximamente".
const YOUTUBE_VIDEO_ID = 'PLACEHOLDER';

export default function VideoCurso() {
  const hasVideo = YOUTUBE_VIDEO_ID !== 'PLACEHOLDER';

  return (
    <section style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Video</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: '#17171c', margin: '0 0 12px' }}>
            Conoce el curso
          </h2>
          <p style={{ fontSize: 17, color: '#616161', margin: 0, lineHeight: 1.6 }}>
            En pocos minutos te cuento de qué se trata.
          </p>
        </div>

        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: 16, overflow: 'hidden', background: '#17171c', border: '1px solid #f2f2f2' }}>
          {hasVideo ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="Conoce el curso AngaritaRad-AI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          ) : (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', position: 'absolute', top: 20, left: 24 }} />
              <span style={{ position: 'absolute', top: 15, left: 40, fontFamily: 'JetBrains Mono, monospace', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93939f' }}>ANGARITARAD-AI</span>
              <PlayCircle size={48} color="#ef4444" />
              <span style={{ fontFamily: 'Space Grotesk', fontSize: 16, color: '#fff' }}>Video próximamente</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
