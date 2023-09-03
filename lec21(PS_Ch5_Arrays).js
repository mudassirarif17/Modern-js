// Problem 1 (TO INSERT A NUMBER IN AN ARRAY)
let arr = [1,2,4,5,7,89];
console.log(arr)
let n=prompt("Enter a number :");
let a = Number.parseInt(n);
arr.push(a);
console.log(arr);

// Problem 2 (To insert a number in an array until the user input a 0)
let arr1 = [1,2,4,5,7,89];
let a1;
do{
    let n1=prompt("Enter a number :");
    a1 = Number.parseInt(n1);
    arr1.push(a1);

}while(a1!=0)
console.log(arr1);


// Problem 3 (Filter a number which is divisible by 10 from a given array)
let arr2 = [20,30,45,67,89];
let n1 = arr2.filter((a)=>{
    return a%10==0;
})

console.log(n1);

// problem 4 (calculate the square of the above array)
let arr3 = [20,30,45,67,89];
let n2 = arr2.map((a)=>{
    return a*a;
})

console.log(n2);

// Problem 5 (Use reduce function to calculate the factorial of above array)
let arr4 = [1,2,3,4];
let factorial = arr4.reduce((a,b)=>{
    return a*b;
})

console.log(factorial);
