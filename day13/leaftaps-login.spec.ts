
import {test} from '@playwright/test'
//import {LoginPage} from './leaftapsLoginPage';
import { LTHomePage } from './leafTaps-homePage';

test('Login functionality using ts classfile',async({page})=>{
        await page.goto("http://leaftaps.com/opentaps/control/main");
        const  hp=new LTHomePage(page);
        await hp.fillUsername("DemoCSR");
        await hp.fillPassword("crmsfa");
        await hp.clickLogin();
        await hp.clickCrm();
        await hp.verifyTitle();
        
})

