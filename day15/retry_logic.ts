import { test as baseTest } from '@playwright/test'

//use 

export const test = baseTest.extend({
    page: async ({ page }, use, testInfo) => {
        page.delayedFill = async (selector: string, value: string) => {
            if (testInfo.retry > 0) {
                await page.waitForTimeout(4000)
            }
            //normal click function 
            //apply retry logic when the method/functionfails
            await page.fill(selector, value)
        }
        page.clickwithDelay = async (selector: string) => {
            await page.click(selector);
            if (testInfo.retry) {
                await page.waitForTimeout(4000)
            }

        }
        await use(page);
    }





})
