import BasePage from "./base-page.js";

export default class CatalogPage extends BasePage {
    public get courseCell () { return '//android.view.ViewGroup[@content-desc="CourseCell"]'; }
    public get courseCellIOS() { return '(//XCUIElementTypeOther[@name="CourseCell"])'; }

    private get catalogPageButton () { return '~Catalog'; }
    private get catalogDropdown () { return '~ExpandPageTitle'; }
    private get androidTextView () { return 'android.widget.TextView'; }
    private get iosStaticText() { return '//XCUIElementTypeStaticText'; }

    public async goToCatalogPage () {
        await this.click(this.catalogPageButton);
    }

    //Taps on Catalog dropdown, search through the list and select the CC provided by parameter
    public async selectCC(catalogName : string) {
        await this.click(this.catalogDropdown);

        (this.deviceName === this.androidName) 
            ? await this.clickElementFromList(this.deviceName, await this.getListOfElements(this.androidTextView), catalogName)
            : await this.clickElementFromList(this.deviceName, await this.getListOfElements(this.iosStaticText), catalogName); 
    }

    //Selects course from Course Catalog
    public async selectCourse(courseName: string) {
        let list:ElementArrayType = (this.deviceName === this.androidName) 
            ? await this.getListOfElements(this.androidTextView) 
            : await this.getListOfElements('(//XCUIElementTypeStaticText[@name="TrainingTitle"])');

        await this.clickElementFromList(this.deviceName, list, courseName);
    }
}