import React, { useState } from 'react'
import Nav from './nav/Nav'
import Profile from './profile/Profile'
import Sections from './sections/Sections'
import Header from './header/Header'
import BgVideo from './ui/BgVideo'


const App = () => {

  const [isDark, setIsDark] = useState(true)

  return (
    <div className={`${isDark ? 'dark' : ''} px-2 md:px-10 xl:px-32`}>
      <BgVideo />
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className='relative md:grid grid-cols-10 gap-3'>
        {/* <section> elements with corresponding ids */}
        <div className='relative w-full hidden md:block'>
          <Nav />
        </div>
        <div className='relative w-full col-span-3 2xl:col-span-2'>
          <Profile />
        </div>
        <div className='col-span-6 2xl:col-span-7'>
          <Sections />
        </div>
      </div>
    </div>
  )
}

export default App
