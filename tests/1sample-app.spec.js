const { test, } = require('@playwright/test'); 
const { SampleAppPage } = require (`../models/sample-app.model`);

//test.describe.parallel('suite', () => {
test.describe.parallel('Negative Login Tests', () => {

test('Wrong password test', async ({ page }) => {
// A) Defines the name of the test B) asynchronous callback function contains the test logic
    const sampleAppPage = new SampleAppPage(page)
    //Name of POM Class and passes Page object to its constructor
    //By creating an instance of SampleAppPage, you're able to interact with the page using the methods defined within that class.
    await sampleAppPage.navigateToSampleApp()
    // Await is a promise to resolve before continuing, so it will only move on once it has navigated to the defined page
    await sampleAppPage.fillUsernameField("Hugh")
    await sampleAppPage.fillPasswordField("w")
    await sampleAppPage.clickLoginButton()
    await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
  });
  
  test('No username test', async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page)
    await sampleAppPage.navigateToSampleApp()
    await sampleAppPage.fillUsernameField("")
    await sampleAppPage.fillPasswordField("pwd")
    await sampleAppPage.clickLoginButton()
    await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
  });
});

  //added this
  test.describe.parallel('Positive Login & Logout Tests', () => {

  test('Log in success', async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page)
    await sampleAppPage.navigateToSampleApp()
    await sampleAppPage.fillUsernameField("Hugh")
    await sampleAppPage.fillPasswordField("pwd")
    await sampleAppPage.clickLoginButton()
    await sampleAppPage.expectedLoginTextToBe("Welcome, Hugh!")
  });

  test('Log out test', async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page)
    await sampleAppPage.navigateToSampleApp()
    await sampleAppPage.fillUsernameField("Hugh")
    await sampleAppPage.fillPasswordField("pwd")
    await sampleAppPage.clickLoginButton()
    await sampleAppPage.expectedLoginTextToBe("Welcome, Hugh!")
    await sampleAppPage.clickLogoutButton()
    await sampleAppPage.expectedLoginTextToBe("User logged out.");
  });
});