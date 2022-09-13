import React, { useEffect, useState } from 'react'

export default function UseEffect(props) {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const [countThree, setCountThree] = useState(0);
    useEffect(() => {
        console.log('This useEffect is working as an mount the component');
        return () => {
            console.log('The returnin this useEffect will unMount the component');
        }
    }, [])

    // If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
    useEffect(() => {
        console.log("useEffect count one");
        return () => {
            console.log("useEffect count one Unmount")
        }
    }, [count, countTwo])
    // we can use multiple state in this useEffect second parameter array
    useEffect(() => {
        console.log("useEffect count two");
        // return will help to unmount the component
        return () => {
            console.log("useEffect count two Unmount")
        }
    }, [countTwo])
    useEffect(() => {
        console.log("useEffect count three");
        // return will help to unmount the component
        return () => {
            console.log("useEffect count three Unmount")
        }
    }, [countThree])
    // this will update only for the state name which we are used in the array
    // and we can use more then one useState 

    // function that call useEffect inside it we can not do that due to react-hooks/rules-of-hooks
    // const functionCallUseEffect=()=>{
    //     useEffect(()=>{
    //         console.log("useEffect inside the Function");
    //     })
    // }
    // calling useState inside a function we can not do that due to react-hooks/rules-of-hooks
    // useEffect(()=>{
    //     const useEffectCallFunction=()=>{
    //         console.log("Function inside the useEffect");
    //     }
    //     useEffectCallFunction();
    // })

    useEffect(() => {
        console.log("useEffect props counter");
        return () => {
            console.log("useEffect props counter Unmount")
        }
    }, [props.counttter])
    useEffect(() => {
        console.log("useEffect props datater");
        return () => {
            console.log("useEffect props datater Unmount")
        }
    }, [props.datta])

    return (
        <div>
            {/* <button onClick={()=>functionCallUseEffect()}>Function Call useEffect</button> */}

            useEffect for state {count}
            <button onClick={() => setCount(count + 1)}>Counter Update</button>
            useEffect for state {countTwo}
            <button onClick={() => setCountTwo(countTwo + 1)}>Counter Update</button>
            useEffect for state {countThree}
            <button onClick={() => setCountThree(countThree + 1)}>Counter Update</button>

            useEffect for props count {props.counttter}
            useEffect for props data {props.datta}
        </div>
    )
}
