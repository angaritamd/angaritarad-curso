import { useState } from 'react';
import { X } from 'lucide-react';

const CDN = 'https://horizons-cdn.hostinger.com/1b0a5bfe-2477-4a6f-b6d0-9e4cdbc81f2c';

const examples = [
  {
    id: 1,
    label: 'Dictado clínico',
    user: 'Paciente masculino 65 años con dolor torácico opresivo irradiado a brazo izquierdo, 2 horas de evolución',
    agent: 'Organizado en formato clínico:\n\nS: Dolor torácico opresivo, irradiado a brazo izquierdo, 2h de evolución\nO: Pendiente signos vitales y examen físico\nA: Sospecha síndrome coronario agudo\nP: ECG urgente, troponinas, monitorización, valoración cardiología',
  },
  {
    id: 2,
    label: 'Diagnóstico diferencial',
    user: 'Dx diferencial dolor abdominal en adulto',
    agent: 'Principales diagnósticos:\n• Apendicitis\n• Colecistitis\n• Pancreatitis\n• Obstrucción intestinal\n\nRed flags:\n• Dolor súbito intenso\n• Signos de irritación peritoneal\n• Inestabilidad hemodinámica',
  },
  {
    id: 3,
    label: 'Filtro clínico',
    user: 'Paciente con cefalea intensa súbita, náuseas y vómito',
    agent: '⚠️ Alerta clínica\nPosible hemorragia subaracnoidea\n\nRed flags activadas:\n• Inicio súbito\n• Intensidad máxima\n• Síntomas neurológicos\n\nSiguiente paso: TAC cerebral urgente',
  },
  {
    id: 4,
    label: 'Reporte estructurado',
    user: 'Nódulo pulmonar sólido 8mm LSD, bordes espiculados, sin adenopatías',
    agent: 'Reporte estructurado:\nHallazgo: Nódulo sólido LSD\nTamaño: 8mm\nMorfología: Espiculado — alta sospecha\nLung-RADS: 4B\nRecomendación: PET-CT o biopsia\nSeguimiento: 3 meses',
  },
];

const screenshots = [
  { src: `${CDN}/155820f404a389a4534ca60dede13691.jpg`, caption: 'Dictado clínico → SOAP automático' },
  { src: `${CDN}/9e8e8eda08e86fdbce8e625311ac48cc.jpg`, caption: 'Consulta clínica y tips especializados' },
  { src: `${CDN}/d3012d21c3e5073c4b60431364c15f90.jpg`, caption: 'Reporte estructurado con Lung-RADS' },
];

export default function PracticalDemo({ onOpenModal }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="practica" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Así funciona</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: '#17171c', margin: '0 0 16px' }}>
            Tu agente en la práctica clínica
          </h2>
          <p style={{ fontSize: 17, color: '#616161', maxWidth: 520, margin: 0, lineHeight: 1.6 }}>
            Estas no son simulaciones. Son los tipos de consultas que resuelve el agente en tiempo real.
          </p>
        </div>

        {/* Interactive demo */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 32, marginBottom: 64 }} className="demo-grid">
          {/* Tab list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {examples.map((ex, i) => (
              <button key={ex.id} onClick={() => setActive(i)} style={{
                textAlign: 'left', padding: '12px 16px', borderRadius: 8, border: 'none', cursor: 'pointer',
                background: active === i ? '#17171c' : 'transparent',
                color: active === i ? '#fff' : '#616161',
                fontSize: 14, fontFamily: 'Inter, sans-serif', transition: 'all 0.15s',
              }}>
                {ex.label}
              </button>
            ))}
          </div>

          {/* Chat window */}
          <div style={{ background: '#fafafa', border: '1px solid #f2f2f2', borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #f2f2f2' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
              <span className="mono-label">Angaritarad-AI · WhatsApp</span>
            </div>
            {/* User bubble */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
              <div style={{ background: '#17171c', color: '#fff', borderRadius: '16px 16px 4px 16px', padding: '10px 14px', maxWidth: '65%', fontSize: 14, lineHeight: 1.5 }}>
                {examples[active].user}
              </div>
            </div>
            {/* Agent bubble */}
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px 16px 16px 4px', padding: '10px 14px', maxWidth: '75%', fontSize: 14, lineHeight: 1.6, color: '#212121', whiteSpace: 'pre-line' }}>
                {examples[active].agent}
              </div>
            </div>
          </div>
        </div>

        {/* Real screenshots */}
        <div style={{ borderTop: '1px solid #f2f2f2', paddingTop: 48 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 24 }}>Conversaciones reales</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="screenshots-grid">
            {screenshots.map((s, i) => (
              <div key={i} onClick={() => setLightbox(s)}
                style={{ borderRadius: 16, overflow: 'hidden', cursor: 'zoom-in', border: '1px solid #f2f2f2', position: 'relative' }}>
                <img src={s.src} alt={s.caption} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '10px 12px', background: '#fff' }}>
                  <span style={{ fontSize: 12, color: '#93939f', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button onClick={onOpenModal} className="btn-brand" style={{ fontSize: 15, padding: '14px 32px' }}>
            Activar mi agente ahora
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
        }}>
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 24, right: 24, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <X size={18} />
          </button>
          <img src={lightbox.src} alt={lightbox.caption} style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: 12 }} />
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .demo-grid { grid-template-columns: 1fr !important; }
          .screenshots-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
