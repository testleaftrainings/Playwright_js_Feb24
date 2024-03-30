import {Page,chromium} from '@playwright/test'
import { GenerateData } from './learnStatic';

class Loginfunction{

    //page fixture -->as properties
    lppage:Page;
    // username:string
    // password:string

    constructor(page:Page){
        this.lppage=page;
    }

     async loadUrl(){
       await this.lppage.goto("http://leaftaps.com/opentaps/control/main");
     }
    //  async usernamefield(uname:string){
    //     await this.page.locator("#username").fill(uname);
    //  }

    //  async passwordfield(pwd:string){
    //     await this.page.locator("#password").fill(pwd);
    //  }

    //  async LoginField(){
    //     await this.page.locator(".decorativeSubmit").click();
    //  }

async loginCredentials(uname:string,pwd:string){
    await this.lppage.locator("#username").fill(uname);
    await this.lppage.locator("#password").fill(pwd);
    await this.lppage.locator(".decorativeSubmit").click();
}
}
async function doLogin(){
      const browser= await chromium.launch({headless:false});
      const page=  await browser.newPage();
      //create object for the class Loginfunction
      const lp=new Loginfunction(page);
      lp.loadUrl();
      lp.loginCredentials("DemoCSR","crmsfa");
      const lp2=new Loginfunction(page);
      lp2.loadUrl();
      lp2.loginCredentials("DemoCSR","crmsfa");
    //   const data=new GenerateData();
    //   data.getData();
     GenerateData.getData();

}
doLogin();



