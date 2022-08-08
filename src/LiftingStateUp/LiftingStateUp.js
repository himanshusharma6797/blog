import React from 'react'

export default function LiftingStateUp(props) {
    const meraData={name:"Harshu",age:25,gender:"Male"}
  return (
    <div onLoad={props.data(meraData)}>Lifting State Up</div>
  )
}
