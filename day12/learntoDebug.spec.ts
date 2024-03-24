import {test,expect} from '@playwright/test'
import fs from 'fs'

test('learning to debug',async({page},testInfo)=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
expect(testInfo.title).toBe('learning')
await page.fill("#username","demoCSR");
//await page.pause();
await page.fill("#password",'crmsfa');
await page.click(".decorativeSubmit");

//test.info().attach()
 const testInfoPath=testInfo.outputPath('./testInfo.txt')
 await fs.promises.writeFile(testInfoPath,"Using testInfo writing into a text file");
})