import { Page, Locator } from "@playwright/test"

export class HomePage{
    searchBox: Locator
    searchButton: Locator

    constructor(page: Page){
        this.searchBox= page.locator('//*[@name="q"]');
        this.searchButton = page.getByRole('button', { name: 'Google Search' })
    }

}
