/**
 * Function Parameter
 * 1. Mandatory parameters
 * 2. Optional parameters
 * 
 * Firstname
 * Lastname
 * Age
 * Email
 * Gender
 * Phone 
 * 
 * City
 * Age
 */
function userData(fName:string, lName:string, email:string, city?:string, height?:number){
    console.log(`Sign up with ${fName}, ${lName}, ${email}, ${city}, ${height}`);
    
}
userData("Jasson", "J", "jasson@yahoo.co.in", "Chennai", 6.2);

//Default parameter
function profileUpdate(fName:string, lName:string, age:number= 31){
    console.log(`Profile Details ${fName}, ${lName}, ${age}`);
    
}
profileUpdate("Jasson", "J", 23)