const { test, expect } = require('@playwright/test');
const MainPage = require('../page-objects/mainPage');
const Header = require('../page-objects/pageComponents/header');
const Footer = require('../page-objects/pageComponents/footer');




test.describe('test PLAYWRIGHT website', async function() {
    test('Navigate to API page', async ({page}) => {
        const mainPage = new MainPage(page);
        const header = new Header(page);
        await mainPage.navigate('https://playwright.dev/');
        await header.goToPageWithTopNavMenu(1);
        await page.waitForTimeout(2000);
        await expect(page.locator('h1')).toHaveText('Playwright Library');

    })

    test('Switch between dark and light mode', async ({page}) => {
        const mainPage = new MainPage(page);
        const header = new Header(page);
        await mainPage.navigate('https://playwright.dev/');
        await header.switchBetweenLightToDark();
        await page.waitForTimeout(2000);
        const locator1 = page.locator('.plugin-pages.plugin-id-default');
        await expect(locator1).toHaveAttribute('data-theme','dark');

    })

    test ('Navigate to Getting started page', async ({page}) => {
        const mainPage = new MainPage(page);
        const footer = new Footer(page);
        await mainPage.navigate('https://playwright.dev/');
        await footer.goToPageWithDownNavMenu(0);
        await page.waitForTimeout(1000);
        await expect(page.locator('h1')).toHaveText('Installation');


    })

    test ('Check functionality of Search field', async ({page}) => {
        const mainPage = new MainPage(page);
        const header = new Header(page);
        await mainPage.navigate('https://playwright.dev/');
        await header.searchInSearchField(0);
        await page.waitForTimeout(1000);
        await expect(page.locator('h1')).toHaveText('Why Playwright?');

    })

})
