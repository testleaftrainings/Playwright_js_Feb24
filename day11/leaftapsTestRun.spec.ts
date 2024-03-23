import { test, expect } from '@playwright/test';





test.beforeAll('Lerning Precondition with before-All',()=>{
  console.log ('Start Report')
})


test.beforeEach('Executes before each test function',async({page})=>{

  await page.goto('http://leaftaps.com/opentaps/control/main'); 
  const username=page.locator("#username");
  await username.fill("DemoCSR");
   await page.fill('#password','crmsfa');
   await page.click('.decorativeSubmit');  
})


test('CreateLead @smoke',async({page})=>{
  await page.getByText("CRM/SFA").click();

})

test('DeleteLead',{tag:'Accounts'
},async({page})=>{
  await page.getByText("CRM/SFA").click();
 await page.getByText("Leads").click();
 console.log(await page.title())

})

//test.afterEach('',()=>{});
//test.afterAll('',()=>{});


