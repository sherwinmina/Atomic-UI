import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from './Button.scss'
// import cx from 'classnames'

let cx = classNames.bind(styles)

class Button extends Component {
  render() {
    let className = cx({
      button: true,
      primary: this.props.primary,
      danger: this.props.danger,
      fullWidth: this.props.fullWidth,
      disabled: this.props.disabled,
      rounded: this.props.rounded
    })

    return <button className={className}>{this.props.children}</button>
  }
}

export default Button
