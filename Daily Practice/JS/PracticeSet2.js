// Write a program to print the marks of a student in an object using for loop
let marks={
    mere:99,
    tere:9,
    uske:49,
    iske:69
}

// Object.keys(objectName)=> this will provide the array
// this will provide the object all keys and we can use length for cal. lenth of the object
for(let i = 0;i<Object.keys(marks).length;i++){
    console.log(`The marks of ${Object.keys(marks)[i]} are ${marks[Object.keys(marks)[i]]}.`);
}
// this is lenthy method to solve this problem that is why we are using for in loop 
console.log(Object.keys(marks));

// the preferd option
for(let key in marks){
    console.log(`The marks of ${key} are ${marks[key]}.`);
}

// write a program to print "try again" until the user acting the correct number

