import React, { useState } from 'react'
import Nav from './nav/Nav'
import Profile from './profile/Profile'
import Sections from './sections/Sections'
import Header from './header/Header'


const App = () => {

  const [isDark, setIsDark] = useState(true)

  return (
    <div className={`${isDark ? 'dark' : ''} px-10`}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className='relative md:grid grid-cols-6 gap-3'>
        {/* <section> elements with corresponding ids */}
        <div className='relative w-full hidden md:block'>
          <Nav sectionIdList={['home', 'about-us', 'our-service', 'my-skill', 'portfolio', 'testimonial', 'our-blog', 'contact-us']} />
        </div>
        <div className='relative w-full col-span-2'>
          <Profile />
        </div>
        <div className='col-span-3'>
          <Sections />
        </div>
      </div>
    </div>
  )
}

export default App
