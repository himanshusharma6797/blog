import React, { forwardRef } from 'react'

function FrowardRef(props,refs) {
    // we can use ref from parant component to child by the secons parameter of the functional component not props, that is ref
  return (
    <div>
        FrowardRef
        <input ref={refs}/>
    </div>
  )
}

export default forwardRef(FrowardRef)