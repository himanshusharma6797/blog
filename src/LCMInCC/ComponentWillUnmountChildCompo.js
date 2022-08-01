import React, { Component } from 'react'

export default class ComponentWillUnmountChildCompo extends Component {
    componentWillUnmount(){
        // after the component is removed or unmount then this functio will run
        console.log("componentWillUnmount is called");
    }
  render() {
    return (
      <><h1>Component Will Unmount Child</h1></>
    )
  }
}
