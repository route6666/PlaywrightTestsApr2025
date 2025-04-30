const { expect } = require(`@playwright/test`);
exports.ScrollbarsPage = class ScrollbarsPage {
    constructor(page) {
        this.page = page;
        this.scrollbarUrl = page.goto("/scrollbars")
        this.hidingButton = page.locator("#hidingButton")
    }
    async navigateToScrollbarPage() {
        await this.scrollbarUrl
    }

    async clickHidingButton() {
        await this.hidingButton.click()
    }
};