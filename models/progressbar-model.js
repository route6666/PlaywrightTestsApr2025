const { expect, test } = require(`@playwright/test`);
exports.ProgressbarPage = class ProgressbarPage {
  constructor(page) {
    this.page = page;
    this.startButton = page.locator('#startButton');
    this.stopButton = page.locator('#stopButton');
    this.progressBar = page.locator('#progressBar');
  }

  async navigateToProgressbarPage() {
    await this.page.goto('/progressbar');
  }

  async clickStartButton() {
    await this.startButton.click();
  }

  async clickStopButton() {
    await this.stopButton.click();
  }

  async getProgressValue() {
    return await this.progressBar.getAttribute('aria-valuenow');
  }
};