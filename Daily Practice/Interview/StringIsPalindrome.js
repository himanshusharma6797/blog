// JavaScript Program to Check Whether a String is Palindrome or Not

let stringPalindromeOrNot = (str) => {
    let lastIndex = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            // we need to check all the condition so we using here not equal
            // otherwise we get always true because it will check only for one time condition then the code returns true and function will terminate
            return false
        }
    }
    return true
}

console.log(stringPalindromeOrNot('ACBCA'));




// other way to check string is palindrom or not
const strPalindromeOrNot = str => {
    let reverseString = str.split('').reverse().join('');
    if (reverseString===str) {
        console.log('String is Palindrome');
    } else {
        console.log('String is Not Palindrome');
    }
}

strPalindromeOrNot('ABCD')