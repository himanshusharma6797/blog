// Neasted Destructuring for onject

let meriInfo = {
    naam:"Himanshu",
    age:25,
    pata:{
        flateNumber:'2B',
        appartment:'SJB',
        colony:'jaganath puri',
        locality:'Shree Krishna Janam Bhumi'
    }
}

let {naam:myName, age, pata:{flateNumber,appartment,colony,locality}} = meriInfo

console.log(myName);
console.log(age);
console.log(flateNumber);
console.log(appartment);
console.log(colony);
console.log(locality);

function printUser({naam, age}) {
    // passing whole object we take the perticular property by destructuring
    console.log('name',naam);
    console.log('age',age);
}

printUser(meriInfo)