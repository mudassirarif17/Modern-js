class Animal{
    constructor(name){
        this.name = Animal.capitallize(name);
    }
    walk(){
        console.log("Animal " + this.name + " is walking");
        // console.log("Animal " + Animal.capitallize(this.name) + " is walking");
    }

    static capitallize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length); 
    }
}

let j = new Animal("jack");
// let j = new Animal(Animal.capitallize("jack"));
j.walk();

// console.log(j.capitallize("this is a"))     // this will not work because static method are associates with class not the object