import { Page, expect } from '@playwright/test';
import { step } from '../fixtures/hooks/setup';
import { testdata, signupPageLocators, URL } from '../fixtures/utils/importManager';
import test from 'node:test';

let randomEmail: string;


export class SignupPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyTitleForUrl() {
    console.log('Verifying the title for the URL');
    const title = await this.page.title();
    console.log('Page title:', title);
    //await expect(this.page).toHaveTitle(testdata.globalTestData.title); 
    expect(title).toContain(testdata.globalTestData.title);
  }

  async navigateToHomePage() {
    await this.page.goto(URL);
    await this.page.waitForLoadState('load');
    console.log('Navigated to Home Page');

  }

  async navigateToSignupPage() {
    const title = await this.page.title();
    expect(title).toContain(testdata.globalTestData.title);
    await expect(this.page.locator(signupPageLocators.signupLink)).toBeVisible();
    await this.page.click(signupPageLocators.signupLink);
    console.log('Navigated to Signup Page');
  }

  async clickOnNewUserSignupText() {
    await expect(this.page.locator(signupPageLocators.newUserSignupText)).toBeVisible();
    console.log('New User Signup text is visible');
    const newUserSignupText = await this.page.locator(signupPageLocators.newUserSignupText).textContent();
    expect(newUserSignupText).toBe(testdata.globalTestData.newUserSignupText);
  }

  async generateRandomEmail() {
    randomEmail = `user${Date.now()}@example.com`;
    console.log('Generated random email:', randomEmail);
    return randomEmail;
  }

  async fillNewUserSignUpForm() {
    
    await this.page.fill(signupPageLocators.signupInputName, testdata.globalTestData.newUserName);
    const randomEmail = this.generateRandomEmail();
    await this.page.fill(signupPageLocators.signupInputEmail, await randomEmail);
    await this.page.click(signupPageLocators.signupButton);

    //verify all fields are visible
    console.log('Filled the signup form with name and email');
    const signupTitle = await this.page.title();
    console.log('Page title:', signupTitle);
    await expect(this.page).toHaveTitle(testdata.globalTestData.signupTitle);
    await expect(this.page.locator(signupPageLocators.signupNameInitial)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupPassword)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupDobDays)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupDobMonths)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupDobYears)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.newsLetterCheckbox)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupAddressFirstName)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupAddressLastName)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupAddressCompany)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupAddressAddress1)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupAddressAddress2)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupAddressCountry)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupAddressState)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupAddressCity)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupAddressZipcode)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.signupAddressMobileNumber)).toBeVisible();
    console.log('All signup form fields are visible');

    //fill all fields
    await this.page.check(signupPageLocators.signupNameInitial);
    await this.page.fill(signupPageLocators.signupPassword, testdata.signupFormData.password);
    await this.page.selectOption(signupPageLocators.signupDobDays, testdata.signupFormData.days);
    await this.page.selectOption(signupPageLocators.signupDobMonths, { label: testdata.signupFormData.months });
    await this.page.selectOption(signupPageLocators.signupDobYears, { label: testdata.signupFormData.years });
    await this.page.check(signupPageLocators.newsLetterCheckbox);
    console.log('Filled account information');  
    await this.page.fill(signupPageLocators.signupAddressFirstName, testdata.signupFormData.firstName);
    await this.page.fill(signupPageLocators.signupAddressLastName, testdata.signupFormData.lastName);
    await this.page.fill(signupPageLocators.signupAddressCompany, testdata.signupFormData.company);
    await this.page.fill(signupPageLocators.signupAddressAddress1, testdata.signupFormData.address1);
    await this.page.fill(signupPageLocators.signupAddressAddress2, testdata.signupFormData.address2);
    await this.page.selectOption(signupPageLocators.signupAddressCountry, { label: testdata.signupFormData.country });
    await this.page.fill(signupPageLocators.signupAddressState, testdata.signupFormData.state);
    await this.page.fill(signupPageLocators.signupAddressCity,  testdata.signupFormData.city);
    await this.page.fill(signupPageLocators.signupAddressZipcode, testdata.signupFormData.zipcode);
    await this.page.fill(signupPageLocators.signupAddressMobileNumber, testdata.signupFormData.mobileNumber);
    console.log('Filled address information');
    await this.page.click(signupPageLocators.createAccountButton);
    console.log('Clicked on Create Account button');
    this.page.pause();

}

async checkUserISLoggedIn(){

  

}

async verifyLogin() {

    await expect(this.page.locator(signupPageLocators.loginEmailInput)).toBeVisible();
    await expect(this.page.locator(signupPageLocators.loginPasswordInput)).toBeVisible();
    console.log('Login fields are visible');
    await this.page.fill(signupPageLocators.loginEmailInput, await randomEmail);
    await this.page.fill(signupPageLocators.loginPasswordInput, testdata.signupFormData.password);
    await this.page.click(signupPageLocators.loginButton);
    console.log('Clicked on Login button');
}



  


}


