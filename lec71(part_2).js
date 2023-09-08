// Q2 create a note saving app using local storage 
let note = prompt("Enter Your note here : ");
localStorage.setItem("note" , note);

// Q3 Repaet the last question and fetch the notes which are saved
let n = localStorage.getItem("note");
console.log(n);
document.getElementById("note").innerHTML = n;

// Q4 Delte the note in the previous question 
let c = confirm("Do You want to delete the note");
if(c){
    localStorage.removeItem("note");
}