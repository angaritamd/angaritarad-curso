# AngaritaRad-AI — Curso Médicos Landing

React + Vite. Deploy a Vercel.

## Deploy

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Desde la carpeta del proyecto
vercel

# 3. Configurar variables de entorno en Vercel dashboard:
#    VITE_SUPABASE_URL
#    VITE_SUPABASE_ANON_KEY

# Variables para la Edge Function notify-admin-preregistration (Supabase):
#    RESEND_API_KEY            — API key de Resend para envío de emails
#    SUPABASE_SERVICE_ROLE_KEY — Service role key para insertar en tabla leads
```

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # llenar con tus vars reales
npm run dev
```

## Imágenes

Las imágenes viven en el CDN de Hostinger:
https://horizons-cdn.hostinger.com/1b0a5bfe-2477-4a6f-b6d0-9e4cdbc81f2c/

No se tocan. Se sirven directamente desde el CDN existente.

## Estructura

- `src/components/Header.jsx` — Nav + announcement bar
- `src/components/Hero.jsx` — Hero con screenshots CDN + agent card
- `src/components/NoPitch.jsx` — Dark band "No es un curso de videos"
- `src/components/PracticalDemo.jsx` — Demo interactivo + lightbox screenshots
- `src/components/Benefits.jsx` — Capability cards (stone bg)
- `src/components/Curriculum.jsx` — Accordion 8 módulos
- `src/components/Instructor.jsx` — Foto CDN + bio
- `src/components/Pricing.jsx` — 3 planes
- `src/components/Sidebar.jsx` — Sticky CTA sidebar
- `src/components/RegistrationModal.jsx` — Form → Supabase
- `src/components/Sections.jsx` — FAQ, TargetAudience, FinalCTA, Footer

## Design System

Basado en Cohere design (DESIGN.md). Paleta adaptada con brand red #ef4444.
