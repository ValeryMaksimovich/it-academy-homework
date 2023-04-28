/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
    protected androidName: string = 'Android';
    protected iosName: string = 'IOS';
    protected deviceName: string = driver.isAndroid ? this.androidName : this.iosName;

     //Return true if all elements from list are enabled or false if at least one is not enabled
     public async areElementsEnabled(locator:string) {
        let elements = await this.getListOfElements(locator);

        for (let element of elements) {
            if (await element.isEnabled() === false)
                return false;
        }
        return true;
    }

    //Refreshes the current page by swiping down
    public async refreshPage() {
        switch(this.deviceName) {
            case this.iosName:
                await driver.pause(2000);
                await driver.execute('mobile: dragFromToForDuration', {
                    duration: 1,
                    fromX: 400, toX: 400,
                    fromY: 400, toY: 1200,
                });
                break;

            case this.androidName:
                await driver.pause(2000);
                await driver.touchAction([
                    { action: 'press', x: 400, y: 400 },
                    { action: 'moveTo', x: 400, y: 1200 },
                    'release'
                ]);
                break;

            default:
                return undefined;
        }
    }

    //Returns true or false based on the element attribute 'selected'
    public async isElementSelected (selector:string) {
        return (await this.getElement(selector)).isSelected();
    }

    protected async getListOfElements(selector: string) {
        return await $$(selector);
    }

    protected async typeValue(selector: string, text: string) {
        const element = await this.getElement(selector);
        await element.clearValue();
        await element.setValue(text);
    }

    protected async click(selector: string | WebdriverIO.Element) {
        if (typeof selector === "string"){
            await (await this.getElement(selector)).click();
        }else {
            await selector.click();
        }
    }

    //Return true of false if a single element is enabled
    protected async isElementEnabled(locator:string){
        return (await this.getElement(locator)).isEnabled();
    }

    //Returns attribute value
    protected async getAttrValue(selector: string | WebdriverIO.Element, attribute: string){
        if (typeof selector === "string"){
            return (await this.getElement(selector)).getAttribute(attribute);
        }else {
            return await selector.getAttribute(attribute);
        }
    }

    //Click on element from list, if the text matches
    protected async clickElementFromList(device:string, list:ElementArrayType, textToCheck:string){
        let attribute:string = (device === this.androidName) ? 'text' : 'value';

        for (let element of list) {
            let textFromList = (await this.getAttrValue(element, attribute)).toLowerCase();
            if (textFromList.includes(textToCheck.toLowerCase())) {
                await this.click(element);
                return true;
            }
        }
    }

    private async getElement(selector: string) {
        return await $(selector);
    }
}
