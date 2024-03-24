import {test,chromium, BrowserContext} from '@playwright/test'


test('Run with defaultmode',async({page},)=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR");
await page.fill("#password",'crmsfa');
await page.click(".decorativeSubmit");
await page.waitForTimeout(2000);
})

test('Run with normal mode',async()=>{
    const browserContext:BrowserContext=await chromium.launchPersistentContext("./userDatadir",{headless:false,
        httpCredentials:{
            username:'admin',
            password:'testleaf',
            origin:'http://leafground.com:8090/login'            
        }      
    })

    const page=await browserContext.newPage()
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","demoCSR");
    await page.fill("#password",'crmsfa');
    await page.click(".decorativeSubmit");
    await page.waitForTimeout(2000);
    })