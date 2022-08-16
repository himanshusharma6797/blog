import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
    const {Component} = props
    // the variable must be same as we pass as a props

    // checking that user is loged i or not by the setting key 
    //  checking throw the useEffect
    // and useNavigate
    let navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login')
        // if login have or not
        if(!login){
            navigate('/login')
        }
    })
  return (
    <div>
        {/* Protected Route */}
        <Component/>
    </div>
  )
}
