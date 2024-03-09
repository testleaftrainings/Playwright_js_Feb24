import { test,  expect } from "@playwright/test";
test('Frame and Alert', async ({page}) => {
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    page.on("dialog", async (dialog) => {
        console.log('Dialog Message:', dialog.message());
        await dialog.accept();
    })

    const iframe = page.frameLocator('#iframeResult');
    await iframe.locator("button:has-text('Try it')").click();
    await page.waitForTimeout(5000)
    const text = await iframe.locator("#demo").innerText();
    expect(text).toContain("pressed");


});