let num = [1,2,3,4,5,6,7,8,9];
let num_more = [11,12,13,14,15,16,17,18,19];
let even_more = [211,212,213,214,215,216,217,218,219];
let random_Array = [22,45,67,13,56,9,3,6];
//1. Delete method
// console.log(num);
// console.log(num.length);
// delete num[0];
// console.log(num.length);
// console.log(num);

//2. Concat method
let new_Array = num.concat(num_more , even_more);
// console.log(new_Array);
// console.log(num , num_more)

//3. Sort method
// Sort method (it sort the array in alphabatical order)
// random_Array.sort()
// console.log(random_Array);

//4. Again sort method 
// If you want to sort it in ascending or descending use compare method
let compare =(a,b)=>{
    // for ascending order
    return a-b;
    //for descending
    // return b-a; 
}
// random_Array.sort(compare)
// console.log(random_Array);


//5. Reverse method 
// num.reverse();
// console.log(num);

//6. slice method 
let new_num = num.slice(0,8);
// console.log(new_num);

//7. Splice method
// Splice take first arg as a starting index , 2nd as a limit and others to change 
let deleted_val = num.splice(2,5,1000,2000,3000,4000,5000);
console.log(num);
console.log("Deleted val",deleted_val);

