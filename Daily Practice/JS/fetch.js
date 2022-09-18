function callingApi(){
    url = "himanshu.txt"
    fetch(url).then((resp)=>
        resp.text()
        // resp.json();
    ).then((result)=>{
        console.log(result);
    }).catch(()=>{
        console.log("catch error");
    }).finally(()=>{
        console.log("Finally too chalna he chalna hai");
    })
}
callingApi()