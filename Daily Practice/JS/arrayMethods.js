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