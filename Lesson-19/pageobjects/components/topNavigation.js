const BasePage = require('../basePage');

class TopNavigation extends BasePage {
    mainMenuTab(tabName) {
        return $(`//*[text()='${tabName}']//ancestor::*[contains(@class,'navbar__item navbar__link')]`);
    }

    mainMenuItem(itemName) {
        return $(`//*[text()='${itemName}']//ancestor::a[@class='menu__link menu__link--sublist']`);
    }

    subMainMenuItem(subMenu) {
        return $(`//*[text()='${subMenu}']//ancestor::a[@class='menu__link']`);
    }

    async goToPage(tabName, itemName) {
        await this.mainMenuTab(tabName).waitForDisplayed();
        await this.mainMenuTab(tabName).click();
        await this.mainMenuItem(itemName).waitForDisplayed();
        await this.mainMenuItem(itemName).click();

    }

    async menuNavigate(tabName) {
        await this.mainMenuTab(tabName).waitForDisplayed();
        await this.mainMenuTab(tabName).click();

    }

    async goToSubPage(tabName, itemName, subMenu) {
        await this.mainMenuTab(tabName).waitForDisplayed();
        await this.mainMenuTab(tabName).click();
        await this.mainMenuItem(itemName).waitForDisplayed();
        await this.mainMenuItem(itemName).click();
        await this.subMainMenuItem(subMenu).waitForDisplayed();
        await this.subMainMenuItem(subMenu).click();
    }
}

module.exports = new TopNavigation();