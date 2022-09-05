import React, { useEffect, useRef } from 'react'
// for getting previous props we need to acces 2 things useEffect and useRef

export default function PreviousProps(props) {
    const previousProps = useRef()
    // use ref will take last value from the dom
    useEffect(()=>{
        // useeffect will run before updating the current value
        // so this will store the last value
        previousProps.current = props.myCount
    })
    // let previousVal = previousProps.current
  return (
    <div>
        <h1>Current Props value {props.myCount}</h1>
        <h1>Previous Props value {previousProps.current}</h1>
    </div>
  )
}
