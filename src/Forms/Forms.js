import { useState } from "react";

export default function Forms(){
    const[name, setName]=useState("");
    const[selectMovies, setSelectMovies]=useState("");
    const[tNC, setTNC]=useState(false);
    function getFormData(ev){
        ev.preventDefault();
        console.log("onSubmit is working");
        console.log("Name: ",name);
        console.log("Movie: ",selectMovies);
        console.log("T&C:",tNC);
    }
    function clearform(){
        setName("");
        setSelectMovies("");
        setTNC(false);
        console.log("Clear is working");
        console.log("Name: ",name);
        console.log("Movie: ",selectMovies);
        console.log("T&C",tNC);
    }

    return(<>
    <form onSubmit={getFormData}>
        <label htmlFor="name">Enter Name: </label>
        <input id="name" type={"text"} name="yourName" onChange={(e)=>{setName(e.target.value);}}/>    
        <br></br>
        <label htmlFor="movies">Select Favouraite Movie</label>
        <select id="movies" onChange={(e)=>setSelectMovies(e.target.value)}>
            <option>Select Option</option>
            <option>Marvel</option>
            <option>DC</option>
        </select>
        <br></br>
        <input type="checkbox" onChange={(e)=>setTNC(e.target.checked)}/><span>Accept the term & Conditions</span>
        <br></br>
        <button type="Submit">Submit</button>
        <br></br>
        <button type="button" onClick={clearform}>Clear</button>
    </form>
    </>)
}
