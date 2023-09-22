class Animal{
    constructor(name , color){
        this.name = name;
        this.color = color;
    }
    run(){
        console.log(this.name + " is runing");
    }
    shouting(){
        console.log(this.name + " is shuting");
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(`${this.name} is eating Banana`);
    }
    hide(){
        console.log(`${this.name} is hiding`);
    }
}

let ani = new Animal("Bruno" , "White");
let m = new Monkey("Chimpu" , "orange");

ani.shouting();
ani.run();
m.shouting();
m.run();
m.eatBanana();

// ani.eatBanana();     //this will throw an error 