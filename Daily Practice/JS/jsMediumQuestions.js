// How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

// const countTrue=(array)=>{
//     let count = 0;
//     for (let index = 0; index < array.length; index++) {
//         if (array[index]===true) {
//             count+=1;
//         }
//     }
//     console.log(count);
// }

// countTrue([true, false, false, true, false])
// countTrue([false, false, false, false])
// countTrue([])



// All About Anonymous Functions: Adding Suffixes
// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

// Examples
// add_ly = add_suffix("ly")

// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"

// add_less = add_suffix("less")

// add_less("fear") ➞ "fearless"
// add_less("ruth") ➞ "ruthless"

// const add_suffix=(a)=>{
//     return let =(b)=>{
//         return console.log(b+a);
//     }
// }

// add_ly = add_suffix("ly")

// add_ly("hopeless")
// //  ➞ "hopelessly"
// add_ly("total")
// //  ➞ "totally"

// add_less = add_suffix("less")

// add_less("fear")
// //  ➞ "fearless"
// add_less("ruth")
// //  ➞ "ruthless"


// 9 august 4 questions
// question 1
// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples
// arrayOfMultiples(7, 5) 
// ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) 
// ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) 
// ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.

// function arrayOfMultiples(num, length){
//     let anArray = []
//     for (let index = 1; index < length+1; index++) {
//         anArray.push(num*index)
//     }
//     return console.log(anArray);
// }

// If we use arrow function then Cannot access 'arrayOfMultiples' before initialization

// question 2
// Return the Objects Keys and Values
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// const keysAndValues =(obja)=>{
//     let keys = [];
//     let values = [];
//     for (const key in obja) {
//         keys.push(key)
//         values.push(obja[key])
//     }
//     return console.log([keys,values]);
// }

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
// Notes
// Remember to sort the keys.


// question 3
// Square Every Digit
// Create a function that squares every digit of a number.

// let squareDigits =(digit)=>{
//     let makeStr = digit.toString();
//     let output = [];
//     for (let index = 0; index < makeStr.length; index++) {
//         output.push(makeStr[index]*makeStr[index])
//     }
//     console.log(output.join(""));
//     console.log(typeof +output);
// }

// Examples
// squareDigits(9119) 
// ➞ 811181

// squareDigits(2483) 
// ➞ 416649

// squareDigits(3212) 
// ➞ 9414
// Notes
// The function receives an integer and must return an integer.



// question 4
// Clone an Array
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

const clone = (arr) => {
    let cloneArray = [...arr, [...arr]]
    return console.log(cloneArray);
}

// Examples
clone([1, 1]) 
// ➞ [1, 1, [1, 1]]

clone([1, 2, 3]) 
// ➞ [1, 2, 3, [1, 2, 3]]

clone(["x", "y"]) 
// ➞ ["x", "y", ["x", "y"]]
// Notes
// N/A