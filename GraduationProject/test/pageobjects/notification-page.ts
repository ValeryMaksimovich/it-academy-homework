import BasePage from "./base-page.js";

export default class NotificationPage extends BasePage {
    private get notificationPageButton () { return ('~Notifications'); }
    private get notificationUnreadTab() { return ('id:com.elearningforce.LMS:id/UnreadMenuItem'); }
    private get notificationUnreadTabIOS() { return ('~UnreadMenuItem'); }
    private get notificationAllTab() { return ('com.elearningforce.LMS:id/AllMenuItem'); }
    private get notificationAllTabIOS() { return ('~AllMenuItem'); }
    private get deleteButton() { return ('new UiSelector().resourceId("com.elearningforce.LMS:id/DeleteAction")'); }
    private notificationName(notificationText:string) { 
        const selector = `new UiSelector().text("${notificationText}").className("android.widget.TextView")`;
        return (`android=${selector}`);  
    }
    private get deleteButtonAndroid() { 
        const selector = 'new UiSelector().resourceId("com.elearningforce.LMS:id/DeleteAction")'
        return (`android=${selector}`); 
    }
    private get deleteButtonIOS() { return '//XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[@name="DeleteAction_Container"]'; }
    private get notificationContainerAndroid () { return '//android.view.ViewGroup[@content-desc="NotificationCell"]'; }
    private get notificationContainerIOS () { return '//XCUIElementTypeOther[@name="NotificationCell"]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]'; }

    public async goToNotificationPage () {
        await this.click(this.notificationPageButton);
    }

    public async switchNotificationTab(tab:string) {
        if (this.deviceName === this.iosName) (tab == 'Unread') ? await this.click(this.notificationUnreadTabIOS) : await this.click(this.notificationAllTabIOS)
            else if (this.deviceName === this.androidName) (tab == 'Unread') ? await this.click(this.notificationUnreadTab) : await this.click(this.notificationAllTab)
    }

    //Returns true if text is in list
    private async checkNotificationAndDelete(list:ElementArrayType, textToCheck:string) {
        let attribute:string = (this.deviceName === this.androidName) ? 'text' : 'value';
        let childElSelector:string = (this.deviceName === this.androidName) 
            ? '//android.view.ViewGroup[@content-desc="NotificationSubject_Container"]/android.widget.TextView' 
            : '//XCUIElementTypeStaticText[@name="NotificationSubject"]';

        for (let element of list) {
            let childEl = await element.$(childElSelector);
            let index:number = list.indexOf(element);
            if (await this.getAttrValue(childEl, attribute) === textToCheck){  
                if (this.deviceName === this.androidName){ 
                    await this.click(`(//android.view.ViewGroup[@content-desc="DeleteAction_Container"])[${index+1}]/android.widget.Button`);
                    return true; 
                }else {
                    await this.click(`(//XCUIElementTypeOther[@name="DeleteAction_Container"])[${index+1}]`);
                    return true;
                }
            };
        }
        return false;
    }

    public async checkNotification(notificationType:string, trainingName:string) {
        let isTrue = false;
        let listOfElements:ElementArrayType = await this.getListOfElements(this[('notificationContainer')+this.deviceName]);

        switch (notificationType) {
            case 'Enrollment':{
                isTrue = await (this.checkNotificationAndDelete(listOfElements, `Enrollment confirmation for '${trainingName}'`));
                return isTrue;
        }
            case 'Completed':{
                isTrue = await (this.checkNotificationAndDelete(listOfElements, `You have completed the training course '${trainingName}'`));
                return isTrue;
        }
            case 'Unenroll':{
                isTrue = await (this.checkNotificationAndDelete(listOfElements, `Enrollment cancellation for '${trainingName}'`));
                return isTrue;
        }      
            default:
                return false; 
        }
    }
}