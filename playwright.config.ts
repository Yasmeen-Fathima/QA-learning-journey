import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration.
 * Docs: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  // Fail the build on CI if you accidentally left test.only in the source.
  forbidOnly: !!process.env.CI,

  // Retry on CI only — flaky tests are usually environmental.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel runs on CI for now (simpler logs in week 1).
  workers: process.env.CI ? 1 : undefined,

  // HTML reporter — opens automatically when a test fails locally.
  reporter: [['html', { open: 'never' }], ['list']],

  use: {
    // Base URL — tests can use page.goto('/') etc.
    baseURL: 'https://practicesoftwaretesting.com',

    // Trace + screenshot on failure for easier debugging.
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Firefox + WebKit are commented out for week 1 — fewer moving parts.
    // Uncomment in week 2 when you want cross-browser coverage.
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit',  use: { ...devices['Desktop Safari'] } },
  ],
});
