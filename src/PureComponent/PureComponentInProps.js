import React, { PureComponent } from 'react'

export default class PureComponentInProps extends PureComponent {
  render() {
    return (
      <div>
        <h1>Pure Component In Props {this.props.data}</h1>
        </div>
    )
  }
}
