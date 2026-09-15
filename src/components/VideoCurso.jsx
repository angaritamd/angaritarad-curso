import { PlayCircle } from 'lucide-react';
import { BRAND } from '../theme';
import { useLang } from '../i18n';

// ID del video de bienvenida (mismo embed que public/welcome.html).
// Si algún día vuelve a no haber video, poner 'PLACEHOLDER' y se
// muestra el recuadro "Video próximamente".
const YOUTUBE_VIDEO_ID = 'yzp9pkPIYwI';

const STR = {
  es: {
    eyebrow: 'Video',
    h2: 'Conoce el curso',
    sub: 'En pocos minutos te cuento de qué se trata.',
    iframeTitle: 'Conoce el curso AngaritaRad-AI',
    liveLabel: 'ANGARITARAD-AI',
    comingSoon: 'Video próximamente',
  },
  en: {
    eyebrow: 'Video',
    h2: 'Get to know the course',
    sub: "In just a few minutes, I'll walk you through it.",
    iframeTitle: 'AngaritaRad-AI Course Overview',
    liveLabel: 'ANGARITARAD-AI',
    comingSoon: 'Video coming soon',
  },
};

export default function VideoCurso() {
  const lang = useLang();
  const t = STR[lang] || STR.es;
  const hasVideo = YOUTUBE_VIDEO_ID !== 'PLACEHOLDER';

  return (
    <section style={{ background: 'var(--canvas)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>{t.eyebrow}</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 12px' }}>
            {t.h2}
          </h2>
          <p style={{ fontSize: 17, color: 'var(--body)', margin: 0, lineHeight: 1.6 }}>
            {t.sub}
          </p>
        </div>

        <div className="card" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          {hasVideo ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title={t.iframeTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          ) : (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--aurora-mint)', position: 'absolute', top: 20, left: 24 }} />
              <span style={{ position: 'absolute', top: 15, left: 40, fontFamily: 'var(--font-mono)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)' }}>{t.liveLabel}</span>
              <PlayCircle size={48} color={BRAND} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--ink)' }}>{t.comingSoon}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
