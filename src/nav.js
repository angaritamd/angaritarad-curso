import { House, Compass, BookOpen, Bot, BotMessageSquare, GraduationCap, CreditCard, CircleHelp, Building2 } from 'lucide-react';

// Orden fijo del rail. Organizaciones siempre al final.
// i18n: label es bilingüe ({ es, en } ); Sidebar.jsx renderiza label[lang] vía useLang().
export const NAV_ITEMS = [
  { to: '/', label: { es: 'Inicio', en: 'Home' }, Icon: House, end: true },
  { to: '/introduccion', label: { es: 'Introducción', en: 'Introduction' }, Icon: Compass },
  { to: '/contenido', label: { es: 'Contenido', en: 'Content' }, Icon: BookOpen },
  { to: '/agente', label: { es: 'El agente en tu consulta', en: 'The agent in your practice' }, Icon: Bot },
  { to: '/bots', label: { es: 'Tu Bot de IA', en: 'Your AI Bot' }, Icon: BotMessageSquare },
  { to: '/instructor', label: { es: 'Instructor', en: 'Instructor' }, Icon: GraduationCap },
  // El hash lleva directo a la sección de tarifas (id="precio"); Layout resuelve el scroll.
  { to: '/precio#precio', label: { es: 'Precio', en: 'Pricing' }, Icon: CreditCard },
  { to: '/preguntas', label: { es: 'Preguntas', en: 'FAQ' }, Icon: CircleHelp },
  { to: '/organizaciones', label: { es: 'Organizaciones', en: 'Organizations' }, Icon: Building2 },
];
