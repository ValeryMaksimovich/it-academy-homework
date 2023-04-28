import SettingsPage from "../../../pageobjects/settings-page.js"

const settingsPage = new SettingsPage();

export const DisplayedOnlineStatus = () => {
    describe('Online status is displayed', () => {
        it('Online status should displayed', async () => {
            await settingsPage.goToSettingsPage();
            await settingsPage.displayedOnlineStatus();    
        })
    })
}