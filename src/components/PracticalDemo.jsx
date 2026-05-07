import { useState } from 'react';

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

const cards = [
  {
    label: 'Dictado → SOAP automático',
    user: 'Mujer 58a dolor abdominal agudo, fiebre y náuseas. Sospecha de apendicitis. ¿Puedes analizar el caso?',
    lines: [
      { tag: 'S:', text: 'Mujer 58a, dolor abdominal agudo, fiebre y náuseas' },
      { tag: 'O:', text: 'Signos vitales: T 38.9°C, FC 110 lpm. Abdomen con defensa en cuadrante inferior derecho' },
      { tag: 'A:', text: 'Sospecha de apendicitis aguda' },
      { tag: 'P:', text: 'Realizar ecografía abdominal · Solicitar valoración quirúrgica' },
    ],
  },
  {
    label: 'Consulta clínica en segundos',
    user: 'Dame un tip médico para hoy',
    lines: [
      { tag: 'Tip (Radiología):', text: null },
      { tag: '·', text: 'En TC no veas "masa sólida en riñón", busca realce verdadero' },
      { tag: '·', text: 'Realce significativo si aumenta >20 UH entre pre y poscontraste' },
      { tag: '·', text: 'En RM: realce en difusión ayuda si hay hemorragia peritumoral' },
    ],
  },
  {
    label: 'Angaritarad-AI',
    isConsole: true,
    user: 'Paciente 65a dolor torácico opresivo...',
    response: [
      'S: Dolor opresivo, irradiado, 2h',
      'A: SCA probable',
      'P: ECG + troponinas urgente',
    ],
  },
];

function ChatCard({ card }) {
  if (card.isConsole) {
    return (
      <div style={{ background: '#17171c', borderRadius: 16, padding: 24, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93939f' }}>ANGARITARAD-AI</span>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '10px 14px' }}>
          <span style={{ fontSize: 13, color: '#93939f' }}>{card.user}</span>
        </div>
        <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, padding: '12px 14px' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ef4444', display: 'block', marginBottom: 8 }}>RESPUESTA</span>
          {card.response.map((line, i) => (
            <div key={i} style={{ fontSize: 14, color: '#fff', lineHeight: 1.6 }}>{line}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#17171c', borderRadius: 16, padding: 24, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93939f' }}>ANGARITARAD-AI · WHATSAPP</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 14 }}>
        <div style={{ background: 'rgba(255,255,255,0.1)', color: '#e5e7eb', borderRadius: '12px 12px 4px 12px', padding: '9px 13px', maxWidth: '80%', fontSize: 13, lineHeight: 1.5 }}>
          {card.user}
        </div>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px 12px 12px 4px', padding: '12px 14px', flex: 1 }}>
        {card.lines.map((line, i) => (
          <div key={i} style={{ display: 'flex', gap: 6, marginBottom: i < card.lines.length - 1 ? 6 : 0 }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#ef4444', flexShrink: 0 }}>{line.tag}</span>
            {line.text && <span style={{ fontSize: 13, color: '#d1d5db', lineHeight: 1.5 }}>{line.text}</span>}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4b5563' }}>{card.label}</span>
      </div>
    </div>
  );
}

export default function PracticalDemo({ onOpenModal }) {
  const [active, setActive] = useState(0);

  return (
    <section id="practica" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Así funciona</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: '#17171c', margin: '0 0 16px' }}>
            Tu agente en la práctica clínica
          </h2>
          <p style={{ fontSize: 17, color: '#616161', maxWidth: 520, margin: 0, lineHeight: 1.6 }}>
            Estas no son simulaciones. Son los tipos de consultas que resuelve el agente en tiempo real.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 32, marginBottom: 64 }} className="demo-grid">
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
          <div style={{ background: '#fafafa', border: '1px solid #f2f2f2', borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #f2f2f2' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
              <span className="mono-label">Angaritarad-AI · WhatsApp</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
              <div style={{ background: '#17171c', color: '#fff', borderRadius: '16px 16px 4px 16px', padding: '10px 14px', maxWidth: '65%', fontSize: 14, lineHeight: 1.5 }}>
                {examples[active].user}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px 16px 16px 4px', padding: '10px 14px', maxWidth: '75%', fontSize: 14, lineHeight: 1.6, color: '#212121', whiteSpace: 'pre-line' }}>
                {examples[active].agent}
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #f2f2f2', paddingTop: 48 }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: 24 }}>Conversaciones reales</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, alignItems: 'stretch' }} className="cards-grid">
            {cards.map((card, i) => (
              <ChatCard key={i} card={card} />
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button onClick={onOpenModal} className="btn-brand" style={{ fontSize: 15, padding: '14px 32px' }}>
            Activar mi agente ahora
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .demo-grid { grid-template-columns: 1fr !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
