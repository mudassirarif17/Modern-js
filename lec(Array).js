let marks_class_12 = [98,65,74,89,false,"Not present"];

console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // this line will return undefined because index 6 does not exist

console.log(marks_class_12[6]=56);  //Adding a new value to the array
console.log(marks_class_12[0]=6);  //Changing a value to the array

console.log(marks_class_12) 
// All these method will change the value of array because Arrays is Mutable 

// Important 
// Arrays Are Mutabler Arrays can be Changed 
// String are Immutable String can not be Changed
