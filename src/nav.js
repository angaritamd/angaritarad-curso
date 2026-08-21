import { House, BookOpen, Bot, GraduationCap, CreditCard, CircleHelp, Building2 } from 'lucide-react';

// Orden fijo del rail. Organizaciones siempre al final.
export const NAV_ITEMS = [
  { to: '/', label: 'Inicio', Icon: House, end: true },
  { to: '/temario', label: 'Temario', Icon: BookOpen },
  { to: '/agente', label: 'El agente en tu consulta', Icon: Bot },
  { to: '/instructor', label: 'Instructor', Icon: GraduationCap },
  { to: '/precio', label: 'Precio', Icon: CreditCard },
  { to: '/preguntas', label: 'Preguntas', Icon: CircleHelp },
  { to: '/organizaciones', label: 'Organizaciones', Icon: Building2 },
];
