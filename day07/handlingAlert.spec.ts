import {test} from '@playwright/test'


test.only('Learning to handle simple alerts',async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")

    page.once('dialog',async alertType=>{
        console.log(alertType.type())
        const msg=alertType.message();
        console.log(msg);
        await alertType.accept();

    })
//simple alert
    await page.getByText("Show").nth(0).click();
    
    //first show button int he application simple alert
//prompt alert

page.once('dialog',async alertType=>{
    console.log(alertType.type())
    const msg=alertType.message();
    console.log(msg);
    await alertType.accept();
})
    const promptBox=page.locator('.card').filter({hasText: 'Alert (Prompt Dialog)'});
          await  promptBox.locator("button").filter({hasText:"Show"}).click();

    await page.getByText("Show").nth(1).click();

    await page.getByText("Show").nth(2).click();
    await page.getByText("Dismiss").click();

    await page.waitForTimeout(3000);
})


test('Learning to handle confirmation alerts',async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")

    // page.on('dialog',async alertBox=>{
    //     console.log(alertBox.type())
    //     const msg=alertBox.message();
    //     console.log(msg)
    //    await alertBox.dismiss();
    // })
    //   await page.getByText("Show").nth(1).click();//second to click on the confirmation


    //prompt alert
    page.on('dialog',async alertBox=>{
        console.log(alertBox.type())
        const msg=alertBox.message();
        console.log(msg)        
       await alertBox.accept("Vidya");
    })

    const promptBox=page.locator('.card').filter({hasText: 'Alert (Prompt Dialog)'});
          await  promptBox.locator("button").filter({hasText:"Show"}).click();

    await page.waitForTimeout(3000);
})
