import './App.css';
import Users from './Users.js'
import ClassComponents from './ClassComponents/ClassComponents'
import {ComponentWithoutJSX} from './ComponentWithoutJSX/ComponentWithoutJSX.js'
import UseState from './UseState/UseState';
import PropsInFC from './PropsInFC/PropsInFC';
import { useState } from 'react';
import InputBoxValue from './InputBoxValue/InputBoxValue';
import Forms from './Forms/Forms';
import ConditionalRenderingIfCondition from './ConditionalRendreingIfCondition/ConditionalRenderingIfCondition';
import BasicFormValidation from './BasicFormValidation/BasicFormValidation';
import PassFunctionAsProps from './PassFunctionAsProps/PassFunctionAsProps';
import PassFunctionAsPropsComponentTwo from './PassFunctionAsProps/PassFunctionAsPropsComponentTwo';

function App() {
  let myNAme= "Himanshu Ji";

  // make a function and call it by onClick method
  function clickingMethod(){
    alert("On Click is working")
  }

  const[name, setName]=useState("Himanshu JI")
  const onClickUpdateName=()=>{
    setName("Harshu Bhaiya JindaBaad")
  }

  // Hide, Show, and Toggle
  const[toggle, setToggle]=useState(false);
  const[btnTxt, setBtnTxt]=useState("Show Heading");

  // pass function as props
  function dataHandler(){
    alert("chalgo function as props");
  }

  return (
    <div>
    <h1>
      Hello {myNAme}
    </h1>
    <button onClick={clickingMethod}>Click Me</button>
    {/* dont use onClick={clickingMethod()} calling with paranthesis only write the function name */}

    {/* if we want to use direct function then we can also write the arrow function on click*/}
    <button onClick={()=>alert("Arrow Function is working in onClick")}>Click Me Two</button>

    {/* we can function call the function if we are using it in the arrow function */}
    <button onClick={()=>{clickingMethod()}}>Click Me Three</button>

    {/* Changing the variable in onclick un arrow fynction */}
    <button onClick={()=>{myNAme = "Harshu Ji"; alert(`Hello ${myNAme}`)}}>Click Me Four</button>

    <Users/>
    {/* we can also write and call component like this <ClassComponets></ClassComponets> */}
    <ClassComponents names="Anil bhai" email="anilua@test.com"></ClassComponents>
    <ComponentWithoutJSX/>
    <UseState/>
    {/* if we want to pass multiple data  */}
    <PropsInFC name="Baap" email="baap@baap.com" otherData={{address:"kailash", phone:"0"}}/>
    <PropsInFC name={"Beta"} email="beta@baap.com" otherData={{address:"mansarover", phone:"10"}}/>
    <PropsInFC name={name} email="himthekingofpop@baap.com" otherData={{address:"Mathura", phone:"POCO"}}/>
    <button onClick={onClickUpdateName}>Update</button>

    {/* Inputs */}
    <InputBoxValue/>

    {/* Hide, Show, and Toggle */}
    {
      toggle?<h2>Best Rapper in the world</h2>:null
    }
    <button onClick={()=>{setToggle(!toggle);btnTxt==="Show Heading"?setBtnTxt("Hide Heading"):setBtnTxt("Show Heading")}}>{btnTxt}</button>
    <br/><br/>

    {/* Forms */}
    <Forms/>
    <ConditionalRenderingIfCondition/>

    {/* Basic Form Validation */}
    <BasicFormValidation/>

    {/* pass function as props */}
    <div>
    <PassFunctionAsProps functionAsProps={dataHandler}/>
    <PassFunctionAsPropsComponentTwo functionAsProps={dataHandler}/>
    </div>
    </div>
  );
}

export default App;
