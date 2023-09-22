class Employee{
    login(){
        console.log(`Emloyee has logged in`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeaves(leave){
        console.log(`Employee has requested ${leave} leaves - auto approved`);
    }
}

class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    // Method overriding mean suppose a parent class has method and child class also have a same method but child class modify it 
    requestLeaves(leave){
        super.requestLeaves(4);
        console.log(`One extra is granted`);
        // console.log(`Employee has requested ${leave + 1} leaves One extra`);
    }
}

let e = new Employee();
e.login();
e.logout();
e.requestLeaves(2);
// e.requestCoffee(1);      //this will throw an error

let p = new Programmer();
p.requestCoffee(3);
p.requestLeaves(5);