//constructor
//A Special method  which initializes the object
//default constructor
//parametrized constructor -->while creating the object itself -->assign value to the properties
var Login = /** @class */ (function () {
    function Login(uname, pwd) {
        this.username = uname;
        this.password = pwd;
    }
    Login.prototype.printInfo = function () {
        console.log("Login credentials : ".concat(this.username, " and ").concat(this.password, " "));
    };
    return Login;
}());
var user1 = new Login("demoCSR", "crmsfa");
user1.printInfo();
var user2 = new Login("Demosalesmanager", "crmsfa");
user2.printInfo();
