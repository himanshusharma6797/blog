import React from 'react'

export default function ReuseComponent(props) {
  return (
    <div>ReuseComponent
        <h1>User Name is {props.data.name}</h1>
        <h1>User Company is {props.data.company}</h1>
        <h1>User Address is {props.data.address}</h1>
        <button onClick={()=>props.alerting()}>Call the Alert with callback ()=&gt;props.alerting()</button>
        <button onClick={props.alerting}>Call the Alert without callback props.alerting</button>
    </div>
  )
}
