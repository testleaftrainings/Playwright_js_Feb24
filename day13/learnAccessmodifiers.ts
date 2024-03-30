
class EmployeeDetails {

    readonly empId: number
    public empName: string
    private empSalary: number
    constructor() {
        this.empSalary = 44098200;
        this.empId=121;
    }

    public display() {
        console.log(`Employee details ${this.empId} ,${this.empName} and ${this.empSalary}`)
    }

    public set setSalary(value: number) {
        this.empSalary = value;
    }

    public get getSalary() {
        return this.empSalary;
    }

}

const emp = new EmployeeDetails();
//emp.empId = 345; compilation error when made the property as readonly
emp.empName = "Harini";
//emp.setSalary=2345678;
emp.getSalary;
emp.display();