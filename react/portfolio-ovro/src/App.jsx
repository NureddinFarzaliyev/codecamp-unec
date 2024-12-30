import React from 'react'
import Nav from './nav/Nav'
import Profile from './profile/Profile'
import Sections from './sections/Sections'


const App = () => {
  return (
    <div className='relative grid grid-cols-5'>
      {/* <section> elements with corresponding ids */}
      <div className='relative'>
        <Nav sectionIdList={['home', 'about-us', 'our-service', 'my-skill', 'portfolio', 'testimonial', 'our-blog', 'contact-us']} />
      </div>
      <div className='relative'>
        <Profile />
      </div>
      <div className='col-span-3'>
        <Sections />
      </div>
    </div>
  )
}

export default App
