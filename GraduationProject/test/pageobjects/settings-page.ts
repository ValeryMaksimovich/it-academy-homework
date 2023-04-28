import BasePage from "./base-page.js";


export default class SettingsPage extends BasePage{
    private get settingsPageButton() { return ('~Settings'); }
    private get logoutButton() { return ('~LogoutCommand'); }
    private get confirmLogoutAndroid() { return ('id:android:id/button1'); }
    private get confirmLogoutIOS() { return ('OK'); }
    private get languageButtonAndroid() { return ('(//android.view.ViewGroup[@content-desc="LanguageMenuItem_Container"])[1]'); }
    private get languageButtonIOS() { return ('**/XCUIElementTypeStaticText[`label == "English"`]'); }
    private get languageBar() { return 'android.widget.TextView'; }
    private get saveButtonAndroid() { return ('id:com.elearningforce.LMS:id/SaveButton'); }
    private get saveButtonIOS() { return ('~SaveButton'); }
    private get informationButtonAndroid() { return ('~OpenInformation'); }
    private get informationButtonIOS() { return ('~Information'); }
    private get closePageButton() { return ('~ClosePageButton'); }
    private get appVersionButtonAndroid() {return ('id:com.elearningforce.LMS:id/AppVersionMenuItem'); }
    private get appVersionButtonIOS() {return ('~AppVersionMenuItem'); }
    private get discardButton() {return ('id:android:id/button2'); }
    private get toastAndroid() {return ('id:com.elearningforce.LMS:id/snackbar_text'); }
    private get toastIOS() {return ('~Diagnostic logs have been successfully sent to LMS365.'); }
    private get syncedButtonAndroid() {return ('id:com.elearningforce.LMS:id/SynchronizedStateLabel'); }
    private get syncedButtonIOS() {return ('~SynchronizedStateLabel'); }
    private get completedDownloadedCoursesAndroid() {return ('id:com.elearningforce.LMS:id/AutoDeleteCompletedSwitch'); }
    private get completedDownloadedCoursesIOS() {return ('~AutoDeleteCompletedSwitch'); }
    private get endedDownloadedCoursesAndroid() {return ('id:com.elearningforce.LMS:id/AutoDeleteEndedSwitch'); }
    private get endedDownloadedCoursesIOS() {return ('~AutoDeleteEndedSwitch'); }
    private get userNameIOS() {return ('~UserName'); }
    private get userNameAndroid() {return ('id:com.elearningforce.LMS:id/UserName'); }
    private get onlineStatusIOS() {return ('~OnlineStateLabel'); }
    private get onlineStatusAndroid() {return ('id:com.elearningforce.LMS:id/OnlineStateLabel'); }
    private get userImageIOS() {return ('~UserImage'); }
    private get userImageAndroid() {return ('id:com.elearningforce.LMS:id/UserImage'); }
    private get openLinksButtonAndroid() {return ('(//android.view.ViewGroup[@content-desc="CurrentLanguage_Container"])[2]/android.widget.TextView'); }
    private get inAppBrowserButtonAndroid() {return ('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[1]'); }
    private get openHelpButton() {return ('~OpenHelp'); }
    private get closeHelpPageIOS() {return ('//XCUIElementTypeButton[@name="Done"]'); }
    private get closeHelpPageAndroid() {return ('~Close tab'); }
    




    public async goToSettingsPage () {
        await this.click(this.settingsPageButton);
    }

    public async logout () {
        await this.click(this.logoutButton);
        await this.click(this[('confirmLogout' + this.deviceName)]);
    }

    public async changeLanguage (languageCatalog : string) {
        await this.click(this[('languageButton' + this.deviceName)]);
        
        (this.deviceName === this.androidName) 
            await this.clickElementFromList(this.deviceName, await this.getListOfElements(this.languageBar), languageCatalog);
            await this.click(this[('saveButton' + this.deviceName)]);                   
    }

    public async openInformation () {
        await this.click(this[('informationButton' + this.deviceName)]);
        await this.click(this.closePageButton);

                              
    }
    
    public async sendLogs () {
        for (var i = 0; i < 7; i++) {
            await this.click(this[('appVersionButton' + this.deviceName)]);
        }
        await this.click(this[('confirmLogout' + this.deviceName)]);
        
    }
    

    public async getToast() {
        let isTrue:boolean = false;
        isTrue = await this.isElementEnabled(this[('toast' + this.deviceName)]);
        return isTrue;
       
    }


    public async syncManually () {
        await this.click(this[('syncedButton' + this.deviceName)]);
                           
    }
    public async switchToggles () {
        await this.click(this[('completedDownloadedCourses' + this.deviceName)]);
        await this.click(this[('endedDownloadedCourses' + this.deviceName)]);
        await this.click(this[('completedDownloadedCourses' + this.deviceName)]);
        await this.click(this[('endedDownloadedCourses' + this.deviceName)]);
                
    }

    public async displayedUserName () {
        let isTrue:boolean = false;
        isTrue = await this.isElementEnabled(this[('userName' + this.deviceName)]);
        return isTrue;
    }
    
    public async displayedOnlineStatus () {
        let isTrue:boolean = false;
        isTrue = await this.isElementEnabled(this[('onlineStatus' + this.deviceName)]);
        return isTrue;
        
    }
    
    public async displayedUserImage () {
        let isTrue:boolean = false;
        isTrue = await this.isElementEnabled(this[('userImage' + this.deviceName)]);
        return isTrue;
        
    }
    public async openLinksIn () {
        await this.click(this[('openLinksButton' + this.deviceName)]);
        await this.click(this[('inAppBrowserButton' + this.deviceName)]);               

    }
    public async openHelpPageLink () {
        await this.click(this.openHelpButton);
        await this.click(this[('closeHelpPage' + this.deviceName)]);    

    }
}