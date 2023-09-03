let num = [3,5,1,2,4];
//1. for loop
for(let i=0; i<num.length; i++){
    // console.log(num[i]);
}

//2. for each
num.forEach((element)=>{
    // console.log(element + 1);
})


//3. Array from method convert the string into array 
let name = "maddy";
let arr = Array.from(name);
// console.log(arr)

//4. Array for of loop
for(let i of num){
    // console.log(i)
}

//5. Array for in loop allow us to use array as a object
for(let i in num){
    console.log(i+ ":" +num[i]);
}


// console.log("old array : " ,num)