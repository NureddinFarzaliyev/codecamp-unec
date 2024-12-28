import React from 'react'
import { Routes, Route } from 'react-router'
import Search from './components/Search'
import Profile from './components/Profile'

const App = () => {
  return (
    // ! NAV
    <Routes>
      <Route path='/' element={<Search />} />
      <Route path='/:username' element={<Profile />} />
    </Routes>
  )
}

export default App
