import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    constructor(){
        super();
        console.log("constructor");
        this.state={
            bigB:"Who is your big 'B'?"
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
  render() {
    console.log("render");
    return (
      <div>ComponentDidMount
        <h1>{this.state.bigB}</h1>
        <button onClick={()=>this.setState({bigB:"Hari Om The Don"})}>Know more</button>
      </div>
    )
  }
}
