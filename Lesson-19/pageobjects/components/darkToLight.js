const BasePage = require('../basePage');

class darkToLight extends BasePage {
    get lightToggle() {
        return $('.lightToggleIcon_pyhR');
    }

    get darkToggle() {
        return $('.darkToggleIcon_wfgR');
    }

    async switchDarkToLight() {
        await this.lightToggle.waitForClickable();
        await this.lightToggle.click();
        await this.darkToggle.waitForClickable();
        await this.darkToggle.click();
        await this.lightToggle.waitForClickable();
        await this.lightToggle.click();
        const myInput = await $('.clean-btn.toggleButton_gllP')
        await expect(myInput).toHaveAttribute('title', 'Switch between dark and light mode (currently dark mode)')
    }
}
module.exports = new darkToLight();