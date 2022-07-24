import React from 'react'

export default function PassFunctionAsProps(props) {
  return (
    <><h1>PassFunctionAsProps</h1>
    <button onClick={()=>props.functionAsProps()}>Click me</button>
    {/* we can also write in this way */}
    <button onClick={props.functionAsProps}>Click me dobara</button>
    </>
  )
}
