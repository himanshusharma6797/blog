import React, { Component, createRef } from 'react'

export default class RefInCC extends Component {
    constructor(){
        super();
        this.myRef = createRef();
        // the whole dom is in this variable myRef
    }
    componentDidMount(){
        console.log(this.myRef.current.value = "2 Lakhs");
    }
    getVal(){
        console.log(this.myRef.current.value);
        // for getting the value
        // we can also give the color in ref
        this.myRef.current.style.backgroundColor = "black"
        this.myRef.current.style.color = "white"
    }
  render() {
    return (
      <div>RefInCC
        <input type="text" ref={this.myRef}/>
        <button onClick={()=>this.getVal()}>Click to get whole DOM</button>
      </div>
    )
  }
}
