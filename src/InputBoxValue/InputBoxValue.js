import React, { useState } from 'react'

export default function InputBoxValue() {
    const [value, setValue]=useState("InputBoxValue");
    const [change, setChange]=useState(false);

    const handleOnChange=(event)=>{
        setValue(event.target.value);
        setChange(false);
    }
    const handleOnClick=()=>{
        setChange(true);
    }
  return (
    <>
    {
        change?<h1>{value}</h1>:null
    }
    <input type="text" onChange={handleOnChange}></input>
    <button onClick={()=>handleOnClick()}>Click to Print the Value</button>
    {/* <button onChange={handleOnChange}>{value}</button> */}
    </>
  )
}
