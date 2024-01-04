
import { test, expect } from '../../utilities/helpers/fixture';
import {UrlList} from "../testdata/urlList.json"

/**
* Navigates to the list of urls present in the testdata json
* Takes a screenshot of current page and comapres with baseline
*/

UrlList.forEach((item, index) => {
    test(`visual test : ${index+1}`, async ({ page, actions }) => {
        await page.goto(UrlList[index].url);
        await page.waitForLoadState('domcontentloaded');
        await actions.snapshot(page, UrlList[index].identifier);
    });
}); 

  

    



