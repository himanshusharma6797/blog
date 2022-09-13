import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    // this function will stop to re-rendering on update
    shouldComponentUpdate(){
      // this will run if this conditon is true
      if (this.state.count<5) {
          console.log("shouldComponentUpdate",this.state.count);
            return true
        }
        else{
            return false
        }
        // the default condition is always false
    }
  render() {
    return (
      <div>Should Component Update
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button>
      </div>
    )
  }
}
