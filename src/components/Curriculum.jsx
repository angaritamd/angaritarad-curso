import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const fundamentals = [
  { id: 'F1', title: 'Las 3 Eras de la IA en medicina' },
  { id: 'F2', title: 'Marcos de seguridad clínica' },
  { id: 'F3', title: '¿Qué es la IA? (sin tecnicismos)' },
  { id: 'F4', title: 'Tokenización' },
];

const modules = [
  { id: 'M1', title: 'Activa tu asistente en WhatsApp', description: 'Tu agente respondiendo en tu número antes de terminar el módulo.' },
  { id: 'M2', title: 'Documentación + razonamiento aumentado', description: 'Notas de historia clínica, remisiones y certificados en segundos. La IA propone, tú decides.' },
  { id: 'M3', title: 'Tu ruta: Clinical Coder vs Hospital Coder', description: '¿Construyes a tu escala o a escala institucional? Los 4 pilares del Hospital Coder.' },
  { id: 'M4', title: 'Automatización clínica con n8n', description: 'Tu primer flujo automático, sin programar. Qué automatizar, qué nunca.' },
  { id: 'M5', title: 'Tu segunda memoria clínica (RAG)', description: 'El agente busca en tus propias fuentes antes de responder. Sin código.' },
  { id: 'M6', title: 'Motor de publicación con NotebookLM', description: 'De tus fuentes a un artículo, resumen o post listo para publicar.' },
  { id: 'MF', badge: 'Final', title: 'Cierre, CV digital y comunidad', description: 'Tu portfolio en GitHub y la comunidad AngaritaRad-AI.' },
];

export default function Curriculum() {
  const [open, setOpen] = useState('M1');
  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <section id="temario" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>El temario</span>
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: '#17171c', margin: '0 0 8px' }}>
          7 módulos + fundamentos
        </h2>
        <p style={{ fontSize: 17, color: '#616161', marginBottom: 40, lineHeight: 1.6 }}>
          Empiezas desde cero con los fundamentos bonus y avanzas módulo a módulo
          construyendo algo real en cada uno.
        </p>

        {/* Fundamentos */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '0 0 8px' }}>
          <span className="mono-label">Fundamentos</span>
          <span style={{ background: '#ef4444', color: '#fff', borderRadius: 6, padding: '2px 8px', fontSize: 11, fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Bonus · desde cero
          </span>
        </div>
        <div style={{ borderTop: '1px solid #e5e7eb', marginBottom: 40 }}>
          {fundamentals.map((f) => (
            <div key={f.id} style={{ borderBottom: '1px solid #e5e7eb', padding: '14px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ background: '#eeece7', color: '#17171c', borderRadius: 6, padding: '2px 8px', fontSize: 11, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em', flexShrink: 0 }}>{f.id}</span>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 15, color: '#17171c', letterSpacing: '-0.01em' }}>{f.title}</span>
            </div>
          ))}
        </div>

        {/* Módulos */}
        <span className="mono-label" style={{ display: 'block', marginBottom: 8 }}>Módulos</span>
        <div style={{ borderTop: '1px solid #e5e7eb' }}>
          {modules.map((mod) => (
            <div key={mod.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <button onClick={() => toggle(mod.id)} style={{
                width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flex: 1 }}>
                  <span style={{
                    background: mod.badge ? '#ef4444' : '#17171c',
                    color: '#fff', borderRadius: 6, padding: '2px 8px', fontSize: 11,
                    fontFamily: 'JetBrains Mono, monospace', flexShrink: 0, marginTop: 2,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                  }}>
                    {mod.badge || mod.id}
                  </span>
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 15, color: '#17171c', letterSpacing: '-0.01em' }}>
                    {mod.title}
                  </span>
                </div>
                <div style={{ flexShrink: 0, color: '#93939f', marginTop: 2 }}>
                  {open === mod.id ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {open === mod.id && (
                <div style={{ paddingBottom: 24, paddingLeft: 56 }}>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: '#616161', margin: 0 }}>{mod.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
