const { test } = require('@playwright/test');
const { DynamicTablePage } = require('../models/dynamic-table.model');

test('CPU Values match', async ({ page }) => {
  const dynamicTablePage = new DynamicTablePage(page);

  await dynamicTablePage.goto();
  await page.screenshot({ path: 'Image1.png' });

  await dynamicTablePage.expectChromeCpuValueMatches();

  await page.screenshot({ path: 'Image2.png' });
});