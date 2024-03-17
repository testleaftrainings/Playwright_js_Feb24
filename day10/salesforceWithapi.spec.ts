import {test} from '@playwright/test'
let accessToken:any
let uri:any

test(`Generate AuthToken`,async({request})=>{

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

   const genrateToken=await response.json();
   console.log(genrateToken);
   accessToken=genrateToken.access_token;
   uri=genrateToken.instance_url;

   console.log(`The Bearer token is ${accessToken} and the uri is ${uri}`)
 })


 test(`Create a record with salesforce`,async({request})=>{

     const response =await request.post(`${uri}/services/data/v60.0/sobjects/Lead`,{

        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+accessToken
        },
        data:{
            
                "LastName": "Kyathri",
                "Company": "HCL"
            }    
     })


const resBody=await response.json();
console.log(resBody.id);
 })