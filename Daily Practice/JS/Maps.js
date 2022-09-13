// Maps
// map is an iterable

// store data in order fasion

// store key value pairs (like object)
// duplicates keys are not allowed like object

// difference between map and objects

// object can only have string or symbol as key

// in map we can have any thing as key like array, number, string

// example object
// this syntax is called object literals
// because the key will always in the string
// const person = {
//     name:'him',
//     age:25,
//     1:'one'
//     // this one is also string
// }
// // we can get the keys in two ways
// console.log(person.name);
// console.log(person["name"]);

// console.log(typeof person['1']);



// const person = new Map()
// we can also declare by this syntax
// const person = new Map(
//     ['firstName','Himanshu'],
//     ['lastName','Sharm'],
//     [1,'ek'],
//     [[1,2,3],'ek do teen'],
//     [{hi:'kya'},'objaa']
//     )
// person.set('firstName','Himanshu')
// person.set('lastName','Sharm')
// // we can put any type of key data type
// person.set(1,'ek')
// person.set([1,2,3],'ek do teen')
// person.set({hi:'kya'},'objaa')

// // order is gurenteed
// console.log(person);

// // for access to the values of keys in map it is not just like object it is little different
// // console.log(person.get('firstName'));
// // console.log(person.get('lastName'));
// // console.log(person.get(1));

// // // for all keys
// // console.log(person.keys());

// // for(let i of person.keys()){
// //     console.log(i, typeof i);
// // }

// // for accessing the key and value
// for (const [key, value] of person) {
//     // console.log(Array.isArray(key));
//     // they provide us in the key value pair so we need to use destructuring
//     console.log('keys',key);
//     console.log('values',value);
// }


// realistic example of map
// using object in the map

const person1 = {
    id:'007',
    firstname:'Himanshu'
}
const person2 = {
    id:'006',
    firstname:'Himanshi'
}
const additionaInfo = new Map()
additionaInfo.set(person1,{age:22,gender:'male'})
additionaInfo.set(person2,{age:25,gender:'female'})

console.log(person1.id);
console.log(additionaInfo.get(person1).gender);
console.log(additionaInfo.get(person2).gender);