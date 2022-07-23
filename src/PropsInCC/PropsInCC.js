import React, { Component } from 'react'

export default class PropsInCC extends Component {
  render() {
    return (
      <div>PropsInCC
        {/* pasing props in the class based component */}
        <div style={{background:"skyblue", margin:20}}>
        <h2>{this.props.name}</h2>
        <h3>{this.props.email}</h3>
        </div>
      </div>
    )
  }
}
