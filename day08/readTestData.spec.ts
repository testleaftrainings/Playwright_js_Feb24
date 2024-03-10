import {test} from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs';
import path from 'path';

const testData= parse(fs.readFileSync(path.join(__dirname,"loginData.csv")),{
                columns:true,
                skip_empty_lines:true
                    })
for(const data of testData){
test(`Reading data from CSV file ${data.Testcase_id}`, async({page})=>{

 await page.goto("http://leaftaps.com/opentaps/control/main");
 await page.fill("#username",data.username);
 await page.fill("#password",data.password);
 await page.click(".decorativeSubmit");
 await page.waitForTimeout(3000);

})}