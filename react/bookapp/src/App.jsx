import React, { Component } from 'react'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import BigSlider from './components/slider/BigSlider'

export class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Hero />
        <BigSlider />
      </>
    )
  }
}

export default App
