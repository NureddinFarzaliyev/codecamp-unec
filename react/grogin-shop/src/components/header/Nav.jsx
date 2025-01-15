import React from 'react'
import Container from '../ui/Container'
import { BiChevronDown } from 'react-icons/bi'

const Nav = () => {
  return (
    <Container>
      <div className='h-14 items-center justify-between hidden lg:flex border-b-[1px] dark:border-b-white/20 border-main-text border-opacity-20'>
        <div className='flex'>
        {['Home', 'Shop', 'Fruits & Vegetables', 'Beverages', 'Blog', 'Contact'].map((item, index) => ( 
            <a key={index} href="#" className="text-main-text dark:text-white py-2 text-md font-bold mr-5 flex items-center">
                {item} <BiChevronDown/>
            </a>
        ))}
        </div>
        <div className='flex'>
        {['Trending Products', 'Almost Finished'].map((item, index) => ( 
            <a key={index} href="#" className="text-main-text dark:text-white py-2 text-md font-bold mr-5 flex items-center">
                {item} <BiChevronDown/>
            </a>
        ))}
        </div>
      </div>
    </Container>
  )
}

export default Nav
