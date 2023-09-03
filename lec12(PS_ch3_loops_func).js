let marks = {
    maddy : 90,
    sam : 56,
    rida : 70,
    esha : 4,
}

// Problem # 1 (print the marks of students in an obj using for loop)
for(let i=0; i<Object.keys(marks).length; i++){
    // console.log("The marks of "+ Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
}

// Problem 2 (Write the above program using for in loop)
for(let i in marks){
    // console.log("The marks of " + i + " is " + marks[i])
}

// problem 3 (Write a program to print try gain until the user enter a coreect no)
// let cn =34;
// let n;
// while(n!=cn){
//     console.log("try again");
//     n = prompt("Enter a number ");
// }

// console.log("You have entered a correct number ");

// Problem 4 (write a function to calculate a mean of four numbers)
const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4;
}
console.log(mean(3,4,5,6));