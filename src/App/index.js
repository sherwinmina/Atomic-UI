import React, { Component } from 'react'
import { Button } from '../atomic-ui'

import styles from './App.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>Hello</header>
        <p className="App-intro">hello</p>
        <Button>Press Me</Button>
        <Button primary>Primary</Button>
        <Button fullWidth>Full Width</Button>
        <Button danger>Danger</Button>
        <Button disabled>Disabled</Button>
      </div>
    )
  }
}

export default App
