let arr1 = [1,2,3,4];
let arr2 = [1,2,3,4,5,6];
let counter = 0;
for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        console.log(arr1[i] , arr2[j]);
        counter = counter + 1;
    }
}

console.log(counter)
