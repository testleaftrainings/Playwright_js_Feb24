import {test ,chromium } from "@playwright/test";
import { clearScreenDown } from "readline";


test("Learning CSS and Xpath Locators",async()=>{
//test.setTimeout(120000);
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

test("Learning Playwright Locators",async()=>{
        const browser=   await chromium.launch();
        const browserContext=await browser.newContext();
        const page=await browserContext.newPage();
        await page.goto("https://www.leafground.com/input.xhtml");

       console.log(await page.getByRole("textbox").count());
       await page.waitForTimeout(3000);
       await page.getByRole("textbox").last().fill("Learing Playwright Locators");
       await page.waitForTimeout(3000);


       const browserContext2=await browser.newContext();
        const page2=await browserContext2.newPage();
        await page2.goto("https://www.facebook.com/");
        console.log(await page2.getByRole("button").filter({hasText:"Create new account"}).innerText());
        console.log(await page2.getByRole("link").allInnerTexts());

})
test.only("Learning Playwright Selectors",async()=>{
        const browser=   await chromium.launch();
        const browserContext=await browser.newContext();
        const page=await browserContext.newPage();
      
        await page.goto("http://leaftaps.com/opentaps/control/main");

        await page.getByLabel("Username").fill('demosalesManager');
       //way of handling the element with action
       await page.fill("#password","crmsfa");
       //click the element
       await page.click(".decorativeSubmit");

        await page.getByText("CRM/SFA",{exact:true}).click();
       //page.getAttribute('type',{name:'Submit'});

})





