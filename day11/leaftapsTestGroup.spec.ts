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
test.describe.configure({mode:'parallel'});//applicable multiple test.describe functions to run in parallel
//group:1
test.describe('SmokeTestcas',async()=>{
  test.describe.configure({mode:'parallel'});
 // test.beforeAll
 //test.beforeeach
test('CreateLead',async({page})=>{
  await page.getByText("CRM/SFA").click();
})
test('DeleteLead',async({page})=>{
  await page.getByText("CRM/SFA").click();
 await page.getByRole('link', { name: 'Leads' }).click();
 console.log(await page.title())
})
})
//group:2
test.describe('ReggTestcas',async()=>{
  test.describe.configure({mode:'serial'});
  test.describe.configure({retries:2});
 // test.beforeAll
 //test.beforeeach
test('CreateAccount',async({page})=>{
  await page.getByText("CRM/SFA").click();

})
test('DeleteAccount',async({page})=>{
  await page.getByText("CRM/SFA").click();
 await page.getByRole('link', { name: 'Account' }).click();
 console.log(await page.title())

})

})

//test.afterEach('',()=>{});
//test.afterAll('',()=>{});


