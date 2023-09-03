// Arrow func
// const sayHello=()=>{
//     console.log("Hello")
// }

// const sayHello = name => console.log("Hello ",name);
const sayHello = (greeting , name) => console.log(greeting+ " " +name);

// sayHello("Hello","Mudassir");

//1. Lexical Environment example 
// const x ={
//     name : "Mudassir",
//     role : "JS developer",
//     exp : 50,
//     show : function(){
//         console.log(`the name of developer is ${this.name} , his role is ${this.role} and his experience is ${this.exp} years`)
//     }
// }

//2. Lexical Environment example 
const x ={
    name : "Mudassir",
    role : "JS developer",
    exp : 50,
    show : function(){
        that = this;
        setTimeout(function(){
            console.log(`the name of developer is ${that.name} , his role is ${that.role} and his experience is ${that.exp} years`)
        },2000)
    }
}

// Arrow function has no their on this it uses its parent this 
// 3. Lexical Environment example 
// const x ={
//     name : "Mudassir",
//     role : "JS developer",
//     exp : 50,
//     show : function(){
//         setTimeout(() => {
//             console.log(`the name of developer is ${this.name} , his role is ${this.role} and his experience is ${this.exp} years`)
//         }, 2000);
//     }
// }


x.show();