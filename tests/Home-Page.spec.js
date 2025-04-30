const { test } = require('@playwright/test')
//Loads the Playwright Test Runner module
const { HomePage } = require (`../models/home-page.model`);
//Importing the HomePage class (or object) from a Page Object Model (POM) file

test('Navigate to HomePage', async ({ page}) => {
    const homePage = new HomePage(page)
    await homePage.navigateToHomePage()
    console.log(await homePage.getQuote());
    console.log(await homePage.getAllLinkTags())
    })