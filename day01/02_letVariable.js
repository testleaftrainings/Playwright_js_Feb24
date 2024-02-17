//var -->declare any type of value
//let -declare any type of value
//const -declare any type of value --> cannot be changed


var firstname="vidya";
console.log(firstname);

var firstname="Praveen";
console.log(firstname);

//var-->redeclare the variable and reassign the value -not safe-ignore the use of it
//ES6 -->let -replace the var keyword
//1.restrict the redeclaration
//2.Scope of variable -Global, local,Funtional
//3.Hoisting 

let fName="Ranjani";
console.log(fName);

fName="Ajay";
console.log(fName);

let username="Shyn";//global variable

function userDetails(username){
    let userId=1234; //functional scope of a variable
    if(username.startsWith("Shyn")){
        let pwd="123G";//Block scope of a variable
        console.log(username);
    }else{
        console.log("Check your input");
    }
    console.log(userId);
    console.log(pwd);
}
//console.log(userId);
userDetails(username);