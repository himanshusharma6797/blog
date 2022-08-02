const obja = {
    name:"himanshu sharma",
    number:8445228334,
    address:"flat number 2b, shree ji baba apartment"
}

// add for in loop to treverse all the values
for(keys in obja){
    // for Key
    // console.log("Key ",keys);
    // for values
    console.log("value", obja[keys]);
}