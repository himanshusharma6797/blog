import React, { useState } from 'react'

export default function ControlledComponentInFC() {
    // when we control input fields throw state except DOM
    // then it is called Control Component
    const [value, setValue] = useState("Apna naam dalo")
    const [valueTwo, setValueTwo] = useState("Apne Baap ka naam dalo")
    const onChangeValue = (ev) => {
        setValue(ev.target.value)
    }
    const onChangeValueTwo = (ev) => {
        setValueTwo(ev.target.value)
    }
  return (
    <div>
        Controlled Component In FC
        <h1>Naam: {value}</h1>
        <input type="text" value={value} onChange={onChangeValue} />
        <h1>Baap ka Naam: {valueTwo}</h1>
        <input type="text" defaultValue={valueTwo} onChange={onChangeValueTwo} />
    </div>
  )
}
