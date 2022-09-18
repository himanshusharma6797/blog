import React from 'react'

export default function ReuseComponent(props) {
  function alertsss() {
    alert('direct withot callback')
  }
  return (
    <div>ReuseComponent
        <h1>User Name is {props.data.name}</h1>
        <h1>User Company is {props.data.company}</h1>
        <h1>User Address is {props.data.address}</h1>
        <button onClick={()=>props.alerting()}>Call the Alert with callback ()=&gt;props.alerting()</button>
        <button onClick={props.alerting}>Call the Alert without callback props.alerting</button>
        {/* <button onClick={alertsss()}>Call without callback alertsss</button> */}
              {/* if we call te function direct alertsss() then it will call automatically without applying any operation */}
        <button onClick={alertsss}>Call without callback alertsss</button>
    </div>
  )
}
