import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ComoAprendes from './ComoAprendes';
import { FadeUp, AuroraBlobs } from './motion';

// La infografía es la ilustración principal: muestra el camino 01→05 y el
// resultado final. Por eso la sección no repite los pasos en texto —
// titular, intro corta y la imagen. ComoAprendes aporta la metodología.
export default function AsiFunciona() {
  return (
    <>
      <section style={{ position: 'relative', background: 'var(--canvas)', padding: '96px 24px', overflow: 'hidden' }}>
        <AuroraBlobs />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1120, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ maxWidth: 640, margin: '0 auto 56px', textAlign: 'center' }}>
              <span className="mono-label" style={{ display: 'block', marginBottom: 16 }}>Así funciona</span>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 16px', lineHeight: 1.1 }}>
                De tu consulta<br />
                <span style={{ color: 'var(--body)' }}>a un sistema propio.</span>
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--body)', margin: 0 }}>
                Cinco pasos, siete módulos, un solo hilo: cada taller construye una pieza
                del sistema que termina funcionando en tu consulta.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            {/* Lámina: el arte tiene fondo crema, así que se enmarca a propósito
                sobre el lienzo oscuro en vez de flotar como una placa suelta. */}
            <div className="plate" style={{ maxWidth: 432, margin: '0 auto' }}>
              <img
                src="/sistema-ia-clinica.webp"
                alt="El camino que construyes en el curso, paso a paso: 01 tu asistente en WhatsApp, 02 tus notas automáticas, 03 tu segunda memoria, 04 tus tareas en piloto automático, 05 tu conocimiento publicado. Resultado final: tu propio proyecto de IA funcionando, cv digital y comunidad."
                style={{ width: '100%', height: 'auto', borderRadius: 6, display: 'block' }}
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.14}>
            <div style={{ marginTop: 48, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
              <Link to="/contenido" className="btn-brand" style={{ fontSize: 15, padding: '14px 28px' }}>
                Ver el contenido <ArrowRight size={16} />
              </Link>
              <Link to="/agente" className="btn-outline" style={{ fontSize: 15, padding: '13px 26px' }}>
                El agente en tu consulta
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Metodología: cómo aprendes */}
      <ComoAprendes />
    </>
  );
}
