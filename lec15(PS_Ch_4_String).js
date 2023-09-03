//Problem 1  What will the following print in JS
let str = "mad\"";
// console.log(str.length);

// Problem 2 Explore the includes functions 
let sentence = "The quick brown fox jumps over lazy dog";
let word = "over";
console.log(sentence.includes(word));
// console.log(`The above sentence ${sentence.includes(word)?"include":"is not include"} the above word`)

// Problem 3 Write a program to convert an string to lowercase
let str1 = "Mudassir";
// console.log(str1);
// console.log(str1.toLocaleLowerCase());

// Problem # 4
let str2 = "Please give me 1000";
let amount = Number.parseInt(str2.slice(15));
console.log(amount);
console.log(typeof amount)

// Problem # 5 
let friend = "Deepika";
friend[3]="R";
// console.log(friend);    //friend is not changed beacuse the string is immutable 