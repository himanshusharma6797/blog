function callingApi(){
    url = "himanshu.txt"
    fetch(url).then((resp)=>
        resp.text()
        // resp.json();
    ).then((result)=>{
        console.log(result);
    })
}
callingApi()