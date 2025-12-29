import { test, expect } from '../support/fixtures';

test.describe('Example Test Suite', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/');
    // Adjust selector based on actual app
    await expect(page).toHaveTitle(/Quality/i); 
  });

  test('should create user', async ({ page, userFactory }) => {
    // Create test user via factory
    const user = await userFactory.createUser();
    console.log('Created test user:', user.email);

    // Placeholder for login flow
    // await page.goto('/login');
    // await page.getByRole('textbox', { name: /email/i }).fill(user.email);
    // ...
    
    expect(user.email).toBeTruthy();
  });
});
