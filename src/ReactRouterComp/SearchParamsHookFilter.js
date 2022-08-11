import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SearchParamsHookFilter() {
    // get these params
    const [searchParams, setSearchParam]=useSearchParams();
    console.log(searchParams.get('age'));
    console.log(searchParams.get('city'));
    const age = searchParams.get('age')
    const city = searchParams.get('city')
  return (
    <div>SearchParams Hook Filter
        <h1>Age is: {age}</h1>
        <h1>City is: {city}</h1>
        <input type={"text"} onChange={(e)=>{setSearchParam({inputText:e.target.value,age:34})}} placeholder="enter text for search params" />
        {/* we can also add other keys and merge */}
        <button onClick={()=>setSearchParam({age:50, city:"MTR"})}>Click to change the age and city in the query params</button>
    </div>
  )
}
