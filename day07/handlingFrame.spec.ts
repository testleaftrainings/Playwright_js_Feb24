import {test} from '@playwright/test'


test.only('Learning to handle frames',async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")

    //get into the frame
   const frameele= page.frameLocator("//iframe").first();
   //click on the targeted element
   const firClickele= frameele.locator("#Click")
   console.log(await firClickele.innerText());
   await firClickele.click();
   console.log(await firClickele.innerText());
   // await page.click("#Click");
   const frameCount= page.frames().length;
    console.log(frameCount);
   
//nested frame

      const outerFrame= page.frameLocator("//iframe").nth(2);
      const innerFrame= outerFrame.frameLocator("#frame2");
      const innerEle= innerFrame.locator("#Click");
      console.log(await innerEle.innerText());
      await innerEle.click();
      console.log(await innerEle.innerText());

      

    //   await page.click("");

    //   page.frameLocator




    
    })