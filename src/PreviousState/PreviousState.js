import React, { useState } from 'react'

export default function PreviousState() {
    const [count, setCount] = useState(0);
    const [countTow, setCountTwo] = useState(0);

    let updateCountTwo = () => {
        let random = Math.floor(Math.random()*10)
        setCountTwo((pre)=>{
            console.log(pre);
            return random
        })
    }

    let updateCount = () => {
        // if we update setCount inside the for loop then it will not get count value because the execution of for is already done
        // to avoid this we can use pre 
        for (let i = 0; i < 5; i++) {
            setCount((pre) => pre + 1)
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={updateCount}>Click for update count</button>
            <h1>{countTow}</h1>
            <button onClick={updateCountTwo}>Click for update count</button>
        </div>
    )
}
