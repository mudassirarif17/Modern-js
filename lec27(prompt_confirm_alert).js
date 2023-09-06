alert("Enter the value of a!")
let a = prompt("Enter a number : ");
a = Number.parseInt(a);
// document.write(a);
alert("You entered a type of " + typeof(a));

let write = confirm("Do you want to write it to the page ");
if(write){
    document.write(a)
}
else{
    alert("Please allow me to write")
}