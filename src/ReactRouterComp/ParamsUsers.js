import React from 'react'
import { useParams } from 'react-router-dom'

export default function ParamsUsers() {
    const params = useParams();
    const {naam} = params;
    // the object key must be same as in route 
    console.log(params);
  return (
    <div>Params Users
        <h1>This is {params.naam}</h1>
        {/* we can do directly also */}
        <h1>This is {naam}</h1>
    </div>
  )
}
