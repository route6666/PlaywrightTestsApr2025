const { expect } = require('@playwright/test');

exports.DynamicTablePage = class DynamicTablePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.chromeCpuText = page.locator('.bg-warning');
    this.tableHeaders = page.locator('div[role="row"] span[role="columnheader"]');
    this.tableRows = page.locator('div[role="rowgroup"] div[role="row"]');
  }

  async goto() {
    await this.page.goto('/dynamictable');
  }

  async getChromeCpuValue() {
    const fullText = await this.chromeCpuText.textContent();
    const match = fullText.match(/Chrome CPU: (\d+(\.\d+)?)%/);
    if (!match) throw new Error('Could not extract CPU value from text');
    return match[1]; // e.g., "6.8"
  }

  async getCpuColumnIndex() {
    const headers = await this.tableHeaders.allTextContents();
    const cpuIndex = headers.findIndex(header => header.trim() === 'CPU');
    if (cpuIndex === -1) throw new Error('CPU column not found');
    return cpuIndex;
  }

  async getChromeRow() {
    const rows = await this.tableRows.elementHandles();
    for (const row of rows) {
      const cells = await row.$$('span[role="cell"]');
      const cellTexts = await Promise.all(cells.map(cell => cell.textContent()));
      if (cellTexts.length === 0 || !cellTexts[0]) continue;
      if (cellTexts[0].trim() === 'Chrome') {
        return cellTexts;
      }
    }
    throw new Error('Chrome row not found');
  }
  

  async expectChromeCpuValueMatches() {
    const expectedValue = await this.getChromeCpuValue();
    const cpuIndex = await this.getCpuColumnIndex();
    const chromeRow = await this.getChromeRow();
    const actualValue = chromeRow[cpuIndex].trim().replace('%', '');
    expect(actualValue).toBe(expectedValue);
  }
  
};