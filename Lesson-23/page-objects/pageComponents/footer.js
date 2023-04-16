class Footer {
    constructor(page) {
        this.page = page;
        this.downNavLinks = '.footer__link-item';

    }


    async goToPageWithDownNavMenu(linkNumber1) {
        await this.page.locator('.footer__link-item').nth(linkNumber1).click();
    }
}




module.exports = Footer;
