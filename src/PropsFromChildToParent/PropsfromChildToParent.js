import React from 'react'

export default function PropsfromChildToParent(props) {
  return (
    <div>Props from Child To Parent
        <button onClick={()=>props.setDataProps({name:'Tera Baap',age:'jitna Mann'})}>Click to send data from chil to parent</button>
    </div>
  )
}
