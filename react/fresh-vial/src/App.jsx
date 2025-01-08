import React from 'react'
import './assets/sass/style.scss'
import TopNav from './components/nav/TopNav'
import Nav from './components/nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
