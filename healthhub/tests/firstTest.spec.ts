import { test, expect } from '../helpers/testFixture';

test('basic test', async ({ page, homePage, actions }) => {

  await page.goto('https://www.google.com');

  actions.type(homePage.searchBox, 'abcd');
  actions.click(homePage.searchButton);
  await page.waitForTimeout(3000);
  // actions.snapshot(page, 'search results')

  await actions.snapshot(page, 'search results')
  
});