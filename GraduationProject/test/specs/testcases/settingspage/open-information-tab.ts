import SettingsPage from "../../../pageobjects/settings-page.js"
import expect from "expect.js"



const settingsPage = new SettingsPage();

export const OpenInformationTab = () => {
    describe('Open and close Information Tab', () => {
        it('should open and close Information Tab', async () => {
            await settingsPage.goToSettingsPage();
            await settingsPage.openInformation();
            let informationPage = await $('~InformationPage');
            const isDisplayed = await informationPage.isDisplayed();
            
            })
    })
}
