import BasePage from "./base-page.js";

export default class CoursePlayer extends BasePage {

    private get startCourseButton() { return ('~StartNavigationButton'); }
    private get classWidgetView() { return ('android.widget.TextView'); }
    private get nextButton() { return ('~NextNavigationButton'); }
    private get submitButton() { return ('~SubmitNavigationButton'); }
    private get acceptSubmitButtonAndroid () { return ('id:android:id/button1'); }
    private get acceptSubmitButtonIOS () {return ('~Submit'); }
    private get continueButton() { return ('~ContinueNavigationButton'); }
    private get closePlayerButton() { return ('(//android.view.ViewGroup[@content-desc="ClosePageButton"])[1]'); }
    private get closePlayerButtonIOS() { return ('~ClosePageButton'); }

    public async startCourseItem() {
        await this.click(this.startCourseButton);
    }

    public async answerMultipleChoice(answer:string) {
        // Select first answer for now. To find a better way to handle dynamically when correct answer it's not first
        (this.deviceName === this.iosName) 
            ? await this.click('(//XCUIElementTypeImage[@name="CheckBoxAnswer"])[1]') 
            : await this.click('(//android.widget.ImageView[@content-desc="CheckBoxAnswer"])[1]');
    }

    public async clickNext() {
        await this.click(this.nextButton);
    }

    public async clickSubmit() {
        await this.click(this.submitButton);
    }

    public async acceptSubmit() {
        (this.deviceName === this.iosName) 
            ? await this.click(this[('acceptSubmitButton'+this.deviceName)]) 
            : await this.click(this[('acceptSubmitButton'+this.deviceName)]);
    }

    public async continueNextItem() {
        await this.click(this.continueButton);
    }

    //Check if the message for completed course is available after course completion
    public async completedCourse() {
        let isTrue:boolean = false;
        let text:string = 'Congratulations, you have completed the Course';
        
        (this.deviceName === this.androidName) 
            ? isTrue = await this.clickElementFromList(this.deviceName, await this.getListOfElements(this.classWidgetView), text) 
            : isTrue = await this.isElementEnabled('~'+text);

        return isTrue;
    }

    public async closeCoursePlayer() {
        (this.deviceName === this.iosName) ? await this.click(this[('closePlayerButton'+this.deviceName)]) : await this.click(this.closePlayerButton);
    }
}