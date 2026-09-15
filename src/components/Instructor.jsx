import { useLang } from '../i18n';

const STR = {
  es: {
    eyebrow: 'Instructor',
    name: 'Dr. Miguel Angarita',
    role: 'Médico · Fundador AngaritaRad-AI',
    tags: ['Harvard Executive Education', '@angaritarad'],
    linkedinText: 'linkedin.com/in/angaritarad',
    h2: 'IA aplicada a la consulta real, enseñada por un médico.',
    bio: [
      'El Dr. Miguel Angarita combina su experiencia clínica con formación en IA para la salud en Harvard. Su enfoque: crear soluciones que funcionen en el terreno real de los médicos latinoamericanos — eliminar tareas repetitivas, proteger la privacidad del paciente y recuperar tiempo de consulta.',
      'En este curso te guía paso a paso para que apliques IA en tu flujo de trabajo real, no solo la entiendas en teoría.',
    ],
  },
  en: {
    eyebrow: 'Instructor',
    name: 'Dr. Miguel Angarita',
    role: 'Physician · Founder of AngaritaRad-AI',
    tags: ['Harvard Executive Education', '@angaritarad'],
    linkedinText: 'linkedin.com/in/angaritarad',
    h2: 'AI applied to real clinical practice, taught by a physician.',
    bio: [
      'Dr. Miguel Angarita combines his clinical experience with training in AI for healthcare at Harvard. His approach: building solutions that work in the real-world practice of Latin American physicians — eliminating repetitive tasks, protecting patient privacy, and reclaiming consultation time.',
      'In this course, he guides you step by step to apply AI in your real workflow, not just understand it in theory.',
    ],
  },
};

export default function Instructor() {
  const lang = useLang();
  const t = STR[lang] || STR.es;

  return (
    <section id="instructor" style={{ background: 'var(--canvas)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <span className="mono-label" style={{ display: 'block', marginBottom: 40 }}>{t.eyebrow}</span>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64, alignItems: 'start' }} className="instructor-grid">
          {/* Photo + name card */}
          <div>
            <div style={{ borderRadius: 22, overflow: 'hidden', border: '1px solid var(--hairline-strong)', marginBottom: 20 }}>
              <img
                src="/instructor.jpg"
                alt="Dr. Miguel Angarita"
                style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 20, color: 'var(--ink)', margin: '0 0 4px', letterSpacing: '-0.01em' }}>
              {t.name}
            </h3>
            <p style={{ fontSize: 13, color: 'var(--body)', margin: '0 0 16px', lineHeight: 1.4 }}>
              {t.role}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
              {t.tags.map(tag => (
                <span key={tag} style={{ fontSize: 12, color: 'var(--body)', fontFamily: 'var(--font-mono)', background: 'var(--canvas-card)', border: '1px solid var(--hairline)', borderRadius: 6, padding: '4px 10px', display: 'inline-block', width: 'fit-content' }}>{tag}</span>
              ))}
            </div>
            <a href="https://www.linkedin.com/in/angaritarad/" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--aurora-blue)', fontSize: 13, textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> {t.linkedinText}
            </a>
          </div>

          {/* Bio */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 28px', lineHeight: 1.2 }}>
              {t.h2}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {t.bio.map((p, i) => (
                <p key={i} style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .instructor-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
