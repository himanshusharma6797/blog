// Async Js
// something is going on but we dont wait for that thing is done

let thePromis = new Promise((resolve, reject) => {
    let num = 2;
    if (num===2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
})

thePromis.then((message)=>{
    console.log("then", message);
}).catch((message)=>{
    console.log("catch", message);
}).finally(()=>{
    console.log("Finally");
})