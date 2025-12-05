import { test as base, expect, Page } from '@playwright/test';
import { SignupPage, URL } from '../utils/importManager';

type TestFixtures = {
    
  signupPage: SignupPage;
};
 
export const test = base.extend<TestFixtures & { page: Page }>({
 
  page: async ({ page }, use) => {
    console.log(`[page fixture] Navigating to ${URL}`);
    await page.goto(URL);
    await use(page);
  },
  signupPage: async ({ page }, use) => {
    const dashboardPage = new SignupPage(page);
    await use(dashboardPage);
  },
});

export default test;
export { expect };
 
/**
 * Decorator function for wrapping POM methods in a test.step.
 *
 * Use it without a step name `@step()`.
 *
 * Or with a step name `@step("Search something")`.
 *
 * @param stepName - The name of the test step.
 * @returns A decorator function that can be used to decorate test methods.
 */
export function step(stepName?: string) {
  return function decorator(target: Function, context: ClassMethodDecoratorContext) {
    return function replacementMethod(this: any, ...args: any) {
      const name = `${stepName || (context.name as string)} (${this.name})`;
      return test.step(name, async () => {
        return await target.call(this, ...args);
      });
    };
  };
}
