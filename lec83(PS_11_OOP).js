//1. Create a JS class to create a complex number create a constructor to set the real and comlex part.
// class Complex{
//     constructor(real , imaginary){
//         this.real = real;
//         this.imaginary = imaginary;
//     }
//     add(num){
//         this.real = this.real + num.real;
//         this.imaginary = this.imaginary + num.imaginary;
//     }
// }

// let a = new Complex(2,4);
// let b = new Complex(6,2);
// a.add(b);
// console.log(`${a.real}+${a.imaginary}i`);

// 2. write a method to add two complex number in the above class


// 3. create a class student from a class human override a method 
// class Human{
//     constructor(name , favfood){
//         this.name = name;
//         this.favfood = favfood;
//     }
//     walk(){
//         console.log(`${this.name} Human is walking`);
//     }
// }

// class Student extends Human{
//     walk(){
//         console.log(`${this.name} student is walking`)
//     }
// }

// let o = new Student("mudassir" , "Alo");
// o.walk();

// 4. see if student is an interface of human using instance of keyword
// console.log(o instanceof Human);

// 5. use getter and setter to set and get the real and imaginary part of the complex number
class Complex{
    constructor(real , imaginary){
            this.real = real;
            this.imaginary = imaginary;
        }
    add(num){
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }
    get real(){
        return this._real;
    }
    get imaginary(){
        return this._imaginary;
    }

    set real(newReal){
        this._real = newReal;
    }
    set imaginary(newImaginary){
        this._imaginary = newImaginary;
    }
}

let a = new Complex(2,4);
let b = new Complex(6,2);
a.add(b);
console.log(`${a.real}+${a.imaginary}i`);
