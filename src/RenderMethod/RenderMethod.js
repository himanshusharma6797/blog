import React, { Component } from 'react'

export default class RenderMethod extends Component {
    constructor(){
        super();
        // super is use for calling the parent constructor
        this.state={
            tag:"dikkat hai bas ek baat ki"
        }
    }
  render() {
    // we can see that the render will run
    // 1 after creating this component and run
    // 2 update in state
    // 3 update in props
    // console.log("render method", this.props.name);
    // console.log("render method", this.state.tag);
    return (
      <div>
        <h1>Render Method in React</h1>
        <h2>{this.props.name}</h2>
        <h1>Tag line is: <span>{this.state.tag}</span></h1>
        <button onClick={()=>this.setState({tag:"gaon mai rehe gaye tau kaware"})}>Change tag</button>
      </div>
    )
  }
}
