import {test} from '@playwright/test'
import { generateToken } from './authGenerator'
let access:any
let uri:any

test(`Generate AuthToken`,async ()=>{

     const authtoken= await generateToken();
     access =authtoken.accessToken;
     uri=authtoken.instanceUri;
  })

  
 test(`Create a record with salesforce`,async({request})=>{

    const response =await request.post(`${uri}/services/data/v60.0/sobjects/Lead`,{
       headers:{
           "Content-Type":"application/json",
           "Authorization":"Bearer "+access
       },
       data:{
           
               "LastName": "Kyathri",
               "Company": "HCL"
           }    
    });
   const cookiesData= await request.storageState({path:"./cookiesDetails"});
   const [cd]=cookiesData.cookies.values();
const resBody=await response.json();
})