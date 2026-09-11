import { test, expect } from '@playwright/test';

// Solo comportamiento visible del formulario de registro (frontend).
// No se verifica nada de Supabase: la petición se intercepta para que el test
// no dependa de la red ni escriba en una base real.

test.beforeEach(async ({ page }) => {
  // Si el build trae credenciales de Supabase, el POST se responde en local.
  await page.route('**/rest/v1/registrations*', (route) =>
    route.fulfill({ status: 201, body: '' })
  );
  await page.goto('/');
  await page.getByRole('button', { name: 'Solicitar acceso' }).click();
});

const abrirCampos = (page) => ({
  nombre: page.getByPlaceholder('Dr. Juan García'),
  email: page.getByPlaceholder('juan@clinica.com'),
  especialidad: page.getByPlaceholder(/Medicina General/i),
  whatsapp: page.getByPlaceholder('+57 300 000 0000'),
});

test('el formulario aparece con todos sus campos', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: /Reserva tu cupo/i })
  ).toBeVisible();

  const campos = abrirCampos(page);
  for (const campo of Object.values(campos)) {
    await expect(campo).toBeVisible();
  }

  await expect(page.getByText('Nombre completo')).toBeVisible();
  await expect(page.getByText('Correo electrónico')).toBeVisible();
  await expect(page.getByText(/WhatsApp \(con código de país\)/)).toBeVisible();
});

test('los campos se pueden llenar', async ({ page }) => {
  const campos = abrirCampos(page);

  await campos.nombre.fill('Dra. Ana Pérez');
  await campos.email.fill('ana.perez@clinica.com');
  await campos.especialidad.fill('Medicina Interna');
  await campos.whatsapp.fill('+57 300 123 4567');

  await expect(campos.nombre).toHaveValue('Dra. Ana Pérez');
  await expect(campos.email).toHaveValue('ana.perez@clinica.com');
  await expect(campos.especialidad).toHaveValue('Medicina Interna');
  await expect(campos.whatsapp).toHaveValue('+57 300 123 4567');
});

test('al enviar muestra el mensaje de éxito', async ({ page }) => {
  const campos = abrirCampos(page);

  await campos.nombre.fill('Dra. Ana Pérez');
  await campos.email.fill('ana.perez@clinica.com');
  await campos.especialidad.fill('Medicina Interna');
  await campos.whatsapp.fill('+57 300 123 4567');

  await page.getByRole('button', { name: /Quiero pre-registrarme/i }).click();

  await expect(
    page.getByRole('heading', { name: /¡Listo, quedaste pre-registrado!/i })
  ).toBeVisible();
  await expect(page.getByText(/Tu lugar está reservado/i)).toBeVisible();

  // El formulario ya no está en pantalla.
  await expect(campos.nombre).toBeHidden();
});

test('sin los campos obligatorios no se envía', async ({ page }) => {
  await page.getByRole('button', { name: /Quiero pre-registrarme/i }).click();

  // La validación nativa del navegador frena el submit: sigue el formulario.
  await expect(page.getByPlaceholder('Dr. Juan García')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: /¡Listo, quedaste pre-registrado!/i })
  ).toBeHidden();
});

test('si el guardado falla muestra error y no un falso éxito', async ({ page }) => {
  // Sobrescribe el mock del beforeEach para simular un fallo de Supabase.
  await page.route('**/rest/v1/registrations*', (route) =>
    route.fulfill({ status: 500, body: '' })
  );

  const campos = abrirCampos(page);
  await campos.nombre.fill('Dra. Ana Pérez');
  await campos.email.fill('ana.perez@clinica.com');
  await campos.whatsapp.fill('+57 300 123 4567');

  await page.getByRole('button', { name: /Quiero pre-registrarme/i }).click();

  await expect(page.getByText(/Hubo un problema al guardar tu registro/i)).toBeVisible();
  await expect(
    page.getByRole('heading', { name: /¡Listo, quedaste pre-registrado!/i })
  ).toBeHidden();
  // El formulario sigue en pantalla para reintentar.
  await expect(campos.nombre).toBeVisible();
});
