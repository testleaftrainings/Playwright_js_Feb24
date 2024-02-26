import {test ,chromium } from "@playwright/test";

test("Learning playwright",async()=>{
         const browser=   await chromium.launch();
         const browserContext=await browser.newContext();
         const page=await browserContext.newPage();
         await page.goto("http://leaftaps.com/opentaps/control/main");

         //await page.fill("#username","demoSalesManager");
        const credentials= page.locator("[class='inputLogin']");
        await credentials.nth(0).fill("demoSalesManager");
        await credentials.nth(1).fill("crmsfa");
        await page.click(".decorativeSubmit");
       // await page.click("text=CRM/SFA");
        await page.click("//a[contains(text(),'CRM/SFA')]");        
        console.log(await page.title());        

})
