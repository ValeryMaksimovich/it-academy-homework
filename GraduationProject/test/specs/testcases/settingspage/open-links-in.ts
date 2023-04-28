import SettingsPage from "../../../pageobjects/settings-page.js"

const settingsPage = new SettingsPage();

export const OpenLinksIn = () => {
    describe('Choose how to open links', () => {
        it('Should choose how to open links', async () => {
            await settingsPage.goToSettingsPage();
            await settingsPage.openLinksIn();
            
        })
    })
}