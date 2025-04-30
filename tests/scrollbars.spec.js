const { test } = require('@playwright/test');
const { ScrollbarsPage } = require('../models/scrollbars-model');

test ('Clicking the hidden Button', async ({page}) => {
    await page.pause();
    const scrollbarPage = new ScrollbarsPage(page);
    await scrollbarPage.navigateToScrollbarPage();
    await scrollbarPage.clickHidingButton();
});