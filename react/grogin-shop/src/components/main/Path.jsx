import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

const Path = () => {
  return (
    <div className='flex text-xs items-center gap-2 my-3'>
      <span className='opacity-50'>Home</span> <FaChevronRight className='opacity-50 text-[0.5rem]' /> <span>Shop</span>
    </div>
  )
}

export default Path
