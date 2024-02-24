import { test,chromium } from "@playwright/test";


test('LearnLocators using CSS', async({page})=>{

//     //Creating browser reference
//   const browser= await chromium.launch({headless:false,channel:"msedge"});
//   //Launch the incognito window -browserContext
//   const browserContext=await browser.newContext();
//   //launch the page -tab
// const page=await browserContext.newPage();

//loading the url
await page.goto("http://leaftaps.com/opentaps/control/main");

 await page.locator(`#username`).fill('demosalesManager');

//way of handling the element with action
await page.fill("#password","crmsfa");

//click the element
await page.click(".decorativeSubmit");
 console.log(await page.title());
 console.log(page.url());
await page.waitForTimeout(3000);
})