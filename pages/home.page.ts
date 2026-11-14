import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async open() {
    const response = await this.page.goto('/');

    expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
  }

  async goToRegistration() {
    await this.page.getByRole('link', { name: /^register$/i }).click();
  }
}
