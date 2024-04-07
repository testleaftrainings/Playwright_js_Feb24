import { logDefectafterExe } from "./after_hooksJiralog.spec";
import { createJiraissue } from "./jirawithAxios";
import {test} from "./retry_logic";

// test('Learning Custom retry logic',async({page})=>{

//     await page.goto("https://login.salesforce.com/")
//     await page.fill("#username","vidyar@testleaf.com");
//     await page.delayedFill('#assword',"Sforce@123");
//     await page.clickwithDelay("#login");


// })

test('Learning Custom retry logic',async({page})=>{
try{
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com");
    await page.fill('password',"Sforce@123");
    await page.click("#Login");
}catch{
   createJiraissue("Executing Slaesforce login","Test to log the task in jira by Vidya")
}
})

test('Learning Jira',async({page})=>{ 
        await page.goto("https://login.salesforce.com/")
        await page.fill("#username","vidyar@testleaf.com");
        await page.fill('#password',"Sforce@123");
        await page.click("#Login");    
     //  createJiraissue("Executing Slaesforce login","Test to log the task in jira by Vidya")
          //  logDefectafterExe()
    })