import SettingsPage from "../../../pageobjects/settings-page.js"

const settingsPage = new SettingsPage();

export const DisplayedUserName = () => {
    describe('User name is displayed', () => {
        it('User name should be displayed', async () => {
            await settingsPage.goToSettingsPage();
            await settingsPage.displayedUserName();    
        })
    })
}