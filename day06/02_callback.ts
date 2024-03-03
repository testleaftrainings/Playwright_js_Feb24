/**
 * 
 * Functions --> Function with names -- function login(){
 * 
 * }
 * 
 * Anonymous function --> () =>{ function without a name
 *  function body
 * }
 * 
 * function add(x,y){
 *  return x+y;
 * }
 * 
 * function add(x,y) => x+y
 * 
 * let greet = function (x,y) => x+y
 * 
 * Callback function -->
 * 
 * function login(callback){
 *      loading url
 *      callback("Michael", "123456", "michael@gmail.com", 9876543210);
 *      log(Login Successful)
 * }
 * function signUp(name, password, email, phoneNum){
 *  log(User Profile is created)
 * 
 * }
 * login(signUp)
 * 
 * test("Regression Test", async ({page})=>{
 *  await chromium.launch();
 * 
 * })
 * 
 * async function (){
 * }
 */

function prepareCoffee(callback:(message:string) => void){
    console.log("Coffee is being prepared!");

    setTimeout(()=>{
        callback("Your coffee is ready!");
    }, 5000);
    
}
function onCoffeReady(message:string){
    console.log(message);
    
}
prepareCoffee(onCoffeReady);

