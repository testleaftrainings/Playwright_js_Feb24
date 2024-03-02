/**
 * enums - enumeration - set of named constants
 * Types of enums
 * 
 * 1. Numeric Enums
 * 
 * 
 */

enum TestResult {
    Pass = 1,
    Fail,
    Skip
} 

function logTestResult(testName:string, result:TestResult ){
    console.log(`Test: ${testName}, Result Code: ${result}`);
    
}
logTestResult("Login Test", TestResult.Pass);
logTestResult("Regression Test", TestResult.Fail);
logTestResult("Update Profile Test", TestResult.Skip);

enum BrowserType {
    Chrome = "Chrome",
    Firefox = "Firefox",
    Webkit = "Safari",
    Edge = "Edge"
}

function launchBrowser(browserType:BrowserType){

    console.log(`Launching browser using ${browserType}`);
    
}
launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Webkit);

//Heterogeneous type
enum BrowserStatus{
    Opened = 1,
    Closed = "Closed",
    Crashed = 0,
    Unknown = "Unknown"

}
function  reportBrowserStatus(status:BrowserStatus){
    console.log(`Current browser status: ${status}`);
    
}
reportBrowserStatus(BrowserStatus.Crashed);
reportBrowserStatus(BrowserStatus.Closed);