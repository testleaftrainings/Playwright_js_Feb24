import {test} from '@playwright/test'


test('Learning to handle multiplePage',async({page,context})=>{

    await page.goto("https://www.leafground.com/window.xhtml");

    const newPage =context.waitForEvent('page');
    await page.getByText("Open",{exact:true}).click();
     const newTab= await newPage;
    console.log(newTab.url());

    await page.bringToFront();
    

})


//second way of handling window
test.only('Learning to handle multiwindows',async({page,context})=>{

    await page.goto("https://www.leafground.com/window.xhtml");

    // const newPage =context.waitForEvent('page');
    // await page.getByText("Open",{exact:true}).click();
    //  const newTab= await newPage;
    // console.log(newTab.url());

   const [multitabs]= await Promise.all([
            context.waitForEvent('page'),
            page.getByText("Open Multiple").click()
   ])

   const windows=multitabs.context().pages();
   console.log(windows.length);

   windows.forEach(tab=>{
         console.log(tab.url())
   })

   let webPage:any;
   for(let i=0;i<windows.length;i++){
        const title=await windows[i].title();
        console.log(title);
        if(title==='Web Table'){
                webPage=windows[i];
        }
   }
   await page.waitForLoadState('load');
// await webPage.waitForTimeout(3000);
//    await windows[2].bringToFront();
//    const childWindow =await windows[2].title();
   await webPage.fill("input[placeholder='Search']","canada");
  // await webPage.waitForTimeout(3000);

   
    


})