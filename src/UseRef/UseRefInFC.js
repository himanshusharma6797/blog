import React, { useRef } from 'react'

export default function UseRefInCC() {
    let iAmUsingRef = useRef();
    function forRefOnClick(){
        iAmUsingRef.current.value = "11007 ruppe"
        iAmUsingRef.current.focus();
        // focus is function 
        iAmUsingRef.current.style.backgroundColor = "Black";
        iAmUsingRef.current.style.color = "White";
    }
  return (
    <div>UseRef In CC
        <input type="text" ref={iAmUsingRef}/>
        <button onClick={forRefOnClick}>Update By Ref</button>
    </div>
  )
}
