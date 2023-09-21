// Prototypes mean passing the properties of one object to other like a obj use the properties of p obj but if the "a" object has their own property so their own propert is executed 
let a = {
    name1 : "Mudassir",
    language : "JavaScript",
    run : ()=>{
        console.log("Self run");
    }
}

console.log(a);

let p = {
    run : ()=>{
        console.log("run");
    }
}
a.__proto__ = p;
a.run();
p.__proto__ = {
    name : "jackie"
}
console.log(a.name);