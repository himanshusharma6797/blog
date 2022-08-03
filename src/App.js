import './App.css';
import Users from './Users.js'
import ClassComponents from './ClassComponents/ClassComponents'
import {ComponentWithoutJSX} from './ComponentWithoutJSX/ComponentWithoutJSX.js'
import UseState from './UseState/UseState';
import PropsInFC from './PropsInFC/PropsInFC';
import React, { useState } from 'react';
import InputBoxValue from './InputBoxValue/InputBoxValue';
import Forms from './Forms/Forms';
import ConditionalRenderingIfCondition from './ConditionalRendreingIfCondition/ConditionalRenderingIfCondition';
import BasicFormValidation from './BasicFormValidation/BasicFormValidation';
import PassFunctionAsProps from './PassFunctionAsProps/PassFunctionAsProps';
import PassFunctionAsPropsComponentTwo from './PassFunctionAsProps/PassFunctionAsPropsComponentTwo';
import RenderMethod from './RenderMethod/RenderMethod';
import ComponentDidMount from './LCMInCC/ComponentDidMount';
import ComponentDidUpdate from './LCMInCC/ComponentDidUpdate';
import ShouldComponentUpdate from './LCMInCC/ShouldComponentUpdate';
import ComponentWillUnmountParentCompo from './LCMInCC/ComponentWillUnmountParentCompo';
import UseEffect from './LCMInFC/UseEffect';
import './style.css';
import style from './style.module.css'
// use react-bootstrap
import Button from 'react-bootstrap/Button';
// or
// import {Button} from 'react-bootstrap';


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

  // For Render function
  const [propName, setPropName] = React.useState("Him")

  // For useEffect in the props
  const[data, setData]=useState(69);
  const[count, setCount]=useState(101);

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
    <ClassComponents names="Anil bhai" email="anilua@test.com"><h1>Isse HTML use karinge hum component k beech mai sai by the help of "this.props.children" as a prop pass hoga ye hai Class Component</h1></ClassComponents>
    <ComponentWithoutJSX/>
    <UseState>Isse HTML use karinge hum component k beech mai sai by the help of "this.children" as a prop pass hoga ye hai Functional Component</UseState>
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

    {/* Render method */}
    <RenderMethod name={propName}/>
    <button onClick={()=>setPropName("King")}>Update Name</button>

    {/* LCM in CC */}
    <ComponentDidMount/>
    <ComponentDidUpdate/>
    <ShouldComponentUpdate/>
    <ComponentWillUnmountParentCompo/>

    {/* LCM i FC */}
    <UseEffect datta={data} counttter ={count}/>
    <button onClick={()=>setData(data+1)}>Update Data</button>
    <button onClick={()=>setCount(count+1)}>Update Count</button>

    {/* three types of style 
    1. External 
    2. Inline or the Variable
    3. CSS with module
    */}
    <h1 className='external'>Style in React way 1</h1>
    <h1 style={{backgroundColor:'black',color:'pink'}}>Style in React way 2</h1>
    <h1 className={style.success}>Style in React way 3</h1>

    {/* react bootstrap */}
    <Button variant="outline-primary">Primary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button>
    </div>
  );
}

export default App;
