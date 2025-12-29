import { test, expect } from '@playwright/test';

test.describe('Smoke Test Suite', () => {
  test('playwright is working', async ({ page }) => {
    // Simple test that doesn't require a running server
    await page.setContent('<html><head><title>Test Page</title></head><body><h1>Hello</h1></body></html>');
    await expect(page).toHaveTitle('Test Page');
    await expect(page.locator('h1')).toHaveText('Hello');
  });

  test('can navigate to example.com', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example Domain/);
  });
});
