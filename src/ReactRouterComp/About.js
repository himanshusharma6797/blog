import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import noteContext from '../Context/notes/noteContext'

export default function About() {
  // here we use context api
  const a = useContext(noteContext)
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, [])
  

  return (
    <div>
      About
      <h2>This is about {a.state.name} and age is {a.state.age} and class is {a.state.class}</h2>
        <Link to={"/user/him"} state={{harshu:"king",pusrla:"queen"}}>him</Link>
        <Link to={"/user/nish"}>nish</Link>
        <Link to={"/user/kan"}>kan</Link>
        <Link to={"/user/par"}>par</Link>
        <Link to={"/user/sid"}>sid</Link>
    </div>
  )
}
