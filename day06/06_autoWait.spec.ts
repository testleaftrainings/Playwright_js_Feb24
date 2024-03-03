import { expect, test } from "@playwright/test";

/**
 * Auto-waits
 * 
 * Actinability checks
 * To click on a web element
 * Before performing the action,
 * 1. Visibile on the web page
 * 2. Stable
 * 3. receive events - checks any other web elements overlay above that element
 * 4. Enabled
 * 
 * 5. Editable
 */

test(`TC_002 Auto Waits`, async ({page}) => {
    await page.goto("https://leafground.com/waits.xhtml");
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Visibility"});
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText:"Click"});
    buttonToClick.click();

    const hiddenButton = cardToSelect.getByRole("button").filter({hasText:"I am here"});
    await expect(hiddenButton).toBeVisible({timeout:15000});
    await page.waitForTimeout(3000);
})