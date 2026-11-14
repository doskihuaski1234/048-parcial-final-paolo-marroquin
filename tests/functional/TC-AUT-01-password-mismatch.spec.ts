import { test, expect } from '@playwright/test';

test('TC-AUT-01 - El registro impide contraseñas diferentes', async ({ page }) => {
  await page.goto('/register');

  await page.locator('#username').fill('qa_mismatch_2026');
  await page.locator('#firstName').fill('QA');
  await page.locator('#lastName').fill('Tester');
  await page.locator('#password').fill('Abc@123');
  await page.locator('#confirmPassword').fill('Xyz@456');

  const registerButton = page.getByRole('button', {
    name: /^register$/i
  });

  await expect(registerButton).toBeDisabled();
  await expect(page.getByText('Passwords do not match')).toBeVisible();
});
