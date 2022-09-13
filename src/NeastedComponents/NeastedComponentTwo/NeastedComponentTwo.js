import React from 'react'

export default function NeastedComponentTwo(props) {
    let myData = {
        name:'Rahul Sharma',
        age:26,
    }
  return (
    <div>Neasted Component Two
        <h2 onLoad={props.getDatta(myData)}>{props.data}</h2>
    </div>
  )
}
