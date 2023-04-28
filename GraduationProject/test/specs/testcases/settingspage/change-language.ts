import SettingsPage from "../../../pageobjects/settings-page.js"

const settingsPage = new SettingsPage();

export const ChangeLanguage = () => {
    describe('Change language', () => {
        it('Should change language', async () => {
            await settingsPage.goToSettingsPage();
            await settingsPage.changeLanguage('Deutsch - German');
            await driver.pause(2000);
        })
    })
}