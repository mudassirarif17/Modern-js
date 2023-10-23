// console.log("This is Regular Expression");
let reg = /maddy/gi;  //This is regular expression literal in js
// let reg = /maddy/g;  //This is regular expression literal in js
// let reg = /maddy/i;  //This is regular expression literal in js

// g is global flag and i is case insensitive 

// console.log(reg);
// console.log(reg.source)     //source is used for printing the value of reg exp

let s = "This is great code with Maddy and also maDdy bhai";

// Function to match expression 
// 1. exec() This function will return an array for match or null for no match
// let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);   //we can use multiple exec with global flag
// console.log(result);

let result = reg.exec(s);
if(result){
    // console.log(result.index);
    // console.log(result.input);
}

// 2. test() returns true or false 
let result1 = reg.test(s);  //This will only print true if the reg is there in the string 
// console.log(result1);

// 3. match() It will return an array of result or null
// let result3 = reg.match(s)      //This is wrong
let result3 = s.match(reg)      //This is right
// console.log(result3);


// 4. search() Return index of first match else -1
// let result4 = reg.match(s)      //This is wrong
let result4 = s.search(reg)      //This is right
// console.log(result4);

// 5. return new replaced string with all the replacement
let result5 = s.replace(reg , "Daddy");
console.log(result5);