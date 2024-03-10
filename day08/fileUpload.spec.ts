import { test } from '@playwright/test'

test.use({viewport:{height:1920,width:700}})
test("Learn to upload file", async ({ page }) => {

    await page.goto("https://www.leafground.com/file.xhtml");

    await page.setInputFiles("input[type='file']", "./day08/FilestoUpload/LearningTOUpload.txt");

    //if the dom element is not available with type= file then goe with event handler
    //filechooser event 
    const uploadFile = page.waitForEvent('filechooser');
    await page.locator("[class$='ui-icon-plusthick']").last().click();
    const file = await uploadFile;
    await file.setFiles(["./day08/FilestoUpload/screenshot.png", "./day08/downloadedfiles/TestLeaf Logo.png"]);
    await page.waitForTimeout(3000);
})

test('Learn to download the file', async ({ page }) => {

    await page.goto("https://www.leafground.com/file.xhtml");

    const fileToDownload = page.waitForEvent('download');
    await page.getByText("Download", { exact: true }).click();
    const filePath = await fileToDownload;
    await filePath.saveAs("downloaded files/"+(await fileToDownload).suggestedFilename());


})