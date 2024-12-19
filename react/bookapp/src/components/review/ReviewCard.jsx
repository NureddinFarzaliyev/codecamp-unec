import React, { Component } from 'react'
import avatar0 from '../../img/avatar-2.jpg'
import avatar1 from '../../img/avatar-3.jpg'
import rating from '../../img/rating.png'
import { CiCircleCheck, CiLocationOn, CiClock2 } from "react-icons/ci";

export class ReviewCard extends Component {

  render() {
    return (
      <div className='m-5 p-8 border-2 rounded-md'>
        <div className='flex justify-between'>
            <div className='flex gap-5'>
                <img src={this.props.i % 2 === 0 ? avatar0 : avatar1} className='h-20 rounded-md' alt=""  />
                <div>
                    <h3 className='font-semibold'>{this.props.review.name}</h3>
                    <img src={rating} alt="" className='h-4 mt-1' />
                    <p className='mt-2 flex items-center gap-1 text-xs font-medium'> <CiCircleCheck className='bg-green-800 rounded-full text-white text-base' /> <span className='opacity-70'>Verified User</span> </p>
                </div>
            </div>
            <div className='hidden sm:block'>
                <p className='flex items-center gap-2'> <CiLocationOn className='text-lg' /> <span className='text-sm font-medium opacity-50'>{this.props.review.location}</span></p>
                <p className='flex items-center gap-2 mt-1'> <CiClock2 className='text-lg' /> <span className='text-sm font-medium opacity-50'>{this.props.review.time}</span></p>
            </div>

        </div>

        <div className='mt-4'>
            <h1 className='text-2xl font-semibold'>{this.props.review.title} </h1>
            <p className='mt-3 opacity-70 md:w-[90%]'>{this.props.review.content}</p>
        </div>


      </div>
    )
  }
}

export default ReviewCard
