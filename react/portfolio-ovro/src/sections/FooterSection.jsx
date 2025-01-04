import React from 'react'
import Section from './Section'
import darkLogo from '../assets/images/logo-dark.png'
import lightLogo from '../assets/images/logi.png'

const FooterSection = ({isDark}) => {
  return (
    <div className='py-10 flex items-center justify-between pl-5 pr-20'>
        <img src={isDark ? darkLogo : lightLogo} alt="ovro logo" className='h-10' />
        <p className='opacity-70 dark:text-white text-text'>© 2024 OVRO. All Rights Reserved.</p>
    </div>
  )
}

export default FooterSection
