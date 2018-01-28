import React, { Component } from 'react'
import Proptypes from 'prop-types'

class Input extends Component {
  state = {}
  static PropTypes = {
    title= Proptypes.string
  }

  render() {
    return (
      <div>
        <div title={this.props.title}></div>
        <Input className='input' type="text" />
      </div>
    )
  }
}

export default Input
