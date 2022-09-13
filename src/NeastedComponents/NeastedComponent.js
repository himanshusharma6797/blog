import React from 'react'
import NeastedComponentTwo from './NeastedComponentTwo/NeastedComponentTwo'

export default function NeastedComponent(props) {

  return (
    <div>
        Neasted Component
        <h1>{props.data}</h1>
        <NeastedComponentTwo data={props.data} getdatta={props.getData}/>
    </div>
  )
}
