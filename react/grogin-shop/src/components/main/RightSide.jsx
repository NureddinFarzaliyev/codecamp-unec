import React from 'react'
import Display from '../display/Display'
import Sale from './Sale'

const RightSide = () => {
  return (
    <div className="w-[65%] sm:w-[80%]">
      <Sale />
      <Display />
    </div>
  )
}

export default RightSide
