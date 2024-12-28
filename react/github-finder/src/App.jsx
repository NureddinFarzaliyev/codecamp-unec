import React from 'react'
import { Routes, Route } from 'react-router'
import Search from './components/search/Search'
import Profile from './components/profile/Profile'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <div className='bg-bg min-h-dvh fira-code text-white'>
    <Nav />
    <Routes>
      <Route path='/' element={<Search />} />
      <Route path='/:username' element={<Profile />} />
    </Routes>
    </div>
  )
}

export default App
