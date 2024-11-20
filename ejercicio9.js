// Requiring the lodash library
const _ = require("lodash");

// Original array
let array1 = [1, 3, 4, 5, 5, 6]

// Using _.dropWhile() method
let newArray = _.dropWhile(array1, (e) => {
    return e != 5;
});

// Original Array
console.log("original Array: ", array1)

// Printing the newArray
console.log("new Array: ", newArray)

