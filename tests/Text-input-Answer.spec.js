const { test } = require('@playwright/test')
const { TextInputPage } = require (`../models/text-input.model Answer`);

test ('test updating button', async ({ page }) => {
  const textInputPage = new TextInputPage(page)
  await textInputPage.navigateToTextInputPage()
  await textInputPage.fillInputBox("The Best Button")
  await textInputPage.clickUpdatingButton();
  await textInputPage.expectTextInputToBe("The Best Button");
})