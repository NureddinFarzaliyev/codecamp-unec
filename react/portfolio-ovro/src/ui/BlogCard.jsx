import React from 'react'
import { FaClock, FaCalendar } from 'react-icons/fa'

const BlogCard = ({img, header}) => {
  return (
    <div className='cursor-pointer'>
      <img src={img} alt={header} className='w-full rounded-lg' />
      <div className='flex items-center justify-between opacity-60 dark:text-white text-text text-sm 2xl:text-lg'><span>UI/UX</span> <span className='flex items-center gap-2 my-3'><FaClock /> 3 min read</span></div>
      <h1 className='text-2xl font-semibold dark:text-white text-text hover:text-accent dark:hover:text-accent transition duration-500 cursor-pointer'>{header}</h1>
      <div className='flex items-center justify-between dark:text-white text-text text-sm 2xl:text-lg'>
        <div className='flex items-center gap-2 my-5'>
            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="user" className='h-8 rounded-full' />
            <span className='opacity-60'>Alex Carry</span>
        </div>
        <span className='opacity-60 flex items-center gap-2 text-sm 2xl:text-lg'>
            <FaCalendar /> Oct 26, 2024
        </span>
      </div>
    </div>
  )
}

export default BlogCard
