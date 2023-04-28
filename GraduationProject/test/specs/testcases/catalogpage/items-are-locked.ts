import BasePage from "../../../pageobjects/base-page.js";
import CatalogPage from "../../../pageobjects/catalog-page.js";
import CourseHomePage from "../../../pageobjects/course-home-page.js";
import expect from "expect.js";

const catalogPage = new CatalogPage();
const basePage = new BasePage();
const chp = new CourseHomePage();

export const ItemsAreLocked = () => {
    describe('Locked', () => {
        it ('Items are locked before enrolling', async () => {
            await catalogPage.selectCourse('Smoke Testing');
            await driver.pause(5000);
    
            let enabled = await basePage.areElementsEnabled(chp.lockedStatus);
            await expect(enabled).to.be(true);
        })
    })
}