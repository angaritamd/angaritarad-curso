import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BODY, CANVAS } from '../theme';
import LangToggle from './LangToggle';
import { useLang } from '../i18n';

// Fondo unificado con angaritarad.com (#16150f). La navegación primaria vive
// en el Sidebar, así que el header se mantiene mínimo: logo + CTA.
const BG = CANVAS;
const TEXT = BODY;

// i18n: solo la announcement bar, el botón CTA y los aria-label del toggle
// móvil. Los links angaritarad.com/Academy/Blog son nombres propios.
const STR = {
  es: {
    announcement: 'Inscripción abierta · Para médicos y especialistas',
    cerrarMenu: 'Cerrar menú',
    abrirMenu: 'Abrir menú',
    solicitarAcceso: 'Solicitar acceso',
  },
  en: {
    announcement: 'Enrollment open · For physicians and specialists',
    cerrarMenu: 'Close menu',
    abrirMenu: 'Open menu',
    solicitarAcceso: 'Request access',
  },
};

export default function Header({ onOpenModal, onToggleMenu, menuOpen = false }) {
  const lang = useLang();
  const t = STR[lang] || STR.es;

  return (
    <>
      {/* Announcement bar — mismo fondo institucional */}
      <div style={{ background: BG, textAlign: 'center', padding: '8px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span className="mono-label" style={{ color: TEXT }}>
          {t.announcement}
        </span>
      </div>

      <header style={{ position: 'sticky', top: 0, zIndex: 120, background: BG, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, gap: 16 }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Hamburguesa (solo móvil) — abre el drawer del sidebar */}
            <button
              onClick={onToggleMenu}
              className="rail-toggle"
              aria-label={menuOpen ? t.cerrarMenu : t.abrirMenu}
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
            <a
              href="https://academy.angaritarad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link"
              style={{ textDecoration: 'none', color: TEXT, fontSize: 14 }}
            >
              Academy
            </a>
            <a
              href="https://openrad.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link"
              style={{ textDecoration: 'none', color: TEXT, fontSize: 14 }}
            >
              Blog
            </a>
            <button onClick={onOpenModal} className="btn-brand" style={{ padding: '9px 20px', fontSize: 13, whiteSpace: 'nowrap' }}>
              {t.solicitarAcceso}
            </button>
            {/* Aditivo: selector de idioma al final del header, no altera los links existentes */}
            <LangToggle />
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
