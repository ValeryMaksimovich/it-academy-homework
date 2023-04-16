class Header {
    constructor(page) {
        this.page = page;
        this.topNavLinks = '.navbar__item.navbar__link';
        this.topNavSubLinks = async () => {
            return '.toggle_vylO.colorModeToggle_DEke'
        };
        this.searchField = async () => {
            return '.searchBox_ZlJk'
        };
        this.docSearch = async () => {
            return '.DocSearch-Input'
        };
        this.searchContent = async () => {
            return '.docsearch-item-1'
        };
    }


    async goToPageWithTopNavMenu(linkNumber) {
        await this.page.locator('.navbar__item.navbar__link').nth(linkNumber).click();
    }

    async switchBetweenLightToDark() {
        await this.page.locator('.toggle_vylO.colorModeToggle_DEke').click();
    }

    async searchInSearchField (linkNumber2) {
        await this.page.locator('.searchBox_ZlJk').click();
        await this.page.locator('.DocSearch-Input').fill('Why Playwright?');
        await this.page.locator('.DocSearch-Hit-Container').nth(linkNumber2).click();


    }
}

module.exports = Header;