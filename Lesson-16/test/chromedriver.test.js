const { Builder, By, Key } = require('selenium-webdriver');
const {expect} = require('chai');
const {Asserts} = require('asserts');

    describe('ChromeDriver test', function () {
    it('Check the text of the main title ChromeDriver', async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://chromedriver.chromium.org/home');
        const chromeDriver = await driver.findElement(By.id('h.e02b498c978340a_23'));
        const chrome = chromeDriver.findElement(By.className('ChromeDriver'));
        await driver.close;
        await driver.quit;
         })
    })

    it('Check that the new title has become "Chrome Extensions"', async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://chromedriver.chromium.org/home');
        const chromeExtensionLink = await driver.findElement(By.xpath('//*[text()="Chrome Extensions"]//ancestor::*[contains(@class,"aJHbb dk90Ob jgXgSe HlqNPb")]'));
        await driver.executeScript('arguments[0].click()', chromeExtensionLink);
        const chromeExtension = await driver.findElement(By.xpath('//*[text()="Chrome Extensions"]//ancestor::*[contains(@class," Rn3Z1b")]'));
        await driver.executeScript("arguments[0].style.backgroundColor = 'red'", chromeExtension);
        const titleWithResults = await driver.findElement(By.xpath('//*[text()="Chrome Extensions"]//ancestor::*[contains(@class," Rn3Z1b")]'));
        expect(await titleWithResults.getText()).to.contain('Chrome Extensions');
        await driver.quit;

    })


    it('Check that the first link contains the word driver', async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://chromedriver.chromium.org/home');
        const searchField = await driver.findElement(By.xpath('//*[@class=\'U26fgb mUbCce fKz7Od iWs3gf Wdnjke M9Bg4d\']'));
        await driver.executeScript('arguments[0].click()', searchField);
        const searchField1 = await driver.findElement(By.xpath('//*[@class=\'whsOnd zHQkBf\']')).sendKeys('driver', Key.ENTER);
        await driver.sleep(3000);
        const linkWithResults = await driver.findElements(By.xpath('//*[@class=\'yDWqEe\']'));
        expect(await linkWithResults[0].getText()).to.contain('driver');
        await driver.quit

    })


    it('Check if url contains /mobile-emulation', async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://chromedriver.chromium.org/home');
        const moreClick = await driver.findElement(By.xpath('//*[@class=\'VsJjtf oXBWEc\']'));
        const actions = driver.actions({async: true});
        await actions.move({origin: moreClick}).perform();
        const mobileEmulation = await driver.findElement(By.xpath('//*[text()="Mobile Emulation"]//ancestor::*[contains(@class,"aJHbb hDrhEe HlqNPb")]'));
        await driver.executeScript('arguments[0].click()', mobileEmulation);
        const urlContains = await driver.getCurrentUrl().then(result => currentUrl = result);
        await expect(urlContains).to.contain('mobile-emulation');
        await driver.quit

    })