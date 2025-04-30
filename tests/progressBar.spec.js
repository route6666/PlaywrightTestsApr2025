const { test } = require('@playwright/test');
const { ProgressbarPage } = require('../models/progressbar-model'); // Adjust if needed

test('Wait for progress to hit 75%', async ({ page }) => {
  const progressPage = new ProgressbarPage(page);

  // Navigate to the progress bar page first
  await progressPage.navigateToProgressbarPage();

  // Start the progress bar
  await progressPage.clickStartButton();

  // Loop: check progress every 200ms until it hits 75
  const maxTries = 750;
  const delay = 20; // ms

  for (let i = 0; i < maxTries; i++) {
    const value = await progressPage.getProgressValue();
    console.log(`Progress: ${value}%`);

    if (value === '75') {
      console.log('Target reached, clicking stop. Test Passed');
      await progressPage.clickStopButton();
      break;
    }

    await page.waitForTimeout(delay);
  }
});
