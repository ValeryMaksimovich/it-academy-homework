const BasePage = require('../basePage');

class searchField extends BasePage {
    get searchBox() {
        return $('.searchBox_ZlJk');
    }

    get docSearch() {
        return $('.DocSearch-Input');
    }
    get searchContent() {
        return $$('.DocSearch-Hit-content-wrapper');
    }

    get searchResult() {
        return $('h1*=WebdriverIO for Enterprise');
    }


    async searchInSearchField() {
        await this.searchBox.waitForDisplayed();
        await this.searchBox.click();
        await this.docSearch.setValue('WebdriverIO');
        await browser.pause(3000);
        await this.searchContent[0].waitForClickable();
        await this.searchContent[0].click();
        await this.searchResult.waitForDisplayed();
        await expect(await $('h1*=WebdriverIO for Enterprise').getText()).toContain('WebdriverIO');

    }
}

module.exports = new searchField();