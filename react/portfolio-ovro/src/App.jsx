import React, { useEffect, useState } from 'react'
import Nav from './nav/Nav'
import Profile from './profile/Profile'
import Sections from './sections/Sections'
import Header from './header/Header'
import BgVideo from './ui/BgVideo'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Cursor from './ui/Cursor'

const App = () => {

  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-out-cubic",
      delay: 200,
    });
  }, []);

  return (
    <div className={`${isDark ? 'dark' : ''} px-2 md:px-10 xl:px-32`}>
      <Cursor />
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
          <Sections isDark={isDark} />
        </div>
      </div>
    </div>
  )
}

export default App
