// import { test, expect } from '@playwright/test';
// const { TextInputPage } = require (`../models/text-input.model`);

// test('Input A with Var1', async ({ page }) => {
//   const textInputPage = new TextInputPage(page);
//   await textInputPage.navigateToTextInputPage();
//   await textInputPage.fillButtonField(textInputPage.Var1);
//   await textInputPage.clickButton();
//   await textInputPage.expectedButtonToBe(textInputPage.Var1);
// });

// test('Input B with Var2', async ({ page }) => {
//   const textInputPage = new TextInputPage(page);

//   // Go to webpage
//   await textInputPage.navigateToTextInputPage();

//   // Enter text using Var2
//   await textInputPage.fillButtonField(textInputPage.Var2);

//   // Click the button
//   await textInputPage.clickButton();

//   // Confirm button text matches Var2
//   await textInputPage.expectedButtonToBe(textInputPage.Var2);
// });