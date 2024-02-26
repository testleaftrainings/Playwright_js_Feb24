import{test,chromium, expect} from "@playwright/test";

test("Learning Playwright Locators",async()=>{
    const browser=   await chromium.launch();
    const browserContext=await browser.newContext();
    const page=await browserContext.newPage();
    await page.goto("https://www.leafground.com/select.xhtml");
    const title=await page.title();
    await page.selectOption(".ui-selectonemenu",{index:1});
    
   await  page.selectOption(".ui-selectonemenu",{label:"Playwright"});

    const dropdown=page.locator(".ui-selectonemenu");
    console.log(await dropdown.count());
    // for(let index=0;index<5;index++){    
    //     if(index%2==0){
    //   await  dropdown.nth(index).click();

    // }} 
    //expect(title).toContain("leafground");

   console.log( expect(dropdown).toBeEnabled());

})