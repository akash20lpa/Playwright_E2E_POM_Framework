import { Page, expect } from '@playwright/test';
import { testdata, signupPageLocators, URL } from '../fixtures/utils/importManager';
import * as fs from 'fs';
import * as path from 'path';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

async readEmailFromFile(): Promise<string> {
  const filePath = path.join(process.cwd(), 'email.json');
  const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return fileData.email;
}

async verifyLogin() {

    await expect(this.page.locator(signupPageLocators.loginEmailInput)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.loginPasswordInput)).toBeVisible();
    console.log('Login fields are visible');
    const email = await this.readEmailFromFile();
    await this.page.fill(signupPageLocators.loginEmailInput, email);
    await this.page.fill(signupPageLocators.loginPasswordInput, testdata.signupFormData.password);
    await this.page.click(signupPageLocators.loginButton);
    console.log('Clicked on Login button');
}

async checkUserISLoggedIn(){

  await expect(this.page.getByText(' Logged in as ')).toBeVisible();

}

async clickonLogOut(){

  this.page.locator("a[href='/logout']").click();
  await expect(this.page.getByText('Signup / Login')).toBeVisible();
}

}