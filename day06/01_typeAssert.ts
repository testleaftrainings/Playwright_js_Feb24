let response:any = "success";
let responseString:string = (<string>response);
let responseCount:number = (<string>response).length
console.log(responseCount);

let statusCode:any = 201;
let statusCodeNum:number = statusCode as number;
//let statusCodeNum:number = (<number>statusCode);
console.log(statusCodeNum);
