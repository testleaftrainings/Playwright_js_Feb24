import {test} from '@playwright/test'


test.use({storageState:"creds/login_details.json"});
test("Using sessionStorage",async({page})=>{
    await page.goto("https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")


})