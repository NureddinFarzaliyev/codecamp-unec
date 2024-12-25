import React from 'react'
import Container from '../ui/Container'
import logo from '../../assets/img/logo.png'
import { RiShoppingCartLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const HeaderSale = () => {
  return (
    <div>
        <div className='bg-sale-purple h-16 lg:h-12 w-dvw text-white flex items-center justify-around flex-col lg:flex-row'>
            <div className='text-xs px-2 sm:px-0 sm:text-sm font-bold text-center' >FREE Delivery & 40% Discount for next 3 orders! Place your 1st order in.</div>
            <div className='text-sm flex items-center gap-1'> 
                <span className='hidden sm:block'>Until the end of the sale:</span>
                <span className='flex items-center gap-1'> 
                    <h1 className='text-lg font-bold'>48</h1> days 
                    <h1 className='text-lg font-bold'>12</h1> hours 
                    <h1 className='text-lg font-bold'>35</h1> minutes 
                    <h1 className='text-lg font-bold'>32</h1> seconds 
                </span>
            </div>
        </div>
        <Container>
            <div className='h-20 justify-between lg:h-10 flex items-center gap-1 lg:gap-2 text-main-text relative border-b-[1px] border-main-text border-opacity-20'>
                <div className='gap-3 hidden lg:flex'>
                    {['About Us', 'My account', 'Wishlist'].map((t, i) => <span className='opacity-70 hover:opacity-100 text-main-text cursor-pointer text-sm transition' key={i}>{t}</span>)}
                    <div className='text-sm pl-3 border-l-2'><span className='opacity-70'>We deliver to you every day from</span> <span className='text-sale-red font-bold'>7:00 to 23:00</span></div>
                </div>
                <div className='gap-3 hidden lg:flex'>
                    {['English', 'USD', 'Order Tracking'].map((t, i) => <span className='opacity-70 hover:opacity-100 text-main-text cursor-pointer text-sm transition' key={i}>{t}</span>)}
                </div>

                <div className='text-3xl lg:hidden'>
                    <RxHamburgerMenu />
                </div>
                <div className='lg:hidden'>
                    <img src={logo} alt='logo' className='h-10'/>
                </div>
                <div className='text-3xl relative lg:hidden'>
                    <RiShoppingCartLine />
                    <div className="absolute h-4 w-4 text-center rounded-full top-[-5px] right-[-5px] bg-sale-red text-xs text-white">0</div>
                </div>
            </div>
        </Container>    
    </div>
  )
}

export default HeaderSale
