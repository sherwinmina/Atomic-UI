import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from './NavBar.scss'

let cx = classNames.bind(styles)

class NavBar extends Component {
  state = { activeItem: '' }
  handleClick = event => {
    this.setState({ activeItem: event.target.innerHTML })
  }
  render() {
    let className = cx({
      navItems: true,
      active: this.state.activeItems
    })
    return (
      <div className={styles.Nav}>
        <div className={styles.logo}>Logo</div>{' '}
        <div
          className={`${
            this.state.activeItem == 'About'
              ? styles.navItems + ' ' + styles.active
              : styles.navItems
          }`}
          onClick={this.handleClick}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default NavBar
