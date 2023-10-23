// 1. Write a JS program to print the following after dealy of 2 seconds
// hello
// world
// const a = (text)=>{
//     return new Promise((resolved , reject)=>{
//         setTimeout(() => {
//             resolved(text);
//         }, 2000);
//     })
// }

// (
//     async ()=>{
//     let text = await a("hello");
//     console.log(text);
//     text = await a("world");
//     console.log(text);
//     }
// )()

// 2. Write a js programm to find average of n numbers in an array using spread syntax
// let sum = (a,b,c)=>{
//     return a+b+c;
// }

// let arr = [3,5,6,];
// console.log(sum(...arr));


// 3. Write a Js program which resoves a promise after n seconds . The function takes n as the parameter use iife to invoke the function with differnet value of n
// const a = (text , n=2)=>{
//     return new Promise((resolved , reject)=>{
//         setTimeout(() => {
//             resolved(text);
//         }, n*1000);
//     })
// }

// (
//     async ()=>{
//         let text = await a("hello" ,3);
//         console.log(text);
//         text = await a("world",1);
//         console.log(text);
//     }
// )()

// 4. write a simple interest calculator using js
function simpleInterest(p, r, t){
    return (p*r*t)/100;
}

// console.log(simpleInterest(1000,5,2));