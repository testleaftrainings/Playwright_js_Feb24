import { TestInfo } from "@playwright/test";
import { createJiraissue } from "./jirawithAxios";


export async function logDefectafterExe(testInfo:TestInfo){
    if(testInfo.status=="failed"){
        const summary=`Test failed :${testInfo.title}`
        const description=`The error thrown here is ${testInfo.error?.message}`  
        createJiraissue(summary,description)
      }

}