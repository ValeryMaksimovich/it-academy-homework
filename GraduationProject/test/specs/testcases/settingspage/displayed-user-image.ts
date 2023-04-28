import SettingsPage from "../../../pageobjects/settings-page.js"

const settingsPage = new SettingsPage();

export const DisplayedUserImage = () => {
    describe('User image is displayed', () => {
        it('User image should displayed', async () => {
            await settingsPage.goToSettingsPage();
            await settingsPage.displayedUserImage();    
        })
    })
}