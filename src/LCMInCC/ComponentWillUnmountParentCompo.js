import React, { Component } from 'react'
import ComponentWillUnmountChildCompo from './ComponentWillUnmountChildCompo';

export default class ComponentWillUnmountParentCompo extends Component {
    constructor(){
        super();
        this.state={
            toggle:true
        }
    }
  render() {
    return (
    <div>
        ComponentWillUnmountParentCompo
        {this.state.toggle?<ComponentWillUnmountChildCompo/>:<h1>The Child Component is Removed</h1>}
        <button onClick={()=>this.setState({toggle:!this.state.toggle})}>Toggle Child Component</button>
    </div>
    )
  }
}
