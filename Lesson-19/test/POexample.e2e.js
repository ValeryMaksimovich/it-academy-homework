const mainPage = require('../pageobjects/mainPage');
const topNavigation = require('../pageobjects/components/topNavigation')
const darkToLight = require('../pageobjects/components/darkToLight')
const searchField = require('../pageobjects/components/searchField')

describe('WebdriverIO testing', function () {
    it('Should navigate to "Configuration" link from main menu Tab', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await topNavigation.goToPage('Docs', 'Configuration');
    })

    it('Should navigate by main menu Tabs', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await topNavigation.menuNavigate('Contribute'); // Possible to use different links by tabName (API, Blog, Contribute, Community)
    })

    it('Should navigate to "Configuration" link > "Capabilities" from main menu Tab', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await topNavigation.goToSubPage('Docs', 'Configuration', 'Capabilities' );
    })

    it('Click "View on GitHub" link', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.clickOnLinkGitHub();
    })

    it('Switch between dark and light mode', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await darkToLight.switchDarkToLight();
    })

    it('Check functionality of Search field', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await searchField.searchInSearchField();
    })
})

