let num = [123,345,457,68,45,"harshu"]

// making array into string
let str = num.toString()
console.log(str);
console.log(typeof num);

// join method
// it is using a seprator to join array
let num2 = [1,2,4,4,7,8]
let joinArrayMethod = num2.join("-")
// we can use seperator if not then it will separate by , comma
console.log(joinArrayMethod);

// methods that change the same Array
// 1 pop
// 2 push
// 3 shift
// 4 unshift
// 5 splice

// delete
console.log(num2.length);
console.log(delete num2[1]);
console.log(delete num2[5]);
console.log(num2);
console.log(num2.length);

// concat
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

console.log(arr1.concat(arr2,arr3,0));
// concat multiple array and element 
console.log(arr1);
// does not affect old array

// sort
let a1 = [233,446,345,5234,666,347,348];
let a2 = [233,446,345,5234,666,347,348];
console.log(a1.reverse());
function compareInAscendingOrder(a,b){
    return a-b;
    // for ascencding order
}
function compareInDescendingOrder(a,b){
    return b-a;
    // for descencding order
}
// modify the orignal array
// taking compare function
console.log(a1.sort(compareInAscendingOrder));
console.log(a2.sort(compareInDescendingOrder));


// slice
let anarrr = [1,24,86,7];
console.log(anarrr.slice(2));
// uthane k liye use krte hai 
console.log(anarrr);