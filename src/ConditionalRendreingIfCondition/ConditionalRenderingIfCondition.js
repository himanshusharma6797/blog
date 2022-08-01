// import { useState } from "react";
import React from "react";

export default function ConditionalRenderingIfCondition() {

// this is not a write way to do in react
//   const [logged, setLogged] = useState(true);
const logged = 3;

//   if (logged) {
//     return <div>Logged In</div>;
//   } else {
    //     return <div>Logged Out</div>;
    //   }
    // console.log(setLogged(true));
    
    // The right way to use ternary oprator
    return (<div>
        {logged===1?<h1>Logged User 1</h1>
        :logged===2?<h1>Logged User 2</h1>
        :logged===3?<h1>Logged User 3</h1>
        :<h1>Logged Not Valid</h1>}
        </div>)
}