import SettingsPage from "../../../pageobjects/settings-page.js"

const settingsPage = new SettingsPage();

export const OpenHelpPageLink = () => {
    describe('Open help page link', () => {
        it('Should open help page link', async () => {
            await settingsPage.goToSettingsPage();
            await settingsPage.openHelpPageLink();
            
        })
    })
}