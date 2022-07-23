import React, { useState } from "react";

export default function BasicFormValidation() {
    // for input values
    const[user, setUser]= useState("")
    const[password, setPassword]= useState("")
    // for password
    const[userErr, setUserErr]= useState(false)
    const[passwordErr, setPasswordErr]= useState(false)

    function submitHandler(e){
        e.preventDefault();
        if (user.length<3||password.length<3) {
            alert("type correct value");
        } else {
            alert("User logged in");
        }
    }
    function userHandler(ev){
        let value = ev.target.value;
        if (value.length<3) {
            setUserErr(true)
        }else{
            setUserErr(false)
        }
        setUser(value);
    }
    function passHandler(ev){
        let value = ev.target.value;
        if (value.length<3) {
            setPasswordErr(true)
        }else{
            setPasswordErr(false)
        }
        setPassword(value)
    }
    return (
    <div> 
        <h1>BasicFormValidation</h1> 
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter User Id" onChange={userHandler}/>
            {userErr?<h3>This is invalid user</h3>:null}
            <br/><br/>
            <input type="password" placeholder="Enter User Password" onChange={passHandler}/>
            {passwordErr?<h3>This is invalid password</h3>:null}
            <br/><br/>
            <button>one submit</button>
            <br/><br/>
            <button>two submit</button>
            <br/><br/>
            <button>three submit</button>
            <br/><br/>
            <button>four submit</button>
        </form>
    </div>);
}