let arr1 = [1,2,3,4];
let arr2 = [1,2,3,4,5,6];
let counter = 0;
arr1.map((a)=>{
    arr2.map((b)=>{
        console.log(arr1,arr2)
        counter = counter + 1;
    })
})

console.log(counter)