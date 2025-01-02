import React from 'react'
import icon from '../assets/images/subicon.svg'

const SectionSubheader = ({text}) => {
  return (
    <div data-aos="fade-left" className='flex dark:text-white text-text font-medium text-lg gap-3'>
      <img src={icon} alt="sub" />
      <span>{text}</span>
    </div>
  )
}

export default SectionSubheader
