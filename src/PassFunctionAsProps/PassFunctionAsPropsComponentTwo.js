import React from 'react'

export default function PassFunctionAsPropsComponentTwo(props) {
  return (
    <><h1>PassFunctionAsPropsComponentTwo</h1>
    {/* we can use it in other component also same functionas props */}
    <button onClick={props.functionAsProps}>Click me</button>
    </>
  )
}
