import {test} from '@playwright/test'

test(`Learn to use Tracing`,async({page,context})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");     
   // await page.focus("#username");
    await context.tracing.start({screenshots:true});
    await page.fill('#username','demoCSR')
    await page.fill("#password","crmsfa");      
    //click the element
    await context.tracing.stop({path:'./report/tracing.zip'});
    await page.click(".decorativeSubmit");
     console.log(await page.title());   
})