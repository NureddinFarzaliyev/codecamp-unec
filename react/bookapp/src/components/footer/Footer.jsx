import React, { Component } from 'react'
import logo from './../../img/logo-1.png'
import MainButton from '../ui/MainButton'
import { BsInstagram, BsGlobe, BsTwitter, BsYoutube, BsArrowUp } from 'react-icons/bs'

export class Footer extends Component {
    toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
  render() {
    return (
      <div className='flex flex-col items-center justify-around h-[60vh] relative bg-accent bg-opacity-5 mt-20'>
        <div onClick={this.toTop} className='h-14 w-16 bg-accent absolute top-[-2rem] hexagon flex items-center justify-center text-xl text-white cursor-pointer'>
            <BsArrowUp />
        </div>
        <div className='flex gap-5 items-center mt-16'>
            <div className='h-[2px] w-20 bg-black opacity-50'></div>
            <img src={logo} alt="" />
            <div className='h-[2px] w-20 bg-black opacity-50'></div>
        </div>
        <div>
            <p className='hover:text-accent text-center cursor-pointer transition-colors duration-300'>live@example.com</p>
            <p className='hover:text-accent text-center cursor-pointer transition-colors duration-300'>+999 22 33 5555</p>
        </div>
        <div className='flex gap-2'>
            <MainButton h="35px" w="35px" icon={<BsInstagram/>} />
            <MainButton h="35px" w="35px" icon={<BsGlobe/>} />
            <MainButton h="35px" w="35px" icon={<BsTwitter/>} />
            <MainButton h="35px" w="35px" icon={<BsYoutube/>} />
        </div>
        <div className='flex items-center'>
            <input type="text" className='h-[50px] w-64 outline-none border-2 border-transparent focus:border-blue-900 border-opacity-50 rounded-md p-3 bg-white transition-colors' placeholder='Enter Email Here' />
            <MainButton h="50px" w="130px" text="Subscribe" />
        </div>
        <div className='flex gap-3'>
            {['Home', 'About', 'Services', 'Shops', 'Contact'].map((item, index) => (
                <p key={index} className='hover:text-accent opacity-50 hover:opacity-100 text-center cursor-pointer font-medium transition-all duration-300'>{item}</p>
            ))}
        </div>
        <div>
            <p className='text-gray-600 text-md'>Copyright ©2024 <span className='text-accent font-medium'>Bookapp</span>. All Rights Reserved</p> 
        </div>
      </div>
    )
  }
}

export default Footer
