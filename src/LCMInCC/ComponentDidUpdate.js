import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
    constructor(){
        super();
        console.log("constructor");
        this.state={
            myName:"Hojo",
            count:0
        }
    }
    // there are three parameters for previous props, previous state and snapshot
    // previous means after updating the state and props we can see what is the value now is ther is any change or not
    componentDidUpdate(preProps, preState, snapshot){
        // it will run when we update the states and props
        console.log("ComonentDidUpdate preState",preState, this.state.myName);
        console.log("ComonentDidUpdate preProps",preProps, this.state.myName);
        console.log("ComonentDidUpdate snapshot",snapshot, this.state.myName);
        if (preState.myName===this.state.myName) {
            // alert("Data is matched");
            console.log("Data is matched");
        }
        // if we update setState in componentDidUpdate then it will going in loop
        // to stop this we can use condition
        if (preState.myName==="Hojo") {
            this.setState({myName:"Lushank"})
        }
        if(preState.count<10){
            this.setState({count: this.state.count +1})
        }
    }
    render() {
      console.log("render");
    return (
      <div>
        <h2>ComponentDidUpdate</h2>
        <h3>{this.state.myName} {this.state.count}</h3>
        <button onClick={()=>this.setState({myName:"Tado"})}>Click me for update</button>
      </div>
    )
  }
}