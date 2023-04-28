import CourseHomePage from "../../../pageobjects/course-home-page.js";
import CoursePlayer from "../../../pageobjects/course-player-page.js";
import expect from "expect.js";

const coursePlayer = new CoursePlayer();
const chp = new CourseHomePage();

export const CourseCompleted = () =>{ 
    describe('Course completed', () => {
        it ('Course is completed in CHP', async () => {
            await coursePlayer.closeCoursePlayer();
    
            let status = await chp.checkLearningProgress('Completed');
            await expect(status).to.be(true);
        })
    })
}