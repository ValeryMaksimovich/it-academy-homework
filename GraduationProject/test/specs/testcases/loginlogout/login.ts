import BasePage from "../../../pageobjects/base-page.js";
import LoginPage from "../../../pageobjects/login-page.js"
import expect from "expect.js"

const loginPage = new LoginPage();
const basePage = new BasePage();

export const Login = () => {
    describe('Login', ()=>{
        it ('App opens to Dashboard page by default', async () => {
            await loginPage.loginToApp("-", "-");
            await driver.pause(5000);
    
            let isSelected = await basePage.isElementSelected("~Dashboard");
            await expect(isSelected).to.be(true);
        })
    })
}