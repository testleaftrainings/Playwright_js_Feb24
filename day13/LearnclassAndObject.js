var Employee = /** @class */ (function () {
    function Employee() {
    }
    //method
    Employee.prototype.printInfo = function (empPhno) {
        console.log(this);
        console.log("The Employee details : ".concat(this.empId, " and ").concat(this.empName, " ,").concat(empPhno));
        //to represent the current class properties /method ->this keyword
    };
    return Employee;
}());
//create object to initialize the properties/method of the class
//creating object allocates the memory
//to create object
//new className();
var emp = new Employee();
emp.empId = 121;
emp.empName = "Saraswathi";
emp.printInfo(4892093792);
