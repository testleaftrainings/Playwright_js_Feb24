//constructor
//A Special method  which initializes the object
//default constructor
//parametrized constructor -->while creating the object itself -->assign value to the properties

class Login{
    username:string
    password:string
constructor(uname:string,pwd:string){
   this.username=uname;
   this.password=pwd;
 }
 printInfo(){  
    console.log(`Login credentials : ${this.username} and ${this.password} ` )
}
}

let user1=new Login("demoCSR","crmsfa");
user1.printInfo();

let user2=new Login("Demosalesmanager","crmsfa");
user2.printInfo();