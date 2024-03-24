import{test,chromium,devices} from '@playwright/test'


test("Launch browser using Device Emulation", async()=>{
    const mobileTest=devices['iPad Pro 11'];
    const browser=  await chromium.launch({headless:false});
    const context=await browser.newContext({...mobileTest});
    const page=await context.newPage();
    await page.goto("http://www.google.com");
})