import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { useModal } from './useModal';

import Hero from './components/Hero';
import AsiFunciona from './components/AsiFunciona';
import Introduccion from './components/Introduccion';
import Curriculum from './components/Curriculum';
import VideoCurso from './components/VideoCurso';
import NoPitch from './components/NoPitch';
import PracticalDemo from './components/PracticalDemo';
import Instructor from './components/Instructor';
import EsParaTi from './components/EsParaTi';
import PrecioInteres from './components/PrecioInteres';
import Organizaciones from './components/Organizaciones';
import { FAQ, FinalCTA } from './components/Sections';

// Ocultos hasta nueva definición (no borrar):
// import Pricing from './components/Pricing';
// import Benefits from './components/Benefits';
// import ResourceCards from './components/ResourceCards';
// TargetAudience (Sections.jsx) reemplazada por EsParaTi.
// ComoAprendes se monta dentro de AsiFunciona (ruta Inicio).

/** Home corto: solo Hero + "Así funciona". */
function Inicio() {
  const { onOpenModal } = useModal();
  return (
    <main>
      <Hero onOpenModal={onOpenModal} />
      <AsiFunciona />
    </main>
  );
}

function IntroduccionPage() {
  const { onOpenModal } = useModal();
  return (
    <main>
      <Introduccion onOpenModal={onOpenModal} />
    </main>
  );
}

function Contenido() {
  return (
    <main>
      <Curriculum />
      <VideoCurso />
      <NoPitch />
    </main>
  );
}

function Agente() {
  const { onOpenModal } = useModal();
  return (
    <main>
      <PracticalDemo onOpenModal={onOpenModal} />
    </main>
  );
}

function InstructorPage() {
  return (
    <main>
      <Instructor />
    </main>
  );
}

function Precio() {
  const { onOpenModal } = useModal();
  return (
    <main>
      <EsParaTi />
      <PrecioInteres onOpenModal={onOpenModal} />
      <FinalCTA onOpenModal={onOpenModal} />
    </main>
  );
}

function Preguntas() {
  return (
    <main>
      <FAQ />
    </main>
  );
}

function OrganizacionesPage() {
  return (
    <main>
      <Organizaciones />
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/introduccion" element={<IntroduccionPage />} />
        <Route path="/contenido" element={<Contenido />} />
        {/* La ruta vieja sigue viva para no romper enlaces ya compartidos. */}
        <Route path="/temario" element={<Navigate to="/contenido" replace />} />
        <Route path="/agente" element={<Agente />} />
        <Route path="/instructor" element={<InstructorPage />} />
        <Route path="/precio" element={<Precio />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/organizaciones" element={<OrganizacionesPage />} />
        {/* Cualquier otra ruta cae al home */}
        <Route path="*" element={<Inicio />} />
      </Route>
    </Routes>
  );
}
