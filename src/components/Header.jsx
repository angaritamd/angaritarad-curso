import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BODY, CANVAS } from '../theme';

// Fondo unificado con angaritarad.com (#16150f). La navegación primaria vive
// en el Sidebar, así que el header se mantiene mínimo: logo + CTA.
const BG = CANVAS;
const TEXT = BODY;

export default function Header({ onOpenModal, onToggleMenu, menuOpen = false }) {
  return (
    <>
      {/* Announcement bar — mismo fondo institucional */}
      <div style={{ background: BG, textAlign: 'center', padding: '8px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span className="mono-label" style={{ color: TEXT }}>
          Inscripción abierta · Para médicos y especialistas
        </span>
      </div>

      <header style={{ position: 'sticky', top: 0, zIndex: 120, background: BG, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, gap: 16 }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Hamburguesa (solo móvil) — abre el drawer del sidebar */}
            <button
              onClick={onToggleMenu}
              className="rail-toggle"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: TEXT, lineHeight: 0 }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14 }}>A</span>
              </div>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, color: 'var(--ink)', letterSpacing: '-0.02em' }}>
                AngaritaRad-AI
              </span>
            </Link>
          </div>

          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <a
              href="https://angaritarad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link"
              style={{ textDecoration: 'none', color: TEXT, fontSize: 14 }}
            >
              angaritarad.com
            </a>
            <button onClick={onOpenModal} className="btn-brand" style={{ padding: '9px 20px', fontSize: 13, whiteSpace: 'nowrap' }}>
              Solicitar acceso
            </button>
          </div>
        </div>
      </header>

      <style>{`
        .header-link:hover { color: var(--ink); }
        @media (max-width: 900px) {
          .rail-toggle { display: block !important; }
          .header-link { display: none !important; }
        }
      `}</style>
    </>
  );
}
