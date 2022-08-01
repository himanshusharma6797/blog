import React, { useEffect, useState } from 'react'

export default function UseEffect(props) {
    const [count, setCount]=useState(0);
    const [countTwo, setCountTwo]=useState(0);
    const [countThree, setCountThree]=useState(0);
    // If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
    useEffect(()=>{
        console.log("useEffect count one");
    },[count,countTwo])
    // we can use multiple state in this useEffect second parameter array
    useEffect(()=>{
        console.log("useEffect count two");
    },[countTwo])
    useEffect(()=>{
        console.log("useEffect count three");
    },[countThree])
    // this will update inly for the state name which we are used in the array
    // and we can use more then one useState 

    useEffect(()=>{
        console.log("useEffect props counter");
    },[props.counttter])
    useEffect(()=>{
        console.log("useEffect props datater");
    },[props.datta])

  return (
    <div>
        useEffect for state {count}
    <button onClick={()=>setCount(count+1)}>Counter Update</button>
        useEffect for state {countTwo}
    <button onClick={()=>setCountTwo(countTwo+1)}>Counter Update</button>
        useEffect for state {countThree}
    <button onClick={()=>setCountThree(countThree+1)}>Counter Update</button>

        useEffect for props count {props.counttter}
        useEffect for props data {props.datta}
    </div>
  )
}
