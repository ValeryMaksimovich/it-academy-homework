
describe('WebdriverIo', () => {
    it ('Check the Docs link transition', async () => {
        await browser.url('https://webdriver.io/');
        await $('//*[text()="Docs"]//ancestor::*[contains(@class,"navbar__item navbar__link")]').waitForClickable();
        await $('//*[text()="Docs"]//ancestor::*[contains(@class,"navbar__item navbar__link")]').click();
        const header = await $('h1*=Getting Started')
        await expect(header).toHaveText('Getting Started')

    })

    it ('Check Search field', async () => {
        await browser.url('https://webdriver.io/');
        await $('.searchBox_ZlJk').waitForDisplayed;
        await $('.searchBox_ZlJk').click();
        await $('.DocSearch-Input').setValue('WebdriverIO');
        await $$('.DocSearch-Hit-content-wrapper')[0].waitForClickable();
        await $$('.DocSearch-Hit-content-wrapper')[0].click();
        await $('h1*=WebdriverIO for Enterprise').waitForDisplayed();
        await expect(await $('h1*=WebdriverIO for Enterprise').getText()).toContain('WebdriverIO');

        })

    it('Switch between dark and light mode', async () => {
        await browser.url('https://webdriver.io/');
        await $('.lightToggleIcon_pyhR').waitForClickable();
        await $('.lightToggleIcon_pyhR').click();
        await $('.darkToggleIcon_wfgR').waitForClickable();
        await $('.darkToggleIcon_wfgR').click();
        await $('.lightToggleIcon_pyhR').waitForClickable();
        await $('.lightToggleIcon_pyhR').click();

    })
    it('Twitter link', async () => {
        await browser.url('https://webdriver.io/');
        await $('//*[text()="Why WebdriverIO?"]//ancestor::*[contains(@class,"button button--outline button--secondary button--lg getStarted_Sjon")]').waitForClickable();
        await $('//*[text()="Why WebdriverIO?"]//ancestor::*[contains(@class,"button button--outline button--secondary button--lg getStarted_Sjon")]').click();
        const header = await $('h1*=Why Webdriver.IO?')
        await expect(header).toHaveText('Why Webdriver.IO?')
      })
})