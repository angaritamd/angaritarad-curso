import { ArrowRight, Hospital, Network, ShieldCheck, Users } from 'lucide-react';
import { FadeUp, AuroraBlobs, ImageSlot } from './motion';
import { BRAND, CANVAS } from '../theme';

const BG = CANVAS;

const capacidades = [
  {
    Icon: Hospital,
    title: 'Despliegue para servicios y hospitales',
    body: 'Un mismo agente clínico para todo el servicio, con acceso controlado por rol y trazabilidad de cada conversación desde el panel de administración.',
  },
  {
    Icon: Network,
    title: 'Hospital Coder · protocolo agéntico',
    body: 'El protocolo que estructura cómo los agentes leen el contexto clínico, se coordinan entre sí y devuelven resultados verificables al equipo.',
  },
  {
    Icon: Users,
    title: 'Agentes en paralelo',
    body: 'Varios agentes trabajando a la vez sobre distintas tareas del servicio — indicación, reporte, seguimiento — sin duplicar el trabajo del médico.',
  },
  {
    Icon: ShieldCheck,
    title: 'Marcos de gobernanza',
    body: 'Alineado con los marcos de evaluación y aseguramiento de IA clínica del NHS: AIRAF, RAISE y ARCH-AI.',
  },
];

export default function Organizaciones() {
  return (
    <section style={{ position: 'relative', background: BG, color: 'var(--ink)', padding: '96px 24px', overflow: 'hidden' }}>
      <AuroraBlobs />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1120, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ maxWidth: 680, marginBottom: 56 }}>
            <span className="mono-label" style={{ display: 'block', marginBottom: 16, color: 'rgba(255,255,255,0.5)' }}>
              Organizaciones
            </span>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 16px', lineHeight: 1.1 }}>
              IA clínica a escala de servicio.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
              El curso forma a un médico. AngaritaRad despliega la misma infraestructura para
              un servicio completo: radiología, consulta externa, hospitalización — con
              gobernanza, auditoría y soporte institucional.
            </p>
          </div>
        </FadeUp>

        <div className="org-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          <div style={{ display: 'grid', gap: 12 }}>
            {capacidades.map(({ Icon, title, body }, i) => (
              <FadeUp key={title} delay={i * 0.07}>
                <div className="card" style={{ padding: '24px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <div className="card-icon" style={{ width: 36, height: 36 }}>
                      <Icon size={18} color={BRAND} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)', margin: 0, letterSpacing: '-0.01em' }}>{title}</h3>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.65)', margin: 0 }}>{body}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.1}>
            <ImageSlot
              src="/hospital.webp"
              alt="Radiólogo sonriendo frente a su estación de reporte con estudios de imagen en pantalla."
              ratio="3 / 2"
            />
            <div style={{ marginTop: 20, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {['NHS AIRAF', 'RAISE', 'ARCH-AI'].map(m => (
                <span key={m} className="mono-label" style={{ color: 'rgba(255,255,255,0.45)' }}>{m}</span>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.12}>
          <div style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.10)', display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://angaritarad.com" target="_blank" rel="noopener noreferrer" className="btn-brand" style={{ fontSize: 16, padding: '16px 32px' }}>
              Solicitar demo para tu servicio <ArrowRight size={16} />
            </a>
            <a
              href="https://angaritarad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: 15, padding: '15px 28px', color: 'var(--ink)', borderColor: 'rgba(255,255,255,0.25)' }}
            >
              AngaritaRad para hospitales <ArrowRight size={15} />
            </a>
          </div>
        </FadeUp>
      </div>

      <style>{`@media (max-width: 900px) { .org-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </section>
  );
}
