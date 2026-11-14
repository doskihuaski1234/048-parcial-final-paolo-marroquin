import { test, expect } from '@playwright/test';

test('TC-AUT-03 - El sistema solicita iniciar sesión para votar', async ({ page }) => {
  await page.goto('/');

  // Acceder a Overall Rating desde la tarjeta de inicio.
  await page.locator('a[href="/overall"]').click();

  // Abrir la ficha del primer automóvil listado.
  const firstCarLink = page.locator('a[href^="/model/"]').first();

  await expect(firstCarLink).toBeVisible();
  await firstCarLink.click();

  // Comprobar que el usuario no autenticado no puede votar.
  await expect(
    page.getByText('You need to be logged in to vote.', { exact: true })
  ).toBeVisible();
});
