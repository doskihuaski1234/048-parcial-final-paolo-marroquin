

import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async login(username: string, password: string) {
    await this.page.getByLabel(/^login$/i).fill(username);
    await this.page.getByLabel(/^password$/i).fill(password);
    await this.page.getByRole('button', { name: /^login$/i }).click();
  }

  get loginButton() {
    return this.page.getByRole('button', { name: /^login$/i });
  }

  get logoutLink() {
    return this.page.getByRole('link', { name: /logout/i });
  }
}
