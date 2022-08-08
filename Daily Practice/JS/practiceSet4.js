// what will be the output
console.log("har\"".length);
// \" this will count as a single character


// problem 2
let str = "mera bharat mahan"

// includes => it returns true or false
console.log(`${str.includes("bharat")?"Yes!":"No!"} Bharat in this string`);

// startsWith => it returns true or false
console.log(`${str.startsWith("mera")?"Yes!":"No!"} Starts with mera`);

// endsWith => it returns true or false
console.log(`${str.endsWith("mahan")?"Yes!":"No!"} Ends with mahan`);


// problem 3
// extracting number from the string and change the type from number to string
let aStr = "Give me the 1000 Rs";
let numberFromStr = +aStr.slice("Give me the ".length,"Give me the 1000 ".length)
console.log(numberFromStr);
console.log(typeof numberFromStr);


// problem 4
// chnage the 4th character of the string
let fr = "Deepika";
console.log(fr.replace("p","n"));