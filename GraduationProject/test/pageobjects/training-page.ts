import BasePage from "./base-page.js";

export default class TrainingPage extends BasePage {
    private get dashboardPageButton () { return ('~Dashboard'); }
    private get navigationDropdownAndroid () { return  $('//android.view.ViewGroup[@content-desc="ExpandPageTitle"]/android.view.ViewGroup/android.widget.TextView'); }
    private get navigationDropdownIOS () {return ('//XCUIElementTypeOther[@name="ExpandPageTitle"]/XCUIElementTypeOther[2]/XCUIElementTypeStaticText')}
    private get filterButton () { return ('~FilterButton'); }
    private get searchFieldAndroid () { return ('id:android:id/search_src_text'); }
    private get searchFieldIOS() {return ('~Search'); }
    private get selectTrainingAndroid () { return ('id:com.elearningforce.LMS:id/ViewCourseCardAction'); }
    private get selectTrainingIOS () { return ('~ViewCourseCardAction'); }
    private get firstStartButtonAndroid () { return ('(//android.view.ViewGroup[@content-desc="ActionButton_Container"])[1]'); }
    private get firstStartButtonIOS () { return ('(//XCUIElementTypeButton[@name="ActionButton"])[1]'); }

    //Search training then selects it
    public async selectSearchedTraining (trainingName:string) {
        await this.click(this.filterButton);
        await this.typeValue(this[('searchField'+this.deviceName)], trainingName) ;
        await this.click(this.filterButton);
        await this.click(this[('selectTraining'+this.deviceName)]);
    }

    //Starts course from first item
    public async startCourse () {
        await this.click(this[('firstStartButton'+this.deviceName)]);
    }
}