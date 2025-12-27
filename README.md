🎭 Playwright Automation Framework (TypeScript)

This repository contains an end-to-end test automation framework built using Playwright with TypeScript, following industry best practices such as Page Object Model (POM), reusable utilities, CI/CD compatibility, and clean Git hygiene.

The framework is designed to be scalable, maintainable, and production-ready, suitable for real-world enterprise applications


####################################################################################

📌 Tech Stack

Automation Tool: Playwright

Language: TypeScript

Test Runner: Playwright Test

Assertions: Playwright Expect

Reporting: Playwright HTML Report

Version Control: Git

CI/CD Ready: Yes (Jenkins / GitHub Actions compatible)

####################################################################################


✅ Prerequisites

Ensure the following are installed:

Node.js (v18 or later recommended)
https://nodejs.org

Git

VS Code (recommended)

Verify installations:

node -v
npm -v
git --version

####################################################################################
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/Playwright_E2E_POM_Framework.git
cd Playwright_E2E_POM_Framework

2️⃣ Install Project Dependencies
npm install

3️⃣ Install Playwright Browsers
npx playwright install


(Optional – install with OS dependencies)

npx playwright install --with-deps

####################################################################################


▶️ Running Tests
Run All Tests (Headless)
npx playwright test

Run Tests in Headed Mode
npx playwright test --headed

Run Tests for a Specific Browser
npx playwright test --project=chromium


(Other supported browsers: firefox, webkit)

Run a Specific Test File
npx playwright test src/tests/signup.spec.ts

####################################################################################


📊 Test Reports

After test execution, open the HTML report:

npx playwright show-report


📌 Important Note:
Playwright generates test artifacts locally. These must not be committed to Git.

####################################################################################
