import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { BsQuote } from 'react-icons/bs'

const TestimonialCard = ({span, paragraph}) => {
  return (
    <div data-aos="zoom-in" className={`bg-secondary/10 border-[1px] border-white/30 rounded-md hover:border-accent p-4 cursor-pointer transition duration-500 min-h-64 ${span ? 'md:col-span-2' : ''}`}>
      <div className='flex items-center justify-between'>
        <div className='flex gap-1'>{Array(5).fill().map((_, i) => <BsStarFill key={i} className='text-accent text-md lg:text-lg' />)}</div>
        <BsQuote className='text-3xl dark:text-white text-text' />
      </div>
      <p className='text-text dark:text-white my-2 max-lg:text-sm'>{paragraph}</p>
      <div className='flex items-center gap-3 mt-5'>
        <img src='https://randomuser.me/api/portraits/men/1.jpg' alt='Jane Doe' className='w-14 h-14 rounded-full' />
        <div>
            <h4 className='text-text dark:text-white font-medium text-md lg:text-xl'>Jane Doe</h4>
            <p className='text-text dark:text-white text-sm lg:text-md'>CEO, Company</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
