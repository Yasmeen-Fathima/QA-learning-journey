import { test, expect, Page } from '@playwright/test';
import {HomePage} from '../pages/HomePage'

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

  const homePage = new HomePage(page);
  await homePage.navigate();
  // Assertion 1: the page loaded with the expected title.
  await expect(page).toHaveTitle(/Practice Software Testing/i);
  const firstProduct = homePage.getfirstproduct();
  await expect(firstProduct).toBeVisible({ timeout: 15000 });
});

test('load hand tools page and display the product details', async ({ page }) => {
 const homePage = new HomePage(page); 
 await homePage.navigate();
 await homePage.clickCategory();
 await homePage.clickHandtools();
  await expect(page).toHaveTitle(/Hand Tools/);
});

test('verify sort dropdown descending', async ({ page }) => {
  const homePage = new HomePage(page); 
 await homePage.navigate();
 await homePage.clickCategory();
 await homePage.clickHandtools();
  await homePage.selectOptionDesc();
  const namecontents =await homePage.getEvaluatedArray();
  const sortedNames = [...namecontents].sort().reverse();
  expect(sortedNames).toEqual(namecontents);
});

test('verify sort dropdown ascending', async ({ page }) => {
 const homePage = new HomePage(page); 
 await homePage.navigate();
 await homePage.clickCategory();
 await homePage.clickHandtools();

 await homePage.selectOptionAsc();
 await homePage.waitForProductsToLoad();
 const namecontents =await homePage.getEvaluatedArray();

  const sortedNames = [...namecontents].sort();
  expect(sortedNames).toEqual(namecontents);
});

test('verify sort dropdown prize descending', async ({ page }) => {
  const homePage = new HomePage(page); 
 await homePage.navigate();
 await homePage.clickCategory();
 await homePage.clickHandtools();

 await homePage.selectOptionpriceDesc();
 await homePage.waitForProductsToLoadByPrice();
 
  const prices = await homePage.getsortedPrice();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
  const sortprices = [...numericPrices].sort((a, b) => b - a);
  expect(sortprices).toEqual(numericPrices);
});

test('verify sort dropdown prize ascending', async ({ page }) => {
    const homePage = new HomePage(page); 
 await homePage.navigate();
 await homePage.clickCategory();
 await homePage.clickHandtools();
await homePage.selectOptionpriceAsc();
await homePage.waitForProductsToLoadByPrice();

  
  const prices = await homePage.getsortedPrice();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
  const sortprices = [...numericPrices].sort((a, b) => a - b);
  expect(sortprices).toEqual(numericPrices);
});