let a = 1;
let b = 2;
let c = 3;

function onePlusAvg(x,y){
    return 1 + (x+y)/2;
}

let sum = (m,n)=>{
    return m+n;
}

console.log("One plus of average of a and b : ",1 + (a+b)/2);
console.log("One plus of average of a and b : ",1 + (b+c)/2);
console.log("One plus of average of a and b : ",1 + (c+a)/2);

console.log("One plus average of a and b is : ",onePlusAvg(1,2));
let x = sum(2,3);
console.log(x);