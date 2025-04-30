const { expect } = require(`@playwright/test`);
exports.ClassAttributePage = class ClassAttributePage {
    // must match
    constructor(page){
        this.page = page
        this.ClassAttributeUrl = page.goto("/classattr")
        this.BlueButton = page.locator(".btn-primary")
}
async navigateToClassAttributePage() {
    await this.ClassAttributeUrl //go to page
}
async clickBlueButton() {
    await this.BlueButton.click()
}
}