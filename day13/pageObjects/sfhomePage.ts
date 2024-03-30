import { SLoginPage } from "./sfloginPage";

class HomePage extends SLoginPage{
    constructor(){
        super();
        console.log(`From Parent ${this.username}`)
    }


    verifyLoginPage(){
        //protected property from the parent class
        this.username="Vidya"; //overriden
        console.log(`Login is successful ${this.username}`);
    }
}

const hp=new HomePage();
hp.display();
hp.verifyLoginPage();
