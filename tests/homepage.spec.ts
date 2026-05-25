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

async function navigateToHandTools(page: any) {
  await page.goto('/');
  await page.getByTestId('nav-categories').click();
  await page.getByText('Hand Tools').first().waitFor({ state: 'visible' });
  await page.getByText('Hand Tools').click();
}

test('homepage loads and displays the product catalog', async ({ page }) => {
  // baseURL is set in playwright.config.ts, so '/' goes to the homepage.
  await page.goto('/');

  // Assertion 1: the page loaded with the expected title.
  await expect(page).toHaveTitle(/Practice Software Testing/i);

  // Assertion 2: at least one product card is visible.
  // Product cards are <a> links whose href matches /product/<id>.
  // First-load can be slow on a free demo backend, so we give it room.
  const firstProduct = page.locator('a[href*="/product/"]').first();
  await expect(firstProduct).toBeVisible({ timeout: 15000 });
});

test('load hand tools page and display the product details', async ({ page }) => {
  await navigateToHandTools(page);
  await expect(page).toHaveTitle(/Hand Tools/);
});

test('verify sort dropdown descending', async ({ page }) => {
  await navigateToHandTools(page);

  await page.getByTestId('sort').selectOption('name,desc');

  await page.locator('[data-test="sorting_completed"] img.card-img-top').first().waitFor({ state: 'visible' });
  const namecontents = await page.locator('[data-test="sorting_completed"] img.card-img-top').evaluateAll(imgs => imgs.map(img => img.getAttribute('alt')));

  const sortedNames = [...namecontents].sort().reverse();
  expect(sortedNames).toEqual(namecontents);
});

test('verify sort dropdown ascending', async ({ page }) => {
  await navigateToHandTools(page);

  await page.getByTestId('sort').selectOption('name,asc');

  await page.locator('[data-test="sorting_completed"] img.card-img-top').first().waitFor({ state: 'visible' });
  const namecontents = await page.locator('[data-test="sorting_completed"] img.card-img-top').evaluateAll(imgs => imgs.map(img => img.getAttribute('alt')));

  const sortedNames = [...namecontents].sort();
  expect(sortedNames).toEqual(namecontents);
});

test('verify sort dropdown prize descending', async ({ page }) => {
  await navigateToHandTools(page);

  await page.getByTestId('sort').selectOption('price,desc');

  await page.locator('[data-test="sorting_completed"] [data-test="product-price"]').first().waitFor({ state: 'visible' });
  const prices = await page.locator('[data-test="sorting_completed"] [data-test="product-price"]').allTextContents();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
  const sortprices = [...numericPrices].sort((a, b) => b - a);
  expect(sortprices).toEqual(numericPrices);
});

test('verify sort dropdown prize ascending', async ({ page }) => {
  await navigateToHandTools(page);

  await page.getByTestId('sort').selectOption('price,asc');

  await page.locator('[data-test="sorting_completed"] [data-test="product-price"]').first().waitFor({ state: 'visible' });
  const prices = await page.locator('[data-test="sorting_completed"] [data-test="product-price"]').allTextContents();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
  const sortprices = [...numericPrices].sort((a, b) => a - b);
  expect(sortprices).toEqual(numericPrices);
});
