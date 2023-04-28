import BasePage from "./base-page.js";

export default class DashboardPage extends BasePage {

    private get dashboardPageButton () { return ('~Dashboard'); }
    private get navigationDropdownAndroid () { return  ('//android.view.ViewGroup[@content-desc="ExpandPageTitle"]/android.view.ViewGroup/android.widget.TextView'); }
    private get navigationDropdownIOS () {return ('//XCUIElementTypeOther[@name="ExpandPageTitle"]/XCUIElementTypeOther[2]/XCUIElementTypeStaticText')}

    public async goToDashboardPage () {
        await this.click(this.dashboardPageButton)
    }

    //Selects a sub-page from Dashboard (e.g. Training). If specified subPage is already selected it does nothing
    public async selectSubPageDashboard(subPage: string) {
        let attribute:string = undefined;
        (this.deviceName === this.androidName) ? attribute = 'text' : attribute = 'value';

        //If the subPage is already selected, stop execution here
        if (await this.getAttrValue(this[('navigationDropdown'+this.deviceName)], attribute) === subPage) return;

        //Open subPage dropdown and select subPage
        await this.click(this[('navigationDropdown'+this.deviceName)]);
        (this.deviceName === this.androidName) 
            ? await this.clickElementFromList(this.deviceName, await this.getListOfElements('android.widget.TextView'), subPage) 
            : this.click(`(//XCUIElementTypeStaticText[@name="${subPage}"])`);
    }
}
