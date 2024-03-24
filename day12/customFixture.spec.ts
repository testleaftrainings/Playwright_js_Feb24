import {test as baseTest} from '@playwright/test'



export const test=baseTest.extend({loginPage:async({page},use)=>{
    await page.setViewportSize({height:1230,width:800})
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","demoCSR");
    await page.fill("#password","crmsfa");
    await page.click(".decorativeSubmit");
    use(page);
}})