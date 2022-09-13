import { useState } from "react"
import NoteContext from "./noteContext"
import React from "react"

const NoteState = (props) => {
    const s1 = {
        name:"harshu",
        age:'25',
        class: "7A"
    }

    // making the method to update the state
    const [first, setfirst] = useState(s1)
    const updateState = () => {
        setTimeout(()=>{
            setfirst({
                name:"rahul",
                age:'26',
                class: "8B"
            })
        },2000)
    }

    return(
        // istead of writing this {stateIs:first, updateIs:updateState}
    <NoteContext.Provider value={{state:first, update:updateState}}>
        {/* what we want to provide from this function we add in value */}
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState