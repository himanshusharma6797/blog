import React, { Fragment } from 'react'

export default function ReactFragment() {
  return (
    <div>
    Three ways to use react fragment
    <React.Fragment>&lt;React.Fragment&gt;&lt;/React.Fragment&gt;</React.Fragment>
    <Fragment>&lt;Fragment&gt;&lt;/Fragment&gt;</Fragment>
    <>&lt;&gt;&lt;/&gt;</>
    </div>
    // this div is a wrapper and that wrapper called React Fragment
    // or we can use <></> empty element for React Fragment
  )
}
