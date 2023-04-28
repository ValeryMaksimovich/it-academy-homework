import SettingsPage from "../../../pageobjects/settings-page.js"
import expect from "expect.js"
const settingsPage = new SettingsPage();

export const SendLogs = () => {
    describe('Send logs', () => {
        it('Should send logs', async () => {
            await settingsPage.goToSettingsPage();
            await settingsPage.sendLogs();
            let getToastMessage = await settingsPage.getToast();
            await expect(getToastMessage).to.be(true);
                 
        })
    })
}