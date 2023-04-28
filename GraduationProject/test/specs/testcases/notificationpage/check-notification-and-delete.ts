import BasePage from "../../../pageobjects/base-page.js";
import NotificationPage from "../../../pageobjects/notification-page.js";
import expect from "expect.js";

const notificationPage = new NotificationPage();
const basePage = new BasePage();

export const CheckNotificationAndDelete = () => {
    describe('Check notification and delete', () => {
        it ('Notification for enrollment, completed training and unenrollment', async () => {
            await notificationPage.goToNotificationPage();
            await basePage.refreshPage();
            await notificationPage.switchNotificationTab('Unread');
        
            const notificationEnroll = await notificationPage.checkNotification('Enrollment', 'Smoke Testing');
            const notificationComplete = await notificationPage.checkNotification('Completed', 'Smoke Testing');
            const notificationUnenroll = await notificationPage.checkNotification('Unenroll', 'Smoke Testing');
        
            await expect(notificationUnenroll).to.be(true); 
            await expect(notificationEnroll).to.be(true);
            await expect(notificationComplete).to.be(true);
        })
    })
}