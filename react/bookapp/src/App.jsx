import React, { Component } from 'react'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import BigSlider from './components/slider/BigSlider'
import Services from './components/services/Services'
import SmallSlider from './components/slider/SmallSlider'
import Reviews from './components/review/Reviews'

export class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Hero />
        <BigSlider />
        <Services />
        <SmallSlider />
        <Reviews />

        <div className='mt-44'></div>
      </>
    )
  }
}

export default App
