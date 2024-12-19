import React, { Component } from 'react'
import { CiLocationOn } from "react-icons/ci";
import ratingStar from './../../img/rating.png'
import profile from './../../img/johndoe.png'

export class ServiceHeader extends Component {
  render() {
    return (
      <div className='mt-10 flex sm:items-center justify-between flex-col sm:flex-row'>

        <div className='flex flex-col gap-1'>
            <h4 className='opacity-80'>Barber Services</h4>
            <h1 className='font-bold text-3xl'>Men's Haircuts And Hair styles</h1>
            <p className='flex gap-1 items-center text-sm opacity-70'> <CiLocationOn/> Tokyo city tower, Road No: 1280, Housing Apartment, Japan </p>
        </div>

        <div className='flex flex-col gap-3 mt-3 sm:mt-0'>
            <div><span className='font-bold text-2xl'>$150.00</span><span className='opacity-50 font-bold ml-3'>$200.00</span></div>
            <div className='flex gap-3'>
                <img src={profile} alt="" className='h-12 rounded-full overflow-hidden' />
                <div>
                    <span>By Jonathan Doe</span>
                    <img src={ratingStar} alt="" className='h-4' />
                </div>
            </div>
        </div>

      </div>
    )
  }
}

export default ServiceHeader
