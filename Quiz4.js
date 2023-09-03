const calculateLength = (str)=>{
    let counter=0;
    for(let i=0; i<str.length; i++){
        counter = counter + 1;
    }
    return counter;
}

console.log(calculateLength("ali"));