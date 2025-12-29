// playwright.config.js
// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Folder where your test files are located
  timeout: 40 * 1000, // Maximum time for each test (30 seconds)
  expect: {
    timeout: 5000 // Timeout for expect() checks
  },
  use: {
    headless: false, // Show browser UI (set true for CI or faster runs)
    screenshot: 'only-on-failure', // Capture screenshots if test fails
    video: 'retain-on-failure', // Record video if test fails
    trace: 'on-first-retry', // Collect trace only on first retry
  },
  reporter: [['html', { open: 'never' }]], // Generate HTML report
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /*{
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },*/
  ],
});
