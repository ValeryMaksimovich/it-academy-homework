import SettingsPage from "../../../pageobjects/settings-page.js"

const settingsPage = new SettingsPage();

export const SwitchToggles = () => {
    describe('Switch Toggles', () => {
        it('User could switch toggles', async () => {
            await settingsPage.goToSettingsPage();
            await settingsPage.switchToggles();
            await driver.pause(1000)           
        })
    })
}