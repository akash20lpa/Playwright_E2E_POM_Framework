import { test } from "../src/fixtures/hooks/setup";
import {
  LoginPage,
  SignupPage,
  URL,
} from "../src/fixtures/utils/importManager";

test.beforeEach(async ({ signupPage }) => {
  await signupPage.navigateToHomePage();
});

test("Verify that the user should be able to signup new user", async ({
  page,
  signupPage,
}) => {
  await signupPage.verifyTitleForUrl();
  await signupPage.navigateToSignupPage();
  await signupPage.clickOnNewUserSignupText();
  await signupPage.fillNewUserSignUpForm();
  await signupPage.navigateToSignupPage();
  await signupPage.checkUserISLoggedIn();
  await signupPage.clickonLogOut();
});

test("Verify that the user should be able to Login with valid credntials", async ({
  page,
  signupPage,
  loginpage,
}) => {
  await signupPage.verifyTitleForUrl();
  await signupPage.navigateToSignupPage();
  await loginpage.verifyLogin();
});
