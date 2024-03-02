
//let variableName:datatype = value
let browser:string = "Chrome";
browser = "Safari";
console.log(browser);

let companyName = "Testleaf";
companyName = "Qeagle";

/**
 * Type Inference 
 * 1. Implicit Type Inference --> when the compiler infers/defines the datatype
 * 2. Explicit Type Inference --> when you define the datatype explicitly
 * 
 */
/**
 * TS Types
 * 1. Basic Types --> string, number,null, undefined, boolean
 * 2. Arrays
 * 3. enums
 * 4. any --> flexible data type --> it can be either a string or a number or a boolean
 * 5. void 
 */

const browserVersion:number = 120;
let isBrowserClosed = false;
let isInCognito;
isInCognito = true;
isInCognito = 123;
isInCognito = "Chrome";

console.log(isInCognito);


let browsers:string[] = ['Chrome', 'Safari', 'Firefox']

console.log(browsers);


function add (x:number,y:number): number{
    return x+y;
}
console.log(add(104,5.4589));

/**
 * 
 * Custom Type for browserNames
 * Custom Type for browserVersions
 * 
 * Use both custom Types and print the values
 */