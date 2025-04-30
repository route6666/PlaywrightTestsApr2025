const { test, expect } = require('@playwright/test');
const { ClassAttributePage } = require('../models/class-attribute.model') ;
//bring this class in from this dom, classname must match from dom
// ClassAttributePage is a class (or a named export) that you've exported from the file class-attribute.model.js

test('Click Blue Button', async ({ page }) => {
  const classAttributePage = new ClassAttributePage(page);
  //create a new const object name, new _______ must match the class name from the dom, check it matches above import
  await classAttributePage.navigateToClassAttributePage();
  await page.screenshot({ path: 'before-alert.png' });


  page.on('dialog', async dialog => {
  // Set up the dialog listener before clicking the button
  expect(dialog.message()).toBe("Primary button pressed"); // Verify dialog message - Fail if it doesn't match
    console.log("Alert text is correct."); //This will add an attachment comment to the report
    await dialog.accept();  // Accept (close) the alert
    await page.screenshot({ path: 'after-alert.png' });
  });

  await classAttributePage.clickBlueButton();
  await page.waitForTimeout(1000);
  await page.reload()
  await page.waitForTimeout(5000); // Optional: wait a bit if necessary
  await page.screenshot({ path: 'after-refresh.png' });
    
});