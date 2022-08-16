import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link, Outlet } from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate();
    let login = () => {
        localStorage.setItem('login',true)
        navigate('/')
    }
    useEffect(()=>{
        let login = localStorage.getItem('login')
        // if login have or not
        if(login){
            navigate('/')
        }
    })
  return (
    <div>
        <h1>Login Page</h1>
        <input type={"text"} placeholder="User Name"/>
        <input type={"password"} placeholder="Password"/>
        <button onClick={login}>Login</button>
    </div>
  )
}
