import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'Temario', href: '#temario' },
  { name: 'Instructor', href: '#instructor' },
  { name: 'Precios', href: '#precios' },
];

export default function Header({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Announcement bar */}
      <div style={{ background: '#17171c', color: '#fff', textAlign: 'center', padding: '8px 16px', fontSize: '12px', letterSpacing: '0.05em' }}>
        <span className="mono-label" style={{ color: '#d9d9dd' }}>
          Inscripción abierta · Inicio 16 de abril · Cupos limitados
        </span>
      </div>

      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.95)' : '#fff',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: '1px solid #f2f2f2',
        transition: 'all 0.2s',
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 14 }}>A</span>
            </div>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 15, color: '#17171c', letterSpacing: '-0.02em' }}>
              AngaritaRad<span style={{ color: '#ef4444' }}>-AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={(e) => handleNav(e, link.href)}
                style={{ textDecoration: 'none', color: '#616161', fontSize: 14, transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = '#17171c'}
                onMouseLeave={e => e.target.style.color = '#616161'}>
                {link.name}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button onClick={onOpenModal} className="btn-brand" style={{ padding: '8px 18px', fontSize: 13 }}>
              Inscribirme
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-menu-btn"
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid #f2f2f2', padding: '16px 24px 24px' }}>
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={(e) => handleNav(e, link.href)}
                style={{ display: 'block', padding: '12px 0', color: '#212121', textDecoration: 'none', fontSize: 15, borderBottom: '1px solid #f2f2f2' }}>
                {link.name}
              </a>
            ))}
            <button onClick={() => { setMobileOpen(false); onOpenModal(); }} className="btn-brand"
              style={{ marginTop: 16, width: '100%', padding: '12px 24px', fontSize: 15 }}>
              Inscribirme al Programa
            </button>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
