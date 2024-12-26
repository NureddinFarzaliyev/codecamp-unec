import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Sale = () => {
  return (
    <div className='min-h-72 w-full bg-main-text bg-opacity-5 banner bg-cover rounded-lg p-8'>
        <div className='lg:w-[35%]'>
            <span className='px-2 py-1 bg-sale-red bg-opacity-20 text-sale-red text-xs rounded-full bg-center'>Only This Week</span>
            <h1 className='text-3xl font-bold text-main-text my-2'>Grocery store with different treasures</h1>
            <p className='text-main-text opacity-50 font-medium text-xs lg:text-base'>We have prepared special discounts for you on grocery products...</p>
            <button className='flex bg-white py-2 px-4 rounded-full items-center gap-2 text-sm font-bold mt-4 lg:mt-10'>Shop Now <BsArrowRight /> </button>
        </div>
    </div>
  )
}

export default Sale
