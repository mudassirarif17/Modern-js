export const hello =()=>{
    console.log("hello Mudassir");
}

export const Ahello =(name)=>{
    console.log("hello " + name);
}
// there are two modules in js 
// 1 is common js module 
// 2 is Es6 js module 

export default hello;
// example of common js module 
// module.exports = {hello , Ahello};
// module.exports = {hello : hello ,Ahello : Ahello};   //you dont need to do this
