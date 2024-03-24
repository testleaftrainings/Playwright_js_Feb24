import {test} from './customFixture.spec'

test('Using customeFixture',async({loginPage})=>{
   // await loginPage.locator(`//a[text()='CRM/SFA']`).click();
    console.log(await loginPage.title());

})