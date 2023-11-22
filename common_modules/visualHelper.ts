import { Page , TestInfo, expect} from "@playwright/test";
import path from "path";


export class VisualHelpers{

    async snapshot(page: Page, identifier: string){
        var path: string = await page.title() + '-' + identifier + '.png';
        await expect(page).toHaveScreenshot(path)
    }

}