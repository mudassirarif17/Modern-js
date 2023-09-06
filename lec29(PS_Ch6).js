// Question 1 
// Write a program using prompt and take input age from user and return alert weather he can drive or not 
// let age = prompt("Enter Your age : ");
// age = Number.parseInt(age);

// const canDrive=(age)=>{
//     return age>18?true:false;
// }
// if(canDrive(age)){
//     alert("You can drive");
// }
// else{
//     alert("You can't drive");
// }

// Question 2 in Q1 use confirm to ask user if he wants to see prompt again 

// let runAgain = true;
// const canDrive=(age)=>{
//     return age>18?true:false;
// }
// while(runAgain){
//     let age = prompt("Enter Your age : ");
//     age = Number.parseInt(age);
//     if(canDrive(age)){
//         alert("You can drive");
//         let again = confirm("are you want to see prompt again : ");
//         runAgain = again;

//     }
//     else{
//         alert("You can't drive");
//         runAgain = false;
//     }
// }


// Question 3 in the previous question if user entered a negative age use console.error to show that age is not valid

// let runAgain = true;
// const canDrive=(age)=>{
//     return age>18?true:false;
// }
// while(runAgain){
//     let age = prompt("Enter Your age : ");
//     age = Number.parseInt(age);
//     if(age<0){
//         console.error("Invalid age")
//         break;
//     }
//     if(canDrive(age)){
//         alert("You can drive");
//         let again = confirm("are you want to see prompt again : ");
//         runAgain = again;
//     }
//     else{
//         alert("You can't drive");
//         runAgain = false;
//     }
// }

// Question 4 Write a program that change the url redirection to google.com if the user input a value greater than 4
// let age = prompt("Enter your age : ");
// age = Number.parseInt(age);
// if(age>4){
//     location.href = "https://google.com";
// }

// Question 5 change the background of the page based on the user input 
let color = prompt("Enter the color");
document.body.style.backgroundColor = color;