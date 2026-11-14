import { test, expect } from '@playwright/test';

test('TC-AUT-02 - El formulario acepta una contraseña de seis caracteres', async ({ page }) => {
  await page.goto('/register');

  const uniqueUser = `qa${Date.now()}`;
  const password = 'Abc@12';

  await page.locator('#username').fill(uniqueUser);
  await page.locator('#firstName').fill('QA');
  await page.locator('#lastName').fill('Tester');
  await page.locator('#password').fill(password);
  await page.locator('#confirmPassword').fill(password);

  await expect(
    page.getByRole('button', { name: /^register$/i })
  ).toBeEnabled();
});
