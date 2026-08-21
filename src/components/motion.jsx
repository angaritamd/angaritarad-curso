import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Helpers de animación compartidos. Todo respeta `prefers-reduced-motion`.

/** Fade + slide-up al entrar en viewport. */
export function FadeUp({ children, delay = 0, y = 16, once = true, style, className }) {
  const reduce = useReducedMotion();
  if (reduce) return <div style={style} className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Wrapper de transición de ruta: fade + slide-up (~250 ms). */
export function RouteFade({ children }) {
  const reduce = useReducedMotion();
  if (reduce) return <div>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Capa ambiental de angaritarad.com: tres gradientes aurora a la deriva.
 * Decorativa — aria-hidden, pointer-events none, siempre detrás del contenido.
 * La animación se apaga vía CSS en prefers-reduced-motion.
 */
export function AuroraBlobs() {
  return (
    <div className="aurora-layer" aria-hidden="true">
      <div className="aurora-blob aurora-blob--1" />
      <div className="aurora-blob aurora-blob--2" />
      <div className="aurora-blob aurora-blob--3" />
    </div>
  );
}

const NEURAL_COLORS = [
  [159, 187, 224], // aurora-blue
  [192, 168, 221], // aurora-lavender
  [159, 201, 162], // aurora-mint
  [223, 168, 143], // aurora-peach
  [192, 133, 50],  // aurora-gold
];
const COUNT = 55;
const CONNECT = 145;

/**
 * Partículas flotantes conectadas — el <canvas id="neural-canvas"> del sitio
 * principal, portado a React con cleanup de rAF y del listener de resize.
 * Con reduced-motion pinta un solo frame estático, como el original.
 */
export function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const host = canvas.parentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let W = 0, H = 0, pts = [], raf = null;

    function resize() {
      W = canvas.width = host.offsetWidth;
      H = canvas.height = host.offsetHeight;
    }

    function init() {
      pts = Array.from({ length: COUNT }, () => {
        const c = NEURAL_COLORS[Math.floor(Math.random() * NEURAL_COLORS.length)];
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.38,
          vy: (Math.random() - 0.5) * 0.38,
          r: Math.random() * 1.8 + 0.8,
          c,
        };
      });
    }

    function draw(animate) {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT) {
            const a = (1 - d / CONNECT) * 0.22;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(${pts[i].c.join(',')},${a})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c.join(',')},0.72)`;
        ctx.fill();
        if (animate) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
        }
      }

      if (animate) raf = requestAnimationFrame(() => draw(true));
    }

    function start() {
      resize();
      init();
      draw(!reduced.matches);
    }

    function onResize() {
      if (raf) cancelAnimationFrame(raf);
      start();
    }

    start();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-canvas" aria-hidden="true" />;
}

/**
 * Imagen con fallback de marca: si el archivo aún no existe en public/,
 * se pinta un placeholder con el rótulo IMAGEN PENDIENTE.
 * Basta soltar el archivo real en public/ para que aparezca — sin tocar código.
 */
export function ImageSlot({ src, alt, ratio = '4 / 3', radius = 16, style }) {
  const [failed, setFailed] = useState(false);
  const box = { position: 'relative', width: '100%', aspectRatio: ratio, borderRadius: radius, overflow: 'hidden', ...style };

  if (failed) {
    return (
      <div style={{ ...box, background: 'var(--canvas-soft)', border: '1px solid var(--hairline)' }} role="img" aria-label={alt}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, zIndex: 1 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary)', opacity: 0.9 }} />
          <span className="mono-label">Imagen pendiente</span>
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted-soft)' }}>{src}</code>
        </div>
      </div>
    );
  }

  return (
    <div style={box}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
}
