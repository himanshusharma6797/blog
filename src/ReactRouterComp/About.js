import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>About
        <Link to={"/user/him"} state={{harshu:"king",pusrla:"queen"}}>him</Link>
        <Link to={"/user/nish"}>nish</Link>
        <Link to={"/user/kan"}>kan</Link>
        <Link to={"/user/par"}>par</Link>
        <Link to={"/user/sid"}>sid</Link>
    </div>
  )
}
