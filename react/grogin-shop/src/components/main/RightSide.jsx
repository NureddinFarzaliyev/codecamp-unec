import React from 'react'
import Display from '../display/Display'
import Sale from './Sale'

const RightSide = ({isFilterOpen}) => {
  return (
    <div className={`w-full ${isFilterOpen && 'h-dvh overflow-hidden'}`}>
      <Sale />
      <Display />
    </div>
  )
}

export default RightSide
