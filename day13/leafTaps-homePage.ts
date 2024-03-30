import { LoginPage } from "./leaftapsLoginPage";
import {Locator,Page} from '@playwright/test'
export class LTHomePage extends LoginPage{
    
   crmLink:Locator;
    constructor(page: Page) {
     super(page)

        this.crmLink=this.page.getByText("CRM/SFA");
    }    
    async clickCrm(){
        await this.crmLink.click();
    }

    async verifyTitle(){
        await this.page.title();
    }
}
