import { before } from 'node:test';
import { test, expect } from '../helpers/testFixture';


test('basic test', async ({ page, homePage, actions }) => {

  await page.goto('https://www.google.com');

  const date = await actions.getDate(3)
  await actions.type(homePage.searchBox, date);


  await actions.click(homePage.searchButton);
  
  await page.waitForTimeout(3000);

  //await page.click()
  // actions.snapshot(page, 'search results')

  //await actions.snapshot(page, 'search results')
  
});

