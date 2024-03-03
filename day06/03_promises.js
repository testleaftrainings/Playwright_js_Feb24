"use strict";
/**
 * 1. Pending - operation is still ongoing
 * 2. Fulfilled - The operation completed successfully
 * 3. Rejected - The operation failed
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
function prepareCoffee() {
    console.log("Coffee is being prepared");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Your coffee is ready!");
        }, 5000);
    });
}
prepareCoffee().then(function (message) {
    console.log(message);
}).catch(function (error) {
    console.error(error);
});
