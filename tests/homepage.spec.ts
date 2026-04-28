import { test, expect } from '@playwright/test';

/**
 * Week 1: One test, one page.
 *
 * Target site: Practice Software Testing — Toolshop
 * https://practicesoftwaretesting.com
 *
 * Why this site: it's a realistic e-commerce demo built specifically
 * for automation practice. It uses `data-test` attributes for stable
 * selectors and has a public REST API we can use later in Phase 2.
 */
test('homepage loads and displays the product catalog', async ({ page }) => {
  // baseURL is set in playwright.config.ts, so '/' goes to the homepage.
  await page.goto('/');

  // Assertion 1: the page loaded with the expected title.
  await expect(page).toHaveTitle(/Practice Software Testing/i);

  // Assertion 2: at least one product card is visible.
  // Toolshop tags product cards with data-test="product".
  // First-load can be slow on a free demo backend, so we give it room.
  const firstProduct = page.locator('[data-test="product"]').first();
  await expect(firstProduct).toBeVisible({ timeout: 15000 });
});
