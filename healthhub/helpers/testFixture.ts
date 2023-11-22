import {test as base} from '@playwright/test'
import { HomePage } from '../pages/homepage';
import { Actions } from '../../common_modules/actions';

export const test = base.extend({

homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

actions: async ({ page }, use) => {
        await use(new Actions(page));
    },
});



export { expect } from '@playwright/test';