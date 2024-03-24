import {test,expect} from '@playwright/test'
import fs from 'fs'

test('learning testInfo',async({page},testInfo)=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
//expect(testInfo.title).toBe('learning')
await page.fill("#username","demoCSR");
//await page.pause();
await page.fill("#password",'crmsfa');
await page.click(".decorativeSubmit");

const ss=await page.screenshot();
await testInfo.attach('pagescreenshot',{path:"pictures/ss.png",contentType:'image/png'});
//downloaded -->

//test.info().attach()
 const testInfoPath=test.info().outputPath('./testInfo.txt')
 await fs.promises.writeFile(testInfoPath,"Using testInfo writing into a text file");



})