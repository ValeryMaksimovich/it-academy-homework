import BasePage from "../../../pageobjects/base-page.js";
import CourseHomePage from "../../../pageobjects/course-home-page.js";
import expect from "expect.js";

const chp = new CourseHomePage();
const basePage = new BasePage();


export const RetakeAndUnenroll = () => {
    describe('Retake and unenroll', () => {
        it ('Retake and unenroll', async () => {
            await chp.enrollRetakeCourse('Retake Course');
            await chp.confirmRetakeCourse();
            await driver.pause(1000)

            await chp.selectFromActionMenu('Unenroll from Course')
            await chp.confirmUnenrollment( );

            let enabled = await basePage.areElementsEnabled(chp.lockedStatus);
            await expect(enabled).to.be(true);
        })
    })
}