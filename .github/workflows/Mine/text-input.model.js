// const { test, expect } = require(`@playwright/test`);
// exports.TextInputPage = class TextInputPage {
//     constructor(page){
//         this.page = page
//         this.buttonField = page.getByPlaceholder('MyButton')
//         this.button = page.locator('#updatingButton')
//         this.Var1 = 'Hotdog'; // Define the variable once
//         this.Var2 = 'Onions'; // Define the variable once
        
//     }
//     // Webpage
//     async navigateToTextInputPage() {
//         await this.page.goto('/textinput') //go to text input page
//     }
//     // Enter Text into Field
//     async fillButtonField(text = this.Var1) {
//         await this.buttonField.fill(text)
//     }
//     // Click Button
//     async clickButton() {
//         await this.button.click()
//     }
//     // Confirm Button wording
//     async expectedButtonToBe(expectedText = this.Var1) {
//         await expect(this.button).toHaveText(expectedText);
//     }
// }