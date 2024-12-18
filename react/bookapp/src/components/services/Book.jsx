import React, { Component } from 'react'
import MainButton from '../ui/MainButton';
import { CiSearch, CiLocationOn } from "react-icons/ci";

export class Book extends Component {
  render() {
    return (
      <div className='flex flex-col xl:flex-row justify-between xl:items-center w-full gap-5 xl:gap-0 border-2 border-opacity-50 p-4 rounded-lg'>
        <h1 className='text-lg font-bold'>Do You Want to Book Men’s Haircut And Hair Style Services?</h1> 
        <div className='flex xl:w-[50%] justify-between'>
            <div className='flex items-center gap-5'>
                <CiLocationOn className='text-xl text-accent' />
                <div className='ml-2'>
                    <h2 className='font-semibold text-md'>Your Location</h2>
                    <p className='text-sm opacity-60 font-medium'>Madrid</p>
                </div>  
            </div>
            <MainButton h='50px' w="300px" icon={<CiSearch/>} text="Book Now" />
        </div>
      </div>
    )
  }
}

export default Book
