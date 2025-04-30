import { test, expect } from '@playwright/test';

test('Log in success', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Sample App' }).click();
  await page.getByPlaceholder('User Name').fill('Hugh');
  await page.getByPlaceholder('********').fill('pwd');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.locator('#loginstatus')).toContainText('Welcome, Hugh!');
});

test('Wrong username', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Sample App' }).click();
  await page.getByPlaceholder('User Name').fill('');
  await page.getByPlaceholder('********').fill('pwd');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByText('Invalid username/password')).toBeVisible();
});

test('Wrong Password', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Sample App' }).click();
  await page.getByPlaceholder('User Name').fill('Hugh');
  await page.getByPlaceholder('********').fill('p');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByText('Invalid username/password')).toBeVisible();
});

test('Log out', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Sample App' }).click();
  await page.getByPlaceholder('User Name').fill('Hugh');
  await page.getByPlaceholder('********').fill('pwd');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.locator('#loginstatus')).toContainText('Welcome, Hugh!');
  await page.getByRole('button', { name: 'Log Out' }).click();
  await expect(page.locator('#loginstatus')).toContainText('User logged out.');
});