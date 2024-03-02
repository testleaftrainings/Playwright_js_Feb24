/**
 * collection of key-value pairs-->Properties
 * 
 * Syntax:
 * let objectName: {key1:type, key2:type,...} = {
 *      key1: value1,
 *      key2: value2,
 *      key3: value3
 * 
 * }
 * 
 */

let userProfile:{
    name: string,
    age: number,
    email: string,
    isActive: boolean
}={
    name: "Shynoob",
    age: 26,
    email: "shynoob@gmail.com",
    isActive: true
};
//How to access property values
/***
 * 1. Dot notation
 * objectName.key
 * 2. Square notation
 * objectName[key]
 */

console.log(userProfile.name);
console.log(userProfile.email);
console.log(userProfile['isActive']);
console.log(userProfile['age']);




  
