import React from 'react'
import './assets/sass/style.scss'
import TopNav from './components/nav/TopNav'
import Nav from './components/nav/Nav'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Nav />
    </BrowserRouter>
  )
}

export default App
