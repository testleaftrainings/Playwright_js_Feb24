import {test,expect} from '@playwright/test'
import fs from 'fs'

test.use({viewport:{height:1230,width:430}})
test('learning testInfo',async({page},testInfo)=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
//expect(testInfo.title).toBe('learning')
await page.fill("#username","demoCSR");
//await page.pause();
await page.fill("#password",'crmsfa');
await page.click(".decorativeSubmit");
await page.waitForTimeout(2000);
})



