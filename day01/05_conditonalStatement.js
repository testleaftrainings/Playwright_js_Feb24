let a=5;
let b=4;

function add(){
    let sum=a+b;
    if(sum>10){
        return sum;
    }else{
        return "check Inputs";
    }
}
let result=add();
console.log(result);

let browser="chrome";
function browserName(){
    switch (browser){
        case "chrome":
           return "Launch chrome browser";          
        case "safari":
       return "Launch safari browser";
        //break;
        case "IE":
            return "Launch IE browser";
          //  break;
        default:
        return  "Launch Edge";
    }
}

let browserValue=browserName();
console.log(browserValue);

let number=10;
if(number==10){
    console.log("Number is greater");
}else{
    console.log("Number is lesser");
}