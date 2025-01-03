import React from 'react'

const PortfolioCard = ({img, header}) => {
  return (
    <div data-aos="fade-left">
        <div className='rounded-lg overflow-hidden'>
            <img src={img} alt={header} className='hover:scale-110 transition duration-500 cursor-pointer'/>
        </div>
        <h3 className='dark:text-white text-text hover:text-accent dark:hover:text-accent transition duration-500 cursor-pointer text-3xl font-semibold my-4'>{header}</h3>
    </div>
  )
}

export default PortfolioCard
