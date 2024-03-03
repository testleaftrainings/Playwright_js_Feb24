/**
 * 1. Pending - operation is still ongoing
 * 2. Fulfilled - The operation completed successfully
 * 3. Rejected - The operation failed
 * 
 */

import { resolve } from "path";

function prepareCoffee():Promise<string>{

    console.log("Coffee is being prepared");
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Your coffee is ready!");
        }, 5000);

    });
    
}
prepareCoffee().then((message)=>{   // Handles the fulfilled state
    console.log(message);
    
}).catch((error)=>{     // Handles the rejected state
    console.error(error);
    
})