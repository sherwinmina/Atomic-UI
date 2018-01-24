import React, { Component } from 'react'
import { Button, NavBar } from '../atomic-ui'

import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar>
            <div>About</div>
            <div>Work</div>
            <div>Contact</div>
          </NavBar>
        </div>
        <Button>Press Me</Button>
        <Button primary>Primary</Button>
        <Button fullWidth>Full Width</Button>
        <Button danger>Danger</Button>
        <Button disabled>Disabled</Button>
        <Button rounded>Rounded</Button>
      </div>
    )
  }
}

export default App
