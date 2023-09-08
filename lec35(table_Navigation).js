// In js we have comments nodes , text node and element node 
// if i use first child it can be a comment , text or be a element 
// let t = document.body.firstChild;


// But if we used firstElementChild it only returns a element node
// let t = document.body.firstElementChild;
let t = document.body.firstElementChild.firstElementChild;
console.log(t);
// console.log(t.rows);
// console.log(t.caption)
console.log(t.tHead)
// console.log(t.tHead.firstElementChild)
console.log(t.tBoodies);
console.log(t.tFoot);