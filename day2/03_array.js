
//declare the array
let browserName=[];
console.log(typeof browserName);

browserName=['chrome','edge','safari'];
console.log(browserName);

//to get the number elements in the array
console.log(browserName.length);
console.log(browserName[2]);

console.log(browserName[4]);

browserName[4]='ie';
console.log(browserName);

console.log(browserName.length);
browserName[3]='opera';

console.log(browserName);

//to add /remove the elements at the end or at the start

browserName.push('Chromium');//add the lement at the end index
console.log(browserName);

browserName.pop();//remove the element from the end index
console.log(browserName);

//to add or remove from the first index

browserName.unshift('Chromium');// add the element in the first index 0
console.log(browserName);

browserName[2]='Webkit'; //replaces
console.log(browserName);

browserName.shift(2); //remove the data fromthe first index 0
console.log(browserName);

browserName.splice(1,2);
console.log(browserName);

//convert the array into  string
let browsers =browserName.join("=>");
console.log(browsers);
//[chrome-opera-ie]
//string to array
let browserValues=browsers.split("=>");
console.log(browserValues);


let num=[2,3,6,1,5,4];
num.sort();
console.log(num);

let a1=[1,2,3,4];
//let a2=[...a1,5,6,7,8]; //...arrayName -->spreadsyntax -->copy the array into the another
let a2=[5,6,7,8];
//console.log(a2);

let merge=a1.concat(a2);
console.log(merge);

//Hetrogeneous array
let mixedArrays= [1,2,3,'chrome','edge',true,[1,2,3,4],2.5,...a1];

console.log(mixedArrays);
console.log(mixedArrays[6]);