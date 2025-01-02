import React from 'react'

const SectionHeader = ({text, highlight}) => {
  return (
    <h1 data-aos="fade-left" 
    className='text-6xl lg:text-8xl dark:text-white text-text font-semibold my-5 2xl:w-[90%] leading-snug'>
      {text} <span className='text-accent underline font-playfair italic font-bold'>{highlight}</span>
    </h1>
  )
}

export default SectionHeader
