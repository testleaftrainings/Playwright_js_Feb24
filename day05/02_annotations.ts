/**
 * Annotaions in TS
 * 
 * let variableName:type --> explicitly mentioning the type--> Annotations
 * 
 * 
 * How to custom Types
 */

//type AliasName = Type
type stringOrNumber = string|number;
//let varName:type = value
let value:stringOrNumber = "TypeScript";
value = 123;

const compName = "Testleaf";
//compName = "Qeagle"

type supportedBrowsers = "Chrome"|"Firefox"|"Webkit";

function invokeBrowser(browserName:supportedBrowsers):void {
    if(browserName==="Chrome"){
        console.log("Execute Login Test");
        
    }
    else{
        console.log("Execute Add To Cart Test");
        
    }

}
invokeBrowser("Chrome");


//Intersection --> &

type Employee = {id:number, empName:string};
type Department= {department: string};

type Team = Employee & Department;

let team: Team = {id: 1003,empName: "Vidya", department: "QA"};
console.log(team);

//Union - Or --will take any one of the multiple values
//Intersection - And --will combine multiple types into one.
