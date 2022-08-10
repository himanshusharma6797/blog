import React, { useRef } from 'react'

export default function UncontrolledComponentInFC() {
    // here we are using dom manipulation
    const inputOne = useRef();
    const inputTwo = useRef();
    
    function submit(ev) {
        const inputThree = document.getElementById('idInputThree').value;
        console.log("input one",inputOne.current.value);
        console.log("input two",inputTwo.current.value);
        console.log("input three",inputThree);
    }
  return (
    <div>
        Uncontrolled Component In FC
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="text" ref={inputOne} /><br/><br/>
            <input type="text" ref={inputTwo}/><br/><br/>
            <input type="text" id='idInputThree' />
            <button onClick={submit}>Submit</button>
        </form>
    </div>
  )
}