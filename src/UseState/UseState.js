import { useState } from "react"
import React from "react";

// the useState is a hook 
// for using LCM in functional components we using hooks
// by hooks we using CC features in FC such as state, LC, Pure component, etc 


export default function UseState(){
    // hooks in useState and we need to import useState from react
    const [data, setData]=useState("By Default")    // this is called destructuring
    // state manage by useState
    const [number, setNumber]=useState(0);
    // const agfs = 0;
    function onClicking(){
        setData("Change after clicking by useState");
    }
    const onClickingNumber=(props)=>{
        setNumber(number + 1);
    }
    
    return(<>
        <h1>{data}</h1>
        <button onClick={onClicking}>On Click</button>
        <h2>{number}</h2>
        <button onClick={onClickingNumber}>Click me</button>
    </>)
}