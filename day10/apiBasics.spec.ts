import { test, chromium,expect } from '@playwright/test'
let sysid: any;

test(`Learning API basics`, async ({ page }) => {

    //  const browser =await chromium.launch();

    //     const bcontext=await browser.newContext();

    //      const page=await bcontext.newPage();

    //await page.goto("");

    const requestCall = page.request;

    const response = await requestCall.post("https://dev87582.service-now.com/api/now/table/incident",
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic YWRtaW46VGVzdGxlYWYkMTIz"
            },
            data: {
                "short_description": "create a new CR thru api"

            }


        });

    const responseBody = await response.json();
    sysid = responseBody.result.sys_id;
    console.log(responseBody.result.number);
    expect(response.statusText).toBe("Created");
})



test(`Get the incident record`, async ({ page }) => {
    const requestCall = page.request;

    const response = await requestCall.get(`https://dev87582.service-now.com/api/now/table/incident/${sysid}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic YWRtaW46VGVzdGxlYWYkMTIz"
            }

        });

    const responseBody = await response.json();
    console.log(response.status());

})
test(`Update the incident record`, async ({ page }) => {
    const requestCall = page.request;

    const response = await requestCall.patch(`https://dev87582.service-now.com/api/now/table/incident/${sysid}`,
        {            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic YWRtaW46VGVzdGxlYWYkMTIz"
            },
            data: {
                "description": "create through Playwright"

            }
        });

    const responseBody = await response.json();
    console.log(response.status());

})
