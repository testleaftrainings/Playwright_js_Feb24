//endpointurl
//username
//apikey
//project key

import axios from "axios"

const url="https://vidya-bharathi.atlassian.net/rest/api/2/issue/"
const userName="vidyar1926@gmail.com"
const apikey="ATATT3xFfGF01i1ifaNLKntCMcBeLQoHim_GTEEc3oI5r2ewFXoSJxkPqy--3BoMGwoL-SEwE_K49loJ5k8Tmsq2fLt1pw2jyCAV8KAsCHR-UaJlmXrmbRY4ARRMZB8reRvx1gGGVbcmBpwI7XjZ2LroSUGvk8c00EQ_1eUGtf6WnrYxqkuYQbg=0E2F83EA"
const projectKey="LJ2024"

async function createJiraissue(summary:string,description:string){
   const issueBody= {
    "fields": {
            "project":
            {
                "key": projectKey
            },
            "summary": summary,
            "description":description,
            "issuetype": {  
                "name": "Bug"
            }
        }
    }


const response=await axios.post(url,issueBody,{
    auth:{
        username:userName,
        password:apikey
    },
    headers:{
        "Content-Type":"application/json"
    }
});

  console.log("Issue created through playwright")


}

export {createJiraissue}



