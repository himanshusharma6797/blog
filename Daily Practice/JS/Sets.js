// Sets are iterable
// store data
// sets also have there own method
// unique items only (no duplicates allow)

// no index based access
// order is not guaranteed

let anArr = [1,2,4,34]
console.log(typeof anArr);


// making of set
let setss = new Set([1,2,3,4,4,4,4])
// unique items only (no duplicates allow)
console.log(typeof setss);
console.log(setss[1]);
// no index based access it shows undefined

// we can also write string because string is also iterable
let strSet = new Set("Hi him ")
console.log(strSet);

// or mostly we use empty set after we need to add the element we can add
let emptySet = new Set()
emptySet.add(1,2,4,56)
emptySet.add([1,2,4,56])
emptySet.add('1,2,4,56')
// but by add method we can add singli item at time
emptySet.add(anArr)
// we can add same element or same array with same address
emptySet.add(anArr)
// we can add same array with different address
emptySet.add([1,2,3])
emptySet.add([1,2,3])

console.log(emptySet);


// for checking that the ement is exist or not in the set then
if (
    emptySet.has(1) // it return boolean value
    ) {
        console.log('yes 1 is exist in the given set');
    }else{
        console.log('no 1 is not exist in the given set');
    }

// checking sets are iterable or not
let setsIterableOrNot = new Set([13,22,3,44])
for (const iterator of setsIterableOrNot) {
    console.log(`${iterator}`);
}

// for unique elements
let newArray = [1,2,3,4,8,6,7,8,3,2]
let uniqueElements = new Set(newArray)
console.log(uniqueElements);
let arr = [...uniqueElements];
console.log(arr);