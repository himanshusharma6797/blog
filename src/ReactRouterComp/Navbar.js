import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>Navbar
        <Link to={"/"}>Main Home</Link>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        {/* anchor tag */}
        <h2>Anchor Tag</h2>
        <a href={"/"}>Main Home</a>
        <a href={"/home"}>Home</a>
        <a href={"/about"}>About</a>
        {/* anchor working same as link but refereshing when we clicking on it */}
    </div>
  )
}
