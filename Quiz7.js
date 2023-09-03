// let array = ["mango" , "apple" , "banana" , "graps" , "date"];
// let slicedArray = array.slice(1,4);

// slice() returns a new array without modifying the original array, by copying a portion of the array based on the provided indices.

// console.log(array);         
// console.log(slicedArray);  //it does not modify the orignal array it returns a new array

// splice() modifies the original array by removing or replacing elements starting at a specified index, and it returns the removed elements in a new array.

const originalArray = [1, 2, 3, 4, 5];
const removedElements = originalArray.splice(1, 2, 6, 7); // Removes [2, 3] and inserts [6, 7]
// originalArray is now [1, 6, 7, 4, 5]

console.log(originalArray)
console.log(removedElements)