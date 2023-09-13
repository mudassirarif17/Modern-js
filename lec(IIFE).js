let a = () => { 
    return new Promise ((resolved , reject)=>{
    setTimeout(() => {
        resolved(47);
    }, 4000);
})
}

// Js engine does not allow me to do it because we can not await without using a async function
// let b = await a;
// let c = await a;
// let d = await a;
// console.log(b , c ,d);


// js engine allow me to do it 
// let myfunc = async ()=>{
//     let b = await a();
//     console.log(b);
//     let c = await a();
//     console.log(c);
//     let d = await a();
//     console.log(c);
// }
    
// myfunc();


// exaple of IIFE
(async ()=>{
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(c);
})()
    