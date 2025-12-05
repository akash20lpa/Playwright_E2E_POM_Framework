export const signupPageLocators = {
    signupLink: 'a[href="/login"]',
    newUserSignupText: '.signup-form h2',
    signupInputName: '[data-qa="signup-name"]',
    signupInputEmail: '[data-qa="signup-email"]',
    signupButton: '[data-qa="signup-button"]',
    signupNameInitial: '[id="id_gender1"]',
    signupPassword: '[id="password"]',
    signupDobDays: '[id="days"]',
    signupDobMonths: '[data-qa="months"]',
    signupDobYears: '[data-qa="years"]', 
    newsLetterCheckbox: '[id="newsletter"]',

    //address info
    signupAddressFirstName: '[data-qa="first_name"]',
    signupAddressLastName: '[data-qa="last_name"]',
    signupAddressCompany: '[data-qa="company"]',
    signupAddressAddress1: '[data-qa="address"]',
    signupAddressAddress2: '[data-qa="address2"]',
    signupAddressCountry: '[data-qa="country"]',
    signupAddressState: '[data-qa="state"]',
    signupAddressCity: '[data-qa="city"]',
    signupAddressZipcode: '[data-qa="zipcode"]',
    signupAddressMobileNumber: '[data-qa="mobile_number"]',
    createAccountButton: '[data-qa="create-account"]',

    //login locators
    loginEmailInput: '[data-qa="login-email"]',
    loginPasswordInput: '[data-qa="login-password"]',
    loginButton: '[data-qa="login-button"]',

    // Logout locator
    logoutLocator: 'a[href="/logout"]',


}