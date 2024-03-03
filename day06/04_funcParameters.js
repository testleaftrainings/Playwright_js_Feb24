/**
 * Function Parameter
 * 1. Mandatory parameters
 * 2. Optional parameters
 *
 * Firstname
 * Lastname
 * Age
 * Email
 * Gender
 * Phone
 *
 * City
 * Age
 */
function userData(fName, lName, email, city, height) {
    console.log("Sign up with ".concat(fName, ", ").concat(lName, ", ").concat(email, ", ").concat(city, ", ").concat(height));
}
userData("Jasson", "J", "jasson@yahoo.co.in", "Chennai", 6.2);
//Default parameter
function profileUpdate(fName, lName, age) {
    if (age === void 0) { age = 31; }
    console.log("Profile Details ".concat(fName, ", ").concat(lName, ", ").concat(age));
}
profileUpdate("Jasson", "J");
