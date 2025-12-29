import { test, expect } from '../support/fixtures';

test.describe('Example Test Suite', () => {
  // Skip this test in CI since there's no server running
  test.skip(({ }, testInfo) => !process.env.BASE_URL || process.env.CI === 'true', 'Requires running server');

  test('should load homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Quality/i); 
  });

  test('should create user', async ({ page, userFactory }) => {
    const user = await userFactory.createUser();
    console.log('Created test user:', user.email);
    expect(user.email).toBeTruthy();
  });
});
