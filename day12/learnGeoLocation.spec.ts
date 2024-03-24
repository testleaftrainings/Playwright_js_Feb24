import {test,chromium,expect} from '@playwright/test'

test('Learning geoloaction',async()=>{
    const browser=  await chromium.launch({headless:false});
    const context=await browser.newContext({
        geolocation:{
            latitude:64.4079665,longitude:15.3598087
        },
        permissions:['geolocation']
    });
    const page=await context.newPage();

   await page.goto("https://www.openstreetmap.org/");
   await page.click(`[aria-label="Show My Location"]`);
 //  await page.waitForTimeout(3000);
   const s=await page.title();
   expect(s).toContain('Open');
   console.log(s);

})