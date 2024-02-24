import { test, chromium } from "@playwright/test";

test('Launching the browser', async () => {

    //Creating browser reference
    const browser = await chromium.launch({ headless: false, channel: "msedge" });
    //Launch the incognito window -browserContext
    const browserContext = await browser.newContext();
    //launch the page -tab
    const page = await browserContext.newPage();
    //loading the url
    await page.goto("https://www.google.com");
    await page.waitForTimeout(3000);

}

)

