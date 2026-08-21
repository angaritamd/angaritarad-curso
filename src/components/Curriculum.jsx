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
    <section id="temario" style={{ background: 'var(--canvas)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>El temario</span>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 8px' }}>
          7 módulos + fundamentos
        </h2>
        <p style={{ fontSize: 17, color: 'var(--body)', marginBottom: 40, lineHeight: 1.6 }}>
          Empiezas desde cero con los fundamentos bonus y avanzas módulo a módulo
          construyendo algo real en cada uno.
        </p>

        {/* Fundamentos */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '0 0 8px' }}>
          <span className="mono-label">Fundamentos</span>
          <span style={{ background: 'var(--primary)', color: 'var(--ink)', borderRadius: 6, padding: '2px 8px', fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Bonus · desde cero
          </span>
        </div>
        <div className="card" style={{ marginBottom: 40, padding: '4px 20px' }}>
          {fundamentals.map((f, i) => (
            <div key={f.id} style={{ borderTop: i ? '1px solid var(--hairline)' : 'none', padding: '14px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ background: 'var(--canvas-soft)', color: 'var(--ink)', borderRadius: 6, padding: '2px 8px', fontSize: 11, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', flexShrink: 0 }}>{f.id}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 15, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{f.title}</span>
            </div>
          ))}
        </div>

        {/* Módulos */}
        <span className="mono-label" style={{ display: 'block', marginBottom: 8 }}>Módulos</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {modules.map((mod) => (
            <div key={mod.id} className="card">
              <button onClick={() => toggle(mod.id)} style={{
                width: '100%', textAlign: 'left', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flex: 1 }}>
                  <span style={{
                    background: mod.badge ? 'var(--primary)' : 'var(--canvas-card)',
                    color: 'var(--ink)', borderRadius: 6, padding: '2px 8px', fontSize: 11,
                    fontFamily: 'var(--font-mono)', flexShrink: 0, marginTop: 2,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                  }}>
                    {mod.badge || mod.id}
                  </span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 15, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                    {mod.title}
                  </span>
                </div>
                <div style={{ flexShrink: 0, color: 'var(--muted)', marginTop: 2 }}>
                  {open === mod.id ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {open === mod.id && (
                <div style={{ padding: '0 24px 24px 80px' }}>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--body)', margin: 0 }}>{mod.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
