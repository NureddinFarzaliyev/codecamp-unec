import React from 'react'
import { CiLocationOn } from 'react-icons/ci'

const TopNav = () => {
  return (
    <div className='nav-container'>
        <div className="nav-top">
          <div>Phone : (+88 - 123456789)</div>
          <div>Opening Hours : Monday To Saturday - 8AM TO 8PM</div>
          <div> <CiLocationOn /> KA-62/1, Kuril, Progoti, Canada</div>
        </div>
    </div>
  )
}

export default TopNav
