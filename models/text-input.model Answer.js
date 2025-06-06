const { expect } = require(`@playwright/test`);
exports.TextInputPage = class TextInputPage {
    constructor(page) {
        this.page = page
        this.TextInputApp = page.goto('/textinput')
        this.inputBox = page.locator('#newButtonName')
        this.updatingButton = page.locator('#updatingButton')
    }    

    async navigateToTextInputPage() {
        await this.TextInputApp
    }

    async fillInputBox(text) {
        await this.inputBox.fill(text)
    }

    async clickUpdatingButton() {
        await this.updatingButton.click()
    }
    
    async expectTextInputToBe(text) {
        await expect(this.updatingButton).toHaveText(text)
    }
}