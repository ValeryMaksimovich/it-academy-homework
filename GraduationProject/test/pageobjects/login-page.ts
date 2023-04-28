import BasePage from './base-page.js';

export default class LoginPage extends BasePage{

    private get allowNotification () { return '~Allow'; }

    private get inputUsernameAndroid () {return 'id:com.elearningforce.LMS:id/LoginEntry';}
    private get inputUsernameIOS () { return '~LoginEntry'; }

    private get inputPasswordAndroid () { return 'android.widget.EditText'; }
    private get inputPasswordIOS () { return '~Enter the password for mobileleaner@lms365qa.onmicrosoft.com'; }

    private get logInButtonAndroid () { return 'id:com.elearningforce.LMS:id/LoginButton'; }
    private get logInButtonIOS () { return '~LoginButton'; }

    private get signInButtonAndroid() { 
        const selector = 'new UiSelector().text("Sign in").className("android.widget.Button")'
        return (`android=${selector}`); 
    }
    private get signInButtonIOS() { return '~Sign in'; }

    private get closeNewVersionModalButtonAndroid() { 
        const selector = 'new UiSelector().text("NOT NOW").className("android.widget.Button")'
        return (`android=${selector}`); 
    }
    private get closeNewVersionModalButtonIOS() { return '~Not now'; }
    private get closeInformationWindowButtonAndroid() { return '//android.view.ViewGroup[@content-desc="InformationPage"]/androidx.cardview.widget.CardView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageButton' }
    private get closeInformationWindowButtonIOS() { return '//XCUIElementTypeOther[@name="InformationPage"]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeButton' }

    //private get setDevice() {return this.device}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async loginToApp ( username:string, password: string) {
        if (this.deviceName == this.iosName){
            await this.click(this[('allowNotification')])
        }
        await this.closeNewVersionModal()
        await this.typeValue(this[('inputUsername'+this.deviceName)], username)
        await this.click(this[('logInButton'+this.deviceName)])
        await driver.pause(5000);
        await this.click(this[('inputPassword'+this.deviceName)])
        await this.typeValue(this[('inputPassword'+this.deviceName)], password)
        await this.click(this[('signInButton'+this.deviceName)])
    }

    public async closeNewVersionModal() {
        if ((await $(this[('closeNewVersionModalButton'+this.deviceName)])).isDisplayed()) {
            this.click(this[('closeNewVersionModalButton'+this.deviceName)])
        }
    }

    //Close information window
    public async closeInformationWindow(){
        if ((await $(this[('closeInformationWindowButton'+this.deviceName)])).isDisplayed()) {
            this.click(this[('closeInformationWindowButton'+this.deviceName)])
        }

    }
}
