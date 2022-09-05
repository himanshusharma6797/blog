import React, { useState } from 'react'

export default function StateWithObject() {
    const [data, setData] = useState({name:'Himanshu', age:25})
    // in object type value if we edit one of the property then the other property will removed
  return (
    <div>
        <input value={data.name} type='text' placeholder='enter name' onChange={(e)=>setData({name:e.target.value,age:data.age})}/>
        {/* if we have 2,3 property then we can directly write and avoid the error */}
        {/* but what if we have many property */}
        {/* for that we can use ...data spread operator */}
        <input value={data.age} type='text' placeholder='enter age' onChange={(e)=>setData({...data,age:e.target.value})}/>

        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
    </div>
  )
}
