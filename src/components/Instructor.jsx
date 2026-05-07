


export default function Instructor() {
  return (
    <section id="instructor" style={{ background: '#eeece7', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <span className="mono-label" style={{ display: 'block', marginBottom: 40 }}>Instructor</span>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64, alignItems: 'start' }} className="instructor-grid">
          {/* Photo + name card */}
          <div>
            <div style={{ borderRadius: 22, border: '1px solid #d9d9dd', marginBottom: 20, aspectRatio: '1/1', background: '#17171c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 64, color: 'rgba(255,255,255,0.15)', letterSpacing: '-0.02em' }}>MA</span>
            </div>
            <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 20, color: '#17171c', margin: '0 0 4px', letterSpacing: '-0.01em' }}>
              Dr. Miguel Angarita
            </h3>
            <p style={{ fontSize: 13, color: '#616161', margin: '0 0 16px', lineHeight: 1.4 }}>
              Radiólogo · Fundador AngaritaRad & OpenRad.ai
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
              {['Harvard Executive Education', 'OpenRad.ai', '+10K @angaritarad'].map(tag => (
                <span key={tag} style={{ fontSize: 12, color: '#616161', fontFamily: 'JetBrains Mono, monospace', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 6, padding: '4px 10px', display: 'inline-block', width: 'fit-content' }}>{tag}</span>
              ))}
            </div>
            <a href="https://www.linkedin.com/in/angaritarad/" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#1863dc', fontSize: 13, textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> linkedin.com/in/angaritarad
            </a>
          </div>

          {/* Bio */}
          <div>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em', color: '#17171c', margin: '0 0 28px', lineHeight: 1.2 }}>
              La red de agentes médicos de IA para cada especialista.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'El Dr. Miguel Angarita combina su experiencia clínica como radiólogo con un conocimiento avanzado en automatización e inteligencia artificial aplicada a la salud. Tras especializarse en IA para la salud en Harvard, enfocó su carrera en crear soluciones que realmente funcionen en el terreno de los médicos latinoamericanos.',
                'Como creador del ecosistema Angaritarad-AI, diseñó este sistema pensando estrictamente en las necesidades del médico: eliminar tareas repetitivas, proteger la privacidad del paciente y recuperar tiempo de consulta. Entiende que un agente no es un reemplazo del médico — es un colaborador incansable.',
                'En este programa te guiará paso a paso para que domines tu propio agente. Su enfoque práctico garantiza que cada médico logre integrar la IA a su flujo de trabajo real, no solo entenderla en teoría.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 16, lineHeight: 1.7, color: '#212121', margin: 0 }}>{p}</p>
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
