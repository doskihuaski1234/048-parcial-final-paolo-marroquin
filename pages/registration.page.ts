import { Page } from '@playwright/test';

export class RegistrationPage {
  constructor(private readonly page: Page) {}

  get loginField() {
    return this.page.getByLabel(/^login$/i);
  }

  get firstNameField() {
    return this.page.getByLabel(/^first name$/i);
  }

  get lastNameField() {
    return this.page.getByLabel(/^last name$/i);
  }

  get passwordField() {
    return this.page.getByLabel(/^password$/i);
  }

  get confirmPasswordField() {
    return this.page.getByLabel(/^confirm password$/i);
  }
}
