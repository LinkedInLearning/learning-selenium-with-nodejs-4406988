const { By, Select } = require('selenium-webdriver');

class SandwichPage {
    constructor(driver) {
        this.driver = driver;
    }

    async validatePage() {
        let title = await this.driver.getTitle();

        if(title != "Order a Sandwich | BreadShop") {
            throw Error("You are on the wrong page.");
        }
    }
  
    selectRyeBreadOption() {
        return this.driver.findElement(By.id('bread-type-rye')).click();
    }

    getBreadTypeOverview() {
        return this.driver.findElement(By.className('bread-type-value')).getText();
    }

    async selectTofuFillingOption() {
        const selectElement = await this.driver.findElement(By.id('form-select-main-filling'));
        const select = new Select(selectElement);
        await select.selectByValue('tofu');
    }

    getMainFillingOverview() {
        return this.driver.findElement(By.className('main-filling-value')).getText();
    }

    getTotalPrice() {
        return this.driver.findElement(By.className('total-price')).getText();
    }

    selectExtraSaladFilling() {
        return this.driver.findElement(By.css('[value=salad]')).click();
    }

    selectExtraKetchupFilling() {
        return this.driver.findElement(By.css('[value=ketchup]')).click();
    }

    getExtraFillingOverview() {
        return this.driver.findElement(By.className('extra-filling-value')).getText();
    }
}

module.exports = { SandwichPage }
