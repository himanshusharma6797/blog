import React from 'react'

export default function UseMemo() {
    const [count,setCount]=React.useState(0)
    const [value,setValue]=React.useState(5)
    let multipleCount = React.useMemo(()=>{
        console.log("multipleCount");
        return count*2
    },[count]   // the second parameter is a dependency list what will we want to attached or working with
    )

  return (
      <div>UseMemo
        {console.log("render the component")}
        {/* we can see after the matching the state of count the useMemo is stoped the rendering */}
        <h1>Count {count}</h1>
        <button onClick={()=>setCount(22)}>inc count</button>
        <h1>Value {value}</h1>
        <button onClick={()=>setValue(value*2)}>inc value</button>
        <h1>Multiple count working only {multipleCount}</h1>
    </div>
  )
}
