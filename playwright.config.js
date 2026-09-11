import { defineConfig, devices } from '@playwright/test';

// Puerto por defecto de `vite preview`. Se fija con --strictPort para que el
// server nunca migre a otro puerto y baseURL quede desalineado.
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',

  use: {
    baseURL: BASE_URL,
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // Un solo navegador para empezar.
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],

  webServer: {
    // `vite preview` sirve dist/, así que hay que construir antes; si no,
    // falla con "The directory dist does not exist".
    // Supabase dummy en el MISMO origin del preview: el fetch corre sin CORS y los
    // page.route() de los tests controlen la respuesta (éxito y fallo).
    command: `VITE_SUPABASE_URL=http://localhost:4173 VITE_SUPABASE_ANON_KEY=test-anon-key npm run build && npm run preview -- --port ${PORT} --strictPort`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
