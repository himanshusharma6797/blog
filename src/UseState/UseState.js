import { useState } from "react"


export default function UseState(){
    // hooks in useState and we need to import useState from react
    const [data, setData]=useState("By Default")
    // state manage by useState
    const [number, setNumber]=useState(0);
    // const agfs = 0;
    function onClicking(){
        setData("Change after clicking by useState");
    }
    const onClickingNumber=()=>{
        setNumber(number + 1);
    }
    
    return(<>
        <h1>{data}</h1>
        <button onClick={onClicking}>On Click</button>
        <h2>{number}</h2>
        <button onClick={onClickingNumber}>Click me</button>
    </>)
}