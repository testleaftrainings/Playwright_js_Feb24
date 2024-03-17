import { chromium } from "@playwright/test";

async function generateToken(){
 
    const browser =await chromium.launch();
    const bContext=await browser.newContext();
    const request= bContext.request;
    const response=await request.post("https://login.salesforce.com/services/oauth2/token",{
        headers:{
          "Content-Type":"application/x-www-form-urlencoded",
          "Connection":"Keep-alive"
        },
        form:{
          "grant_type":"password",
          "client_id":"3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV",
          "client_secret":"149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654",
          "username":"vidyar@testleaf.com",
          "password":"Force@123"
        }
        })

         const authtoken=await response.json();

         return {
            accessToken: authtoken.access_token,
            instanceUri:authtoken.instance_url
         }
  
}

export {generateToken};
