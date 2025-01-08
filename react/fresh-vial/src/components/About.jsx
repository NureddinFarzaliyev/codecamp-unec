import React from 'react'
import SectionHeader from './ui/SectionHeader'
import thumb from '../assets/images/video.jpg'
    
const About = () => {
  return (
    <div className='about-section'>
        <SectionHeader text={"OUR VIDEO HISTORY"} />
        <img src={thumb} alt='video' />
    </div>
  )
}

export default About
