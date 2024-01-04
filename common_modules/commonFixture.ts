import {test as base} from '@playwright/test'
import { Actions } from './actions';

export const test = base.extend({


actions: async ({ page }, use) => {
        await use(new Actions(page));
    },
});



export { expect } from '@playwright/test';
