import { test } from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config();


test(`Reading data from env file`, async ({ page }) => {

    const url = process.env.QA_URL as string
    const uname = process.env.QA_Username as string
    const pwd = process.env.QA_Password as string

    await page.goto(url)
    await page.fill("#username", uname);
    await page.fill("#password", pwd);
    await page.click(".decorativeSubmit");
    await page.waitForTimeout(3000);

})