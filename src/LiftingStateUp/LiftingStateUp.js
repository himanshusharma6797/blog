import React from 'react'

export default function LiftingStateUp(props) {
    const meraData={name:"Harshu",age:25,gender:"Male"}
    // we can lift the data may be it state, const, var, let, prop, any type.
  return (
    <div onLoad={props.data(meraData)}>Lifting State Up</div>
  )
}
