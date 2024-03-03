/**
 * expect --> Assertion library --> 5000ms 
 * 
 * Assertions
 * 1. Retrying Assertions
 * 2. Non-retrying assertions --> no auto-retry
 * 
 * title --> Home|Salesforce
 * expect(title).toHaveTitle("Home|Salesforce")
 * polling interval as 0.5s
 * 1s  -  title
 * 1.5 - title
 * 2s - title
 * 
 * 
 * 5s -
 * 
 * Types
 * 1. Page Assertions
 * 2. Locator Assertions
 * 3. APIResponse Assertions
 * 4. Generic Assertions
 * 5. Snapshot Assertions
 * 
 * Negating assertions
 * 
 * await expect(locator).not.toContainText('Up to 75% off')
 */
import { chromium, expect, test } from "@playwright/test";

test('TC001 Assertions', async ({page}) => {

    await page.goto("https://leafground.com/input.xhtml");
    const typeName = page.getByPlaceholder("Babu Manickam");
    await expect(typeName).toBeDisabled();
    await typeName.fill("Ranjini"); 
    await page.fill("[name='j_idt88:j_idt91']", "India");
    const disabled = page.getByPlaceholder("Disabled");
    await expect(disabled).toBeEnabled();
    //await disabled.fill("Testleaf");
    await page.locator("[name='j_idt88:j_idt95']").clear();

    /**
     * 
     * Hard assert - when the assertion is failed, the entire test is failed
     * Soft assert - When the assertion is failed, the test execution is not stopped,
     * only in the report -- you can see the assertion failure
     */
    
})