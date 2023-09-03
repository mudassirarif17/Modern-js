let num = [1,2,3,56,5];

// The type of an array is Object
console.log(num , typeof num)

// We can also declare a varible in js without using the let const and var js does not throws an error because js is a very forgiving language 
b = num.toString()
console.log(b , typeof(b))   //toString is used to convert the array to a string

// let r = num.pop()   //Pop removed the element from the end of an array it also return the poped element
// console.log(num ,r)

// let r = num.push(56);       //Push returns the length of a new array
// console.log(num,r) 

// let r = num.shift();    //Shift remove the element at the start of an array it also return the removing element 
// console.log(num , r)

let r = num.unshift(78);    //The JavaScript Array unshift() Method is used to add one or more elements to the beginning of the given array.
console.log(num,r)

