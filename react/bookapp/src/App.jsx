import React, { Component } from 'react'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'

export class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Hero />
      </>
    )
  }
}

export default App
