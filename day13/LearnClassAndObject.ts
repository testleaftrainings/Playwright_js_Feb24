class Employee{

    //define the properties
    empId:number;
    empName:string   //global variable

    //method
    printInfo(empPhno:number){
        console.log(this)
        console.log(`The Employee details : ${this.empId} and ${this.empName} ,${empPhno}` )

        //to represent the current class properties /method ->this keyword
    }
}

//create object to initialize the properties/method of the class
//creating object allocates the memory

//to create object
  //new className();

  let emp=new Employee();//no argument/default Constructor
  emp.empId=121;
  emp.empName="Saraswathi";
  emp.printInfo(4892093792);

  let emp1=new Employee();//no argument/default Constructor
  emp1.empId=122;
  emp1.empName="Gowtham";
  emp1.printInfo(234893792);