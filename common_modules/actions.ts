import { Locator, Page, expect } from '@playwright/test';
import { DateTime } from "luxon";


export class Actions {
    constructor(page: Page) {

    }

    /**
     * Clicks on the element found by locator
     * @param {Locator} locator
     * @memberof Actions
     */
    async click(locator: Locator) {
        await locator.click();
    }


    /**
     * Enters the value passed into text field in the element found via locator
     * @param {Locator} locator
     * @param {string} text
     * @memberof Actions
     */
    async type(locator: Locator, text: string) {
        await locator.fill(text);
    }

    /**
     * Extractes the text of element found via locator
     * Marks the test faile if actual text does not match with expected text
     * @param {Locator} locator
     * @param {string} expectedText
     * @memberof Actions
     */
    async verifyText(locator: Locator, expectedText: string) {
        await expect(locator).toHaveText(expectedText);
    }

    /**
     * Takes a screenshot of current page and comapres with baseline
     * @param {Page} page
     * @param {string} identifier
     * @memberof Actions
     */
    async snapshot(page: Page, identifier: string) {
        var path: string = await page.title() + '-' + identifier + '.png';
        await expect(page).toHaveScreenshot(path, {fullPage: true})
    }

    /**
     * Generates data by adding the required number in current date
     * @param {Page} page
     * @param {number} numOfDaysinFuture
     * @memberof Actions
     */
    async getDate(numOfDaysinFuture: number) {

        const date = DateTime.now().setZone('local').plus({days: numOfDaysinFuture});
        return date.toFormat('dd/MM/yyyy');
        
    }

}