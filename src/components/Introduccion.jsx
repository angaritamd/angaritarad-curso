import { Link } from 'react-router-dom';
import { ArrowRight, Presentation, Compass, Bot, IdCard, Target, GraduationCap, Radio } from 'lucide-react';
import { FadeUp, AuroraBlobs } from './motion';
import { BRAND } from '../theme';

// Los 7 bloques que explican qué es este curso antes de entrar al catálogo.
// La narrativa vive aquí; /contenido solo navega.
const bloques = [
  {
    Icon: Presentation,
    title: 'No es un curso de diapositivas',
    body: 'Tomé miles de horas de cursos en Colombia y afuera, en las mejores instituciones. La verdad: las diapositivas y los videos no alcanzan para volver la IA algo accionable en medicina. Por eso construí otra cosa — un curso agéntico, hecho por un médico para médicos, donde practicas con un agente de IA real, no solo miras.',
  },
  {
    Icon: Compass,
    title: 'No te preocupes si nunca has tocado IA',
    body: 'Eliges los skills según lo que necesites, en el orden que quieras. Si eres nuevo, arranca en orden y no te pierdes. Cada módulo abre y cierra con un video que te dice exactamente qué hacer. Y me puedes escribir a mí durante todo el curso — no estás solo con una máquina.',
  },
  {
    Icon: Bot,
    title: 'Desde el primer módulo, un agente real en tu WhatsApp',
    body: 'En M1 activas OpenClaw: un agente orquestador — un sistema de IA que coordina varios modelos para ejecutar tareas, no solo responder. Vive en tu WhatsApp, te asiste y hace contigo las tareas. Tú nunca programas: le hablas en lenguaje natural y él trabaja para ti.',
  },
  {
    Icon: IdCard,
    title: 'Tu cédula de IA, no un certificado',
    body: 'No sales con un PDF. Sales con una CC en IA: una cuenta de GitHub auditada, tuya, que se llena automáticamente a medida que pasas los quizzes y haces tareas muy sencillas. Es evidencia real y verificable de que sabes operar IA — algo que un certificado no demuestra.',
  },
  {
    Icon: Target,
    title: 'El curso gira alrededor de TU tema',
    body: 'Al inicio defines qué de tu área quieres repotenciar con IA. El curso se rutina sobre eso, módulo a módulo, hasta que en la graduación tengas casi un artículo con DOI. Yo construí y verifiqué personalmente cada módulo — pero el curso tiene vida propia: dependiendo de tu tema y tus decisiones, llegas a un lugar distinto.',
  },
  {
    Icon: GraduationCap,
    title: 'La graduación la firma el agente, no yo',
    body: 'En M8, OpenClaw actúa como capstone: audita todo tu avance y lo convierte en la base de un artículo de IA con DOI vía Zenodo. El feedback final es del agente, no mío. Único en su tipo.',
  },
  {
    Icon: Radio,
    title: 'En vivo',
    body: 'Hay conferencias en vivo, en fechas señaladas, para resolver preguntas y darte ritmo.',
  },
];

export default function Introduccion({ onOpenModal }) {
  return (
    <section style={{ position: 'relative', background: 'var(--canvas)', padding: '96px 24px', overflow: 'hidden' }}>
      <AuroraBlobs />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 860, margin: '0 auto' }}>
        <FadeUp>
          <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Introducción</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 16px', lineHeight: 1.1 }}>
            Qué es esto,<br />
            <span style={{ color: 'var(--body)' }}>antes de que entres.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--body)', margin: '0 0 48px', maxWidth: 640 }}>
            Siete cosas que conviene que sepas antes de mirar el catálogo.
          </p>
        </FadeUp>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {bloques.map(({ Icon, title, body }, i) => (
            <FadeUp key={title} delay={i * 0.05}>
              <div className="card" style={{ padding: '28px 28px' }}>
                <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <div className="card-icon" style={{ marginTop: 2 }}>
                    <Icon size={20} color={BRAND} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.05em' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 18, color: 'var(--ink)', letterSpacing: '-0.01em', margin: 0, lineHeight: 1.3 }}>
                        {title}
                      </h3>
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--body)', margin: 0 }}>{body}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <div style={{ marginTop: 48, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/contenido" className="btn-brand" style={{ fontSize: 15, padding: '14px 28px' }}>
              Ver el contenido <ArrowRight size={16} />
            </Link>
            <button onClick={onOpenModal} className="btn-outline" style={{ fontSize: 15, padding: '13px 26px' }}>
              Solicitar acceso
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
