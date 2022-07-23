// Always import react in class based components
import React from "react"
import PropsInCC from "../PropsInCC/PropsInCC";
// we can also write like this "class ClassComponets extends Component" but need to import {Component} 
class ClassComponets extends React.Component{
    // const r =3
    // console.log();
    // we can not declare variable and console inside class component directly 
    constructor(){
        super();
        // super is functionality that is used by Javascript 
        // when ever we extend the class then the parent constructor should be called
        // super is for using this keyword
        this.state={
            data:'Himanshu Babu',
            name:"Anil"
        }
        // we can not declare 2 state otherwise it will take the new one only
        // this.state={
        // }
    }
    apple(){
        // alert("Apple");
        this.setState({data:"Ghosh Babu"});
        console.log(this.state);
    }
    callName(){
        this.setState({name:"Sidhu"})
        console.log(this.state);
    }
    // render function is importent in class based components
    render()
    {
        // console.log(this.props);
        return (<>
        <h1>Class Based Component</h1>
        <h2>{this.state.data}</h2>
        {/* always call function in the button onclick inside the arrow function */}
        <button onClick={()=>this.apple()}>Harshu Babu Please Click</button>

        <PropsInCC name={this.state.name} email="bbc@gmail.com"/>
        <button onClick={()=>this.callName()}>Anil to Sidhu</button>
        </>)

    }

}


export default ClassComponets;