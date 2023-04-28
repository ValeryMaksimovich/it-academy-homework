import CatalogPage from "../../../pageobjects/catalog-page.js";
import expect from 'expect.js';
import BasePage from "../../../pageobjects/base-page.js";

const catalogPage = new CatalogPage();
const basePage = new BasePage();

export const CoursesAvailability = () => {
    describe('Catalog', () => {
        it ('Courses are available in Course Catalog', async () => {
            await catalogPage.goToCatalogPage();
    
            await catalogPage.selectCC('Automation Mobile');
            await driver.pause(5000);
    
            let enabled = await basePage.areElementsEnabled(catalogPage.courseCell);
            await expect(enabled).to.be(true);
        })
    })
}