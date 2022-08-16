// converting objects to array
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

// making the array from the keys of the object
let personKeys = Object.keys(person)
console.log("array from the keys of the object",personKeys);

// making the array from the values of the object
let personValues = Object.values(person)
console.log("array from the values of the object",personValues);