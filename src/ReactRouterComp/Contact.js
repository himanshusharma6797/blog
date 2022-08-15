import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
        <h1>Contact Page</h1>
        <h2>Here we have some business</h2>
        <Link to={'channel'}>Channel</Link>
        <Link to={'company'}>company</Link>
        <Link to={'other'}>other</Link>
        <Outlet/>
    </div>
  )
}
