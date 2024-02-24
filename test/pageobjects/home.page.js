const { $, expect } = require('@wdio/globals')
const Page = require('./page');


class HomePage extends Page {
    get listProducts() { return $('.inventory_list'); }

    async validdateHomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(this.listProducts).toBeDisplayed()
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();
