function f(){
try{
    let a=0 ;
    // console.log(program);
    console.log("Program ran successfully");
    return
}catch(error){
    console.log("This is an error");
    // console.log(p);
}
finally{
    console.log("I am a good boy");
    //close the file 
    // exit loop
    // write to the log file
}
}

f();
console.log("done")
// Finally runs every time at any condition weather the error is handled or not or if we return the function it also run