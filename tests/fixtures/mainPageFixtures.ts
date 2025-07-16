import { test as base } from '@playwright/test';
import { Mainpage } from '../pages/MainPages.ts'

// Declare the types of your fixtures.
type MyFixtures = {
  mainPage: Mainpage;
};
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    // Set up the fixture.
    const mainPage = new Mainpage(page)
    await mainPage.open()

    await use(mainPage)
  },
});
export { expect } from '@playwright/test';