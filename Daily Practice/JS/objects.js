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

for (const key in person) {
    console.log(key);
    console.log(person[key]);
}

// clone the object using Object.assign
const obj = {
    key1:'Value1',
    key2:'Value2'
}

// we can not directly assign object to another object because both will have same memory aquire 
// and if we change in any object then it will reflect to other object also 
// example
// const obj2 = obj
// for avoiding this we need to clone this
// const obj2 = {...obj}    // one way 
const obj2 = Object.assign({}, obj)   // second way this way is older before the spread operator comes into the picture we are using this way


obj.key3 = 'value3';

console.log(obj);
console.log(obj2);







// optional chaining
let user = {
    name:'himma',
    address:{
        // hNumber:321
    }
}

console.log(user?.name);
console.log(user?.address?.hNumber);
// this ? gives undefine is not exist without proced further