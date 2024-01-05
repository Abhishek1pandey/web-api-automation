import {test as base} from '@playwright/test'
import { Actions } from './actions';
import { ApiActions } from './apiActions';

export const test = base.extend({


actions: async ({ page }, use) => {
        await use(new Actions(page));
    },

apiActions: async ({ page }, use) => {
    await use(new ApiActions(page));
    },

});






export { expect } from '@playwright/test';
