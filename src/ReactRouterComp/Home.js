import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  // navigate throw function conditional
  // conditional routing
  const navigateFunction =(url)=>{
    // let val = true;
    // if(val){
    //   navigate('/about')
    // }else{
    //   navigate('/filter')
    // }
    // or we can use esy way to implemet this
    navigate(url)
  }
  
      // useLocation Hook
      let location = useLocation();
      console.log("useLocation Hook",location);
  return (
    <div>Home
      {/* for navigating programmatically */}
      <button onClick={()=>navigateFunction('/about')}>Go to about Page</button>
      <br/>
      <button onClick={()=>navigateFunction('/filter')}>Go to filter Page</button>
    </div>
  )
}
