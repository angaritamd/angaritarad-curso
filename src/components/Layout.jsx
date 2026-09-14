import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Header from './Header';
import Sidebar from './Sidebar';
import RegistrationModal from './RegistrationModal';
import PrivacyModal from './PrivacyModal';
import { Footer } from './Sections';
import { RouteFade } from './motion';

export default function Layout() {
  const [modalOpen, setModalOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const onOpenModal = () => setModalOpen(true);

  // Cada cambio de ruta vuelve arriba; con hash, baja al ancla. El drawer lo cierra su propio onNavigate.
  // El destino puede tardar en existir (RouteFade monta la página nueva tras la salida de la anterior),
  // por eso se reintenta por rAF durante ~1s en vez de buscar el nodo una sola vez.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      let tries = 0;
      let raf;
      const seek = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else if (tries++ < 60) raf = requestAnimationFrame(seek);
      };
      seek();
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--canvas-card)' }}>
      <Header onOpenModal={onOpenModal} onToggleMenu={() => setDrawerOpen(o => !o)} menuOpen={drawerOpen} />

      <div className="shell">
        {/* Rail claro y minimal (feel Skills) sobre header oscuro */}
        <aside className="rail">
          <Sidebar />
        </aside>

        <div style={{ minWidth: 0 }}>
          <AnimatePresence mode="wait">
            <RouteFade key={location.pathname}>
              <Outlet context={{ onOpenModal }} />
            </RouteFade>
          </AnimatePresence>
          <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
        </div>
      </div>

      {/* Drawer móvil */}
      {drawerOpen && (
        <>
          <div className="rail-scrim" onClick={() => setDrawerOpen(false)} />
          <aside className="rail-drawer" role="dialog" aria-label="Menú de secciones">
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '12px 12px 0' }}>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Cerrar menú"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: 'var(--body)', lineHeight: 0 }}
              >
                <X size={20} />
              </button>
            </div>
            <Sidebar onNavigate={() => setDrawerOpen(false)} />
          </aside>
        </>
      )}

      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onOpenPrivacy={() => { setModalOpen(false); setPrivacyOpen(true); }}
      />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
}
