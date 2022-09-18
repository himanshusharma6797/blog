import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function ParamsUsers() {
    const params = useParams();
    const {naam} = params;
    // the object key must be same as in route 
    console.log('params',params);

    // useLocation Hook => This hook returns the location object used by the react-router. This object represents the current URL and is immutable. Whenever the URL changes, the useLocation() hook returns a newly updated location object.
    let location = useLocation();
    console.log("useLocation Hook",location);
  return (
    <div>Params Users
        <h1>This is {params.naam}</h1>
        {/* we can do directly also */}
        <h1>This is {naam}'s Page</h1>
    </div>
  )
}
