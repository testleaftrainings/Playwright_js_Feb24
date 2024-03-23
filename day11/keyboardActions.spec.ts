import {test} from '@playwright/test'

test("Learning Keyboard and MouseActions",async({page})=>{


   await page.goto("https://www.leafground.com/input.xhtml");
    const eleText= page.getByPlaceholder("Babu Manickam");
   await eleText.fill("Vidya");   
    await eleText.press("Tab");
    await page.keyboard.press("Control+A");
    })

    test.only("Learning MouseActions",async({page})=>{
        await page.goto("https://www.nykaa.com/");
         const elehover= page.locator("//a[@id='category']");
        await elehover.hover();
        await elehover.click({button:"right"});
        await page.mouse.wheel(0,300);
     //   elehover.dragTo(elehover)

     
         })