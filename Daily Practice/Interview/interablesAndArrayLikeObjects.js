// iterables
// in which we can apply for of loop
// like string and array

// object is not iterable 
// loop in object
const object = { a: 1, b: 2, c: 3 };
// we can use for of on object because object is not iterable
// for (const iterator of object) {
//     console.log(`${iterator}: ${object[iterator]}`);
// }
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


// array like object
// those have length properties
// which can we access by index
// exaple string