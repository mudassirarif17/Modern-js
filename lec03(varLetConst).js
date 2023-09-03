// Q5 : var vs let vs const 
//1 Var is globaly scoped while let and const are block scoped 
//2 var can be redeclared and updated while let can not be redeclared but can be updated
//3 const can neither be updated and nor redeclared

var a ;  //var scope is globaly
let b ;  //let and const scope is locally 
const c = 0;    // when const is declared it is mandatory to initialized 

var a = 6;
// var can be declared again but let and const can not be  
console.log(a , b , c)


// Harray bhai 
var a =56;
var a = "P"
var b1 ="mudassir";

// {
//     var b1="this"
//     console.log(b1)
// }

{
    let b1="this"
    console.log(b1)
}

console.log(b1)