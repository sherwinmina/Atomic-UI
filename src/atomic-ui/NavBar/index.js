import React, { Component, Children } from 'react'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import styles from './NavBar.scss'

let cx = classNames.bind(styles)

class NavBar extends Component {
  state = { activeItem: '' }

  handleClick = child => {
    this.setState({ activeItem: child.props.children })
    console.log(child.props.children)
    console.log(this.state.activeItem)
  }

  render() {
    // let className = cx({
    //   navItems: true,
    //   active: this.state.activeItems
    // })
    // const items = Children.map(this.props.children, item => <div> {item}</div>)

    return (
      <div className={styles.Nav}>
        <div className={styles.logo}>Logo</div>{' '}
        {React.Children.map(this.props.children, child => (
          <div
            className={
              this.state.activeItem === child.props.children
                ? styles.navItems + ' ' + styles.active
                : styles.navItems
            }
            onClick={this.handleClick.bind(this, child)}
          >
            <div>{child}</div>
          </div>
        ))}
      </div>
    )
  }
}

// NavBar.propTypes = {
//   children: React.PropTypes
// }

// NavBar.defaultProps = {
//   navItems: React.PropTypes.array
// }

export default NavBar
