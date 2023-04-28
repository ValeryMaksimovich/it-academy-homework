import BasePage from "../../../pageobjects/base-page.js";
import CourseHomePage from "../../../pageobjects/course-home-page.js";
import expect from "expect.js";

const chp = new CourseHomePage();
const basePage = new BasePage();

export const Enroll = () => {
    describe('Enroll', () => {
        it ('Enroll to course',  async () => {
            await chp.enrollRetakeCourse('Enroll to Course');
            await driver.pause(1000);

            let status = await chp.checkLearningProgress('Not Started');
            await expect(status).to.be(true);
        })
    })
}