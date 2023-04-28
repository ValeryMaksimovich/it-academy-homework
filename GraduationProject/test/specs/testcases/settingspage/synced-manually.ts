import SettingsPage from "../../../pageobjects/settings-page.js"

const settingsPage = new SettingsPage();

export const SyncManually = () => {
    describe('Synchronize manually', () => {
        it('User could synchronize manually', async () => {
            await settingsPage.goToSettingsPage();
            await settingsPage.syncManually();
            await driver.pause(1000)           
        })
    })
}