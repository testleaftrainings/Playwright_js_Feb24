import { test, expect } from '@playwright/test';

test('LoginPage', async ({ page }) => {

  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.screenshot();
  const username=page.locator("#username");
  await username.fill("DemoCSR");
   await username.screenshot({path:'./pictures/username.png'})

})