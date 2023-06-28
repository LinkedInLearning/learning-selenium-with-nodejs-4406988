const { before, beforeEach, after } = require('mocha');
const { By, Builder, Select } = require('selenium-webdriver');
const expect = require('chai').expect;
const { SandwichPage } = require('../page_models/sandwichPage');

describe('sandwich order', function() {

    this.timeout(5000);
    let driver;
    let sandwichPage;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts({ implicit: 1000 });
    });
 
    beforeEach(async function() {
        //setup
        await driver.get('http://localhost:4200/order/sandwich');

        sandwichPage = new SandwichPage(driver);
        sandwichPage.validatePage();
    });

    after(async function() {
        //teardown
        await driver.quit();
    });
 
    describe('bread type selection', function() {
        it('displays the selected value', async function() {
            //act
            await sandwichPage.selectRyeBreadOption();
    
            //assert
            let selectedBreadValue = await sandwichPage.getBreadTypeOverview();
            expect(selectedBreadValue).to.equal("rye bread");
        });

        it('removes the placeholder text', async function() {
            //act
            await sandwichPage.selectRyeBreadOption();
    
            //assert
            let breadTypePlaceholders = await sandwichPage.getBreadTypePlaceholders();
            expect(breadTypePlaceholders).to.have.length(0);
        });
    });
    
    it('selects the main filling', async function() {
        //act
        await sandwichPage.selectTofuFillingOption();

        //assert
        let selectedMainFillingValue = await sandwichPage.getMainFillingOverview();
        expect(selectedMainFillingValue).to.equal("tofu");
    });

    it('updates the total price when the bread type is selected', async function() {
        //act
        expect(await sandwichPage.getTotalPrice()).to.equal("$0");
        
        await sandwichPage.selectRyeBreadOption();
        
        //assert
        expect(await sandwichPage.getTotalPrice()).to.equal("$6");
        
    });

    it("selects extra fillings", async function() {
        //act
        await sandwichPage.selectExtraSaladFilling();
        await sandwichPage.selectExtraKetchupFilling();

        //assert
        let selectedExtraFillingValue = await sandwichPage.getExtraFillingOverview();
        expect(selectedExtraFillingValue).to.equal("salad, ketchup");
    });
});
