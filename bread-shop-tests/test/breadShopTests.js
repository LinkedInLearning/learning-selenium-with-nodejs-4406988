const { expect } = require("chai");
const { Builder } = require("selenium-webdriver");

describe('First suite', function() {
    this.timeout(5000);

    it('First test', async function() {
        let driver = await new Builder().forBrowser('chrome').build();
        expect(1).to.equal(1);

        await driver.quit();
    });
});
