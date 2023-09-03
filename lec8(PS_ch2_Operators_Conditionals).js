// Problem 1 (Write a program to identify weather the age of a person lies b/w 10 and 20)
let age = 100;
if(age >10 && age<20){
    console.log("Your age lies between 10 and 20");
}
else{
    console.log("your age does not lies between 10 and 20");
}


// Problem 2
let myage = prompt("Enter your age ");
// Number.parseInt(myage);
switch(myage){
    case "12": 
    console.log("Your age is 12");
    break;
    case "13": 
    console.log("Your age is 13");
    break;
    case "14": 
    console.log("Your age is 14");
    break;
    case "15": 
    console.log("Your age is 15");
    break;
    default:
        console.log("You age is not special");
        break;
}

// Problem 3 (write a program to check that the age of a person is divisible by 2 and 3)
let age1= prompt("Enter your age :");
let num = Number.parseInt(age1);
if(num%2==0 && num%3==0){
    console.log("Your age is divisible by 2 and 3");
}
else{
    console.log("Your age is not divisible by 2 and 3");
}


// Problem 4 (write a program to check that the age of a person is either divisible by 2 and 3)
let age2 = prompt("Enter your age :");
let num1 = Number.parseInt(age2);
if(num1%2==0 || num1%3==0){
    console.log("Your age is either divisible by 2 and 3");
    if(num1%2==0){
        console.log("And this time it is divisible by 2");
    }
    if(num1%3==0){
        console.log("And this time it is divisible by 3");
    }
}
else{
    console.log("Your age is not divisible by 2 and 3");
}

// problem 5 (Write a program using ternary operator to check if age is is greater than 18 than drive otherwise not)
let age3 =18;
let a = age3>18?"You can drive":"You can not drive"
console.log(a);