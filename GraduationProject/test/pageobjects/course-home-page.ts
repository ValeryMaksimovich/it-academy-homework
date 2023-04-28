import BasePage from "./base-page.js";

export default class CourseHomePage extends BasePage {

    public get lockedStatus() { return 'id:com.elearningforce.LMS:id/Locked'; }
    public get lockedStatusIOS() {return '//XCUIElementTypeStaticText[@name="Locked"]'; }
    private get enrollButtonAndroid () { return ('id:com.elearningforce.LMS:id/EnrollButton'); }
    private get enrollButtonIOS() { return '~EnrollButton'; }
    private get enrolledStatusAndroid() { return ('id:com.elearningforce.LMS:id/EnrolledStatus') ;}
    private get enrolledStatusIOS() {return '~EnrolledStatus'; }
    private get learningProgressAndroid() { return ('id:com.elearningforce.LMS:id/LearningProgressStatus'); }
    private get learningProgressIOS() { return ('~LearningProgressStatus'); }
    private get okDialogButton() { 
        const selector = 'new UiSelector().text("OK").className("android.widget.Button")'
        return (`android=${selector}`);  }
    private get okDialogButtonIOS() {return ('~OK'); }
    private get courseMenuButton() {  return ('~CourseMenuItem'); }
    private get androidWidgetText() { return ('android.widget.TextView'); }
    private get modalDialogTextInput() { return ('android.widget.EditText'); }
    private get modalDialogTextInputIOS() {return ('//XCUIElementTypeApplication[@name="LMS365"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeAlert/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeCell'); }

    public async enrollRetakeCourse(action:string) {
        let attribute:string = (this.deviceName === this.androidName) ? 'text' : 'value';

        (this.deviceName === this.androidName && await this.getAttrValue(this[('enrollButton'+this.deviceName)], attribute) === action) 
            ? await this.click(this.enrollButtonAndroid) 
            : await this.click(this.enrollButtonIOS);
    }

    public async getEnrollStatusSelector() {
        let selector:string =(this.deviceName === this.androidName) ? this.enrolledStatusAndroid : this.enrolledStatusIOS;
        
        return selector;
    }

    public async confirmRetakeCourse() {
        (this.deviceName === this.iosName) ? await this.click(this.okDialogButtonIOS) : await this.click(this.okDialogButton);
    }

    public async checkLearningProgress(progress:string) {
        let attribute:string = (this.deviceName === this.androidName) ? 'text' : 'value';

        return (await this.getAttrValue(this[('learningProgress'+this.deviceName)], attribute) === progress);
    }

    public async selectFromActionMenu(action:string) {
        if (await $(this.courseMenuButton).waitForDisplayed({timeout:5000}))
                await this.click(this.courseMenuButton);

        (this.deviceName === this.androidName) 
            ? await this.clickElementFromList(this.deviceName, await this.getListOfElements(this.androidWidgetText), action) 
            : await this.click('~'+action);
    }

    public async confirmUnenrollment() {
        if (this.deviceName === this.iosName) {
            await this.click(this.modalDialogTextInputIOS);
            await this.typeValue(this.modalDialogTextInputIOS, 'Automation Unenroll')
            await this.click(this.okDialogButtonIOS);
        }else {
        await this.click(this.modalDialogTextInput);
        await this.typeValue(this.modalDialogTextInput, 'Automation Unenroll')
        await this.click(this.okDialogButton);
        }
        await driver.pause(1000);
    }
}