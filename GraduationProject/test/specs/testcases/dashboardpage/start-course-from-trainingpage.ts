import DashboardPage from "../../../pageobjects/dashboard-page.js";
import TrainingPage from "../../../pageobjects/training-page.js";

const dashboardPage = new DashboardPage();
const trainingPage = new TrainingPage();


export const StartCourse = () => {
    describe('Start Course', () => {
        it ('Start course from Training page', async () => {
            await dashboardPage.goToDashboardPage();
            await dashboardPage.selectSubPageDashboard('Training');
            await driver.pause(1000);
        
            await trainingPage.selectSearchedTraining('Smoke Test')
            await trainingPage.startCourse();
        
            //to add validation
        })
    })
}