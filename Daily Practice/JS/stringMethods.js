// // slice
// let aString = "Sabka Baap Hu Mai"

// console.log(aString.slice(6));
// // this will print all string after 6 index till the end
// console.log(aString.slice(1,10));
// console.log(aString);
// // the first argument will starting one from where the charater is included 
// // but the second argument is not included before that characer will included

// // Replace
// console.log(aString.replace("Sabka","Duniya Ka"));
// // we can replace the string with any string there is no limitation for the character like we should replace 10 to 10 characters

// // Concatination
// let aSecondString = "Aur Shivji Mere Baap Hai"
// console.log(aString.concat(aSecondString," Jai Bhole Ki", "Shree Shivaye Namastubhyam", "Om Namah Shivaye"));

// // Remove White Space
// let whiteSpaceHatao = "      Himanshu                     ";
// console.log(whiteSpaceHatao.trim());

// // Use a for loop to print a string
// let meraDost = "Hariom Verma";
// for (let i = 0; i < meraDost.length; i++) {
//     console.log(meraDost[i]);
// }

// // string is immutable
// meraDost[0] = "G" // we can not change string it is not possible
// console.log("String are Immutable",meraDost);
// // string will never changed when we use method in string it returns new string always 




// string replace words
// let naam = 'himanshu';

// function replaceWord(str) {
//     let newNameArr = str.split('')
//     for(let i=0;i< newNameArr.length;i++){
//         if (newNameArr[i] === 'h') {
//             newNameArr[i] = 'H'
//         }
//     }
//     let stringFinal = newNameArr.join('')
//     return stringFinal
// }

// console.log(replaceWord(naam));


// replace character
// let newStr = 'himanshu'
// let newKiNew = newStr.replace(/h/g,'H')
// console.log(newKiNew);