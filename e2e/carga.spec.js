import { test, expect } from '@playwright/test';

// La app es una SPA con react-router: las secciones clave no viven todas en la
// misma URL. Hero está en "/", el temario en "/contenido", el precio en
// "/precio" y el formulario de registro es un modal accesible desde el header.

test.describe('Carga de la página principal', () => {
  test('el home carga con el Hero visible', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/AngaritaRad-AI/);

    // Hero: titular principal + CTA + subtítulo.
    await expect(
      page.getByRole('heading', { level: 1, name: /Aprende a usar IA/i })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /Quiero aplicar IA en mi consulta/i })
    ).toBeVisible();
    await expect(
      page.getByText(/Un curso práctico para médicos y especialistas/i)
    ).toBeVisible();
  });

  test('la sección de Contenido (Curriculum) es visible', async ({ page }) => {
    await page.goto('/');

    // Navegación real desde el Hero, no goto directo: valida también el enlace.
    await page.getByRole('link', { name: /Ver el contenido/i }).first().click();
    await expect(page).toHaveURL(/\/contenido$/);

    await expect(
      page.getByRole('heading', { name: /Aprende lo que necesitas/i })
    ).toBeVisible();
    await expect(page.getByText('Fundamentos', { exact: true })).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /Ten tu agente respondiendo en tu WhatsApp/i })
    ).toBeVisible();
  });

  test('la sección de Precio (Pricing) es visible', async ({ page }) => {
    await page.goto('/precio');

    await expect(
      page.getByRole('heading', { name: /Inversión en tu desarrollo/i })
    ).toBeVisible();
    // Reprecio 2026-09-13: el "Descuento por Simposio" ya no existe; lo que
    // identifica la sección hoy es el value stack y los precios vigentes.
    await expect(page.getByText('Tu inscripción incluye')).toBeVisible();
    await expect(page.getByText('$450.000')).toBeVisible();
    await expect(page.getByText('$238.000')).toBeVisible();
    await expect(
      page.getByRole('button', { name: /Pagar ahora/i })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /Inscribirse ahora/i })
    ).toBeVisible();
  });

  test('el toggle EN muestra el precio en USD con TRM de referencia', async ({ page }) => {
    await page.goto('/precio');

    await page.getByRole('group', { name: 'Idioma / Language' }).getByRole('button', { name: 'EN' }).click();
    await expect(page.getByText('$136.36')).toBeVisible();
    await expect(page.getByText('$72.12')).toBeVisible();
    await expect(page.getByText(/1 USD ≈ 3,300 COP/).first()).toBeVisible();

    // Volver a ES restaura el COP (y el default de otros tests no se contamina
    // porque cada test corre con storage limpio).
    await page.getByRole('group', { name: 'Idioma / Language' }).getByRole('button', { name: 'ES' }).click();
    await expect(page.getByText('$450.000')).toBeVisible();
  });

  test('el formulario de registro se abre desde el header', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Solicitar acceso' }).click();

    await expect(
      page.getByRole('heading', { name: /Reserva tu cupo/i })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /Quiero pre-registrarme/i })
    ).toBeVisible();
  });
});
