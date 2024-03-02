import { chromium, Browser, Page } from "playwright";

//Function --> can take n number of arguments 
//Function can be without arguments

/**
 * Function --> function funcName() -- Function with no arguments
 * 
 * Function with arguments -- n number of parameters
 * 
 * 
 */

// function performAction(){
//     let a= 10;
//     let b = 5;
//     let c = a+b;
//     console.log(c);
    
// }
// performAction(); //Calling the function

async function performAction(url:string, action:'screenshot'|'title'): Promise<string|void>{

    const browser:Browser = await chromium.launch({headless:false});
    const page:Page = await browser.newPage();
    await page.goto(url);

    if(action === 'screenshot'){
        const screenshotPath = 'screenshot.png'
        await page.screenshot({path: screenshotPath});
        await browser.close();
        return `Screenshot saved as ${screenshotPath}`;
    }
    else if(action === 'title'){
        const title  = await page.title();
        await browser.close();
        return title;
    }
    await browser.close();

}

async function run(){
    const screenshotResult = await performAction("http://leaftaps.com/opentaps/control/main", 'screenshot');
    console.log(screenshotResult);

    const titleResult = await performAction("http://leaftaps.com/opentaps/control/main", "title");
    console.log(`Page title is: ${titleResult}`);
      
}

run(); //Calling the function