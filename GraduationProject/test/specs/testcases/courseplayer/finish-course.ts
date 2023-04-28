import CoursePlayer from "../../../pageobjects/course-player-page.js";
import expect from "expect.js"

const coursePlayer = new CoursePlayer();

export const FinishCourse = () => {
    describe('Finish course', () => {
        it ('Finish course', async () => {
            //start and complete Quiz
            await coursePlayer.startCourseItem();
            await coursePlayer.answerMultipleChoice('Blue');
            await coursePlayer.clickNext();
            await coursePlayer.answerMultipleChoice('True');
            await coursePlayer.clickSubmit();
            await coursePlayer.acceptSubmit();
            await coursePlayer.continueNextItem();

            //Start and complete LM
            // await coursePlayer.startCourseItem();
            // await coursePlayer.clickNext();
            // await coursePlayer.continueNextItem();

            let completed = await coursePlayer.completedCourse();
            await expect(completed).to.be(true);
        })
    })
}