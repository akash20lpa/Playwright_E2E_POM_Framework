# Copilot instructions for PlaywrightE2E

These instructions help AI coding agents be productive in this Playwright TypeScript E2E project.

High-level architecture (what to know)
- Tests live in `tests/` and are Playwright tests (see `playwright.config.ts`). The test harness is extended in `src/fixtures/hooks/setup.ts` which exports a `test` fixture and `expect`.
- Page objects (POM) live in `src/pages/` (e.g. `SignupPage`). Locators are centralized in `src/locators/locators.ts`.
- Shared exports are re-exported via `src/fixtures/utils/importManager.ts` (POMs, `URL` from `env`, `testdata`, and locators). Prefer using `importManager` in tests and fixtures.
- Test data lives in `src/fixtures/utils/testData.ts`. Environment config is in `src/fixtures/utils/env.ts` and reads `process.env.URL` (defaults to `https://automationexercise.com/`).

Developer workflows and commands (explicit)
- Run the suite locally: use Playwright CLI because `package.json` does not define `test` script. Example: `npx playwright test` (or `npx playwright test tests/signup.spec.ts` to run a single file).
- Generate an HTML report: Playwright produces `playwright-report/` automatically (reporter configured in `playwright.config.ts`). The project already contains previous `playwright-report/` artifacts.
- Debugging: POMs contain `this.page.pause()` in places — tests may intentionally pause for interactive debugging. The Playwright inspector is expected.

Project-specific conventions and patterns
- Fixtures: `src/fixtures/hooks/setup.ts` extends Playwright `test` to add `signupPage` fixture (constructed with `new SignupPage(page)`). Tests import `test` from this file: `import { test } from '../src/fixtures/hooks/setup'`.
- POM signatures: Page classes accept `Page` in constructor and expose async methods (e.g. `verifyTitleForUrl()`, `fillNewUserSignUpForm()`). Use the POM from fixtures: tests receive `signupPage` fixture and call methods directly.
- Locators: All selectors are exported from `src/locators/locators.ts` as `signupPageLocators`. Use `page.locator(signupPageLocators.someSelector)` consistently.
- Test data: Use `testdata.globalTestData` and `testdata.signupFormData` for strings and form values rather than hardcoding values in tests.

Integration points and environment
- `URL` comes from `src/fixtures/utils/env.ts` and can be overridden by setting the `URL` environment variable before running tests.
- Artifacts (screenshots, video, traces) are configured in `playwright.config.ts` (screenshot: `only-on-failure`, video: `retain-on-failure`, trace: `on-first-retry`).

Concrete examples (copy-paste friendly)
- Use the fixture-provided page object in a test:
  - `import { test } from '../src/fixtures/hooks/setup';`
  - `test('...', async ({ signupPage }) => { await signupPage.navigateToHomePage(); await signupPage.fillNewUserSignUpForm(); });`
- Refer to locators: `await expect(page.locator(signupPageLocators.signupButton)).toBeVisible();`
- Override URL: `URL=https://staging.example.com npx playwright test`

Known quirks and actionable notes for agents
- Case-sensitivity: `importManager.ts` re-exports `SignupPage` from `../../pages/SignupPage` but the repo has `src/pages/signupPage.ts` (lowercase). On Windows this works, but it will break on case-sensitive filesystems (CI). Do not rename files automatically — flag this to the developer and propose consistent casing changes.
- `package.json` has no test script. Prefer guiding the user to run `npx playwright test` rather than adding scripts without confirmation.
- Avoid changing global Playwright settings unless the change is trivial (headless vs headed) and explicitly requested.

When editing code, prefer minimal, localized changes. Reference exact files above in suggestions and include one-line rationale for each change (e.g., fix casing for cross-platform CI).

If anything is missing or you'd like a different focus (CI, Docker, or adding test scripts), tell me what to add and I'll update this file.
