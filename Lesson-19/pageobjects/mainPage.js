const BasePage = require('./basePage')

class MainPage extends BasePage {
    constructor() {
        super();
        this.whyWebdriverIOButton = ('//*[text()="Why WebdriverIO?"]//ancestor::*[contains(@class,"button button--outline button--secondary button--lg getStarted_Sjon")]');
    }

    get viewOnGitHub() {
        return $('//*[text()="View on GitHub"]//ancestor::*[contains(@class,"button button--outline button--secondary button--lg getStarted_Sjon")]');
    }

    async clickOnLinkGitHub() {
        await this.viewOnGitHub.waitForDisplayed();
        await this.viewOnGitHub.click();

    }

}


module.exports = new MainPage();

