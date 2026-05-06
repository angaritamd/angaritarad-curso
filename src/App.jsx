import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NoPitch from './components/NoPitch';
import PracticalDemo from './components/PracticalDemo';
import Benefits from './components/Benefits';
import Curriculum from './components/Curriculum';
import Instructor from './components/Instructor';
import Pricing from './components/Pricing';
import Sidebar from './components/Sidebar';
import RegistrationModal from './components/RegistrationModal';
import { FAQ, TargetAudience, FinalCTA, Footer } from './components/Sections';

function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div onClick={onClose} style={{ position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',zIndex:200,display:'flex',alignItems:'center',justifyContent:'center',padding:24 }}>
      <div onClick={e=>e.stopPropagation()} style={{ background:'#fff',borderRadius:16,maxWidth:560,width:'100%',maxHeight:'80vh',overflowY:'auto',padding:32 }}>
        <h2 style={{ fontFamily:'Space Grotesk',fontSize:22,color:'#17171c',margin:'0 0 16px' }}>Privacidad &amp; Términos</h2>
        <p style={{ fontSize:14,lineHeight:1.7,color:'#616161' }}>Angaritarad-AI recopila únicamente la información que tú proporcionas al inscribirte: nombre, correo electrónico y número de WhatsApp. Esta información se usa exclusivamente para gestionar tu acceso al programa. No vendemos ni compartimos tus datos con terceros. Los datos de pacientes nunca deben ser ingresados al sistema.</p>
        <button onClick={onClose} className="btn-primary" style={{ marginTop:24,width:'100%',justifyContent:'center',padding:'12px 24px' }}>Cerrar</button>
      </div>
    </div>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const open = () => setModalOpen(true);

  return (
    <div style={{ minHeight:'100vh',background:'#fff' }}>
      <Header onOpenModal={open} />
      <main>
        <Hero onOpenModal={open} />
        <NoPitch />
        <div style={{ maxWidth:1120,margin:'0 auto',padding:'0 24px' }}>
          <div id="main-layout" style={{ display:'grid',gridTemplateColumns:'1fr 320px',gap:48,alignItems:'start' }}>
            <div>
              <PracticalDemo onOpenModal={open} />
              <Benefits />
              <Curriculum />
              <div id="sidebar-mobile" style={{ display:'none',padding:'48px 0' }}>
                <Sidebar onOpenModal={open} />
              </div>
              <TargetAudience />
              <Instructor />
            </div>
            <div id="sidebar-desktop">
              <Sidebar onOpenModal={open} />
            </div>
          </div>
        </div>
        <Pricing onOpenModal={open} />
        <FAQ />
        <FinalCTA onOpenModal={open} />
      </main>
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onOpenPrivacy={() => { setModalOpen(false); setPrivacyOpen(true); }} />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <style>{`
        @media (max-width: 1024px) {
          #main-layout { grid-template-columns: 1fr !important; }
          #sidebar-desktop { display: none !important; }
          #sidebar-mobile { display: block !important; }
        }
      `}</style>
    </div>
  );
}
