import SettingsPage from "../../../pageobjects/settings-page.js"

const settingsPage = new SettingsPage();

export const Logout = () => {
    describe('Logout', () => {
        it('should logout', async () => {
            await settingsPage.goToSettingsPage();
            await settingsPage.logout();
            await driver.pause(5000);
        })
    })
}