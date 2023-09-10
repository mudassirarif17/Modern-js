try {
    // console.log(mudassir);
    // throw new Error("MUDASSIR is not good");
    // throw new ReferenceError("MUDASSIR is not good");
    let age = prompt("Enter Your age : ");
    age = Number.parseInt(age);
    if(age>150){
        throw new Error("This is probably not possible!");
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log("The script is still learning");