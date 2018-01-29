import React from 'react'
import PropTypes from 'prop-types'

const List = props => {
  return <div>{props.map(item => <div>{item}</div>)}</div>
}

List.PropTypes = {}

export default List
