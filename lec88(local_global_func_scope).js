// there are two main scope in the JS 
// 1. local let and const are local . local is divided into 2 more catrgory block and function 
// 2. global var is global

// block scope
{
    // example of global scope with var
    var b = 8;
    // example of block sope with let
    let a = 9;
    console.log(a);
}

console.log(b)

const ax=()=>{
    // function scope 
    let c = 10;
    console.log(c);
}

ax();