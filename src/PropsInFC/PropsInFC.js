import React from 'react'

export default function PropsInFC(props) {
  return (
    <>
    <h1>PropsInFC</h1>
    {/* we can not pass only props <h1>{props}</h1> */}
    {/* Uncaught Error: Objects are not valid as a React child (found: object with keys {address, phone}). If you meant to render a collection of children, use an array instead. */}
    <h1>{props.name}</h1>
    <h2>{props.email}</h2>
    <h3>{props.otherData.address}</h3>
    <h3>{props.otherData.phone}</h3>
    </>
  )
}
