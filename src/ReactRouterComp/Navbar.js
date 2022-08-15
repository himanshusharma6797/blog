import React from 'react'
import {NavLink} from 'react-router-dom';
// import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <ul className='navbarul'>
        <li>
          {/* we can not give className to Link to use className for link replace it with NavLink */}
        {/* <NavLink className={"navbarLink"} style={{backgroundColor:"lightgreen"}} to={"/"}>React Tutorial</NavLink> */}
        {/* applying direct style to it */}
        <NavLink className={"navbarLink"} style={({isActive})=>{return{backgroundColor: isActive?"black":"#5d626e"}}} to={"/"}>React Tutorial</NavLink>
        {/* we can also have second way to use active Link by using style direct */}
        </li>
        <li>
        <NavLink className={"navbarLink"} style={({isActive})=>{return{backgroundColor: isActive?"black":"#5d626e"}}} to={"/home"}>Home</NavLink>
        </li>
        <li>
        <NavLink className={"navbarLink"} style={({isActive})=>{return{backgroundColor: isActive?"black":"#5d626e"}}} to={"/about"}>About</NavLink>
        </li>
        {/* <Link className={"navbarLink"} style={({isActive})=>{return{backgroundColor: isActive?"black":"#5d626e"}}} to={"/about"}>About</Link> */}
        {/* no className and no style in Link */}
        <li>
        <NavLink className={"navbarLink"} style={({isActive})=>{return{backgroundColor: isActive?"black":"#5d626e"}}} to={"/filter"}>Filter</NavLink>
        </li>
        <li>
        <NavLink className={"navbarLink"} style={({isActive})=>{return{backgroundColor: isActive?"black":"#5d626e"}}} to={"/contact/"}>Contact</NavLink>
        </li>
      </ul>
        {/* anchor tag */}
        {/* <h2>Anchor Tag</h2>
        <a href={"/"}>Main Home</a>
        <a href={"/home"}>Home</a>
        <a href={"/about"}>About</a> */}
        {/* anchor working same as link but refereshing when we clicking on it */}
    </>
  )
}
