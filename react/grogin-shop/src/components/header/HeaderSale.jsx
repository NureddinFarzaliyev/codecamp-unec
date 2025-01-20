import React, { useContext, useEffect, useState } from 'react'
import Container from '../ui/Container'
import logo from '../../assets/img/logo.png'
import { RiShoppingCartLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { currencyContext } from '../../contexts/CurrencyContext';
import axios from 'axios';
import { useCart } from 'react-use-cart';

const HeaderSale = () => {
    const [currency, setCurrency] = useContext(currencyContext);
    const [options, setOptions] = useState([])
    const {totalItems} = useCart()

    const handleCurrencyChange = async (e) => {
        axios.get(`https://currencyapi.net/api/v1/rates?key=${import.meta.env.VITE_CURRENCY_API}&output=JSON`)
        .then(res => {
            Object.keys(res.data.rates).map(currencyName => {
                if(currencyName === e.target.value){
                    setCurrency({
                        name: currencyName,
                        rate: res.data.rates[currencyName]
                    })
                }
            })
        })
    }

    useEffect(() => {
        axios.get(`https://currencyapi.net/api/v1/rates?key=${import.meta.env.VITE_CURRENCY_API}&output=JSON`)
        .then(res => {setOptions(Object.keys(res.data.rates))})
    }, [])

    console.log(currency)

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
            <div className='h-20 justify-between lg:h-10 flex items-center gap-1 lg:gap-2 text-main-text relative border-b-[1px] border-main-text dark:border-white/20 border-opacity-20'>
                <div className='gap-3 hidden lg:flex'>
                    {['About Us', 'My account', 'Wishlist'].map((t, i) => <span className='opacity-70 hover:opacity-100 text-main-text dark:text-white cursor-pointer text-sm transition' key={i}>{t}</span>)}
                    <div className='text-sm pl-3 border-l-2'><span className='opacity-70 dark:text-white'>We deliver to you every day from</span> <span className='text-sale-red font-bold'>7:00 to 23:00</span></div>
                </div>
                <div className='gap-3 hidden lg:flex'>
                    {['English', 'Order Tracking'].map((t, i) => <span className='opacity-70 hover:opacity-100 text-main-text dark:text-white cursor-pointer text-sm transition' key={i}>{t}</span>)}
                    <select name="currency" className='text-sm dark:text-white bg-transparent border-none opacity-70' id="currency" onChange={(e) => handleCurrencyChange(e)}>
                        {options.map((o, i) => <option value={o} key={i} selected={currency.name === o} >{o}</option>)}
                    </select>
                </div>

                <div className='text-3xl lg:hidden dark:text-white'>
                    <RxHamburgerMenu />
                </div>
                <div className='lg:hidden'>
                    <Link to='/'>
                        <img src={logo} alt='logo' className='h-10 logo'/>
                    </Link>
                </div>
                <Link to={'/cart'}>
                    <div className='flex flex-col gap-1 items-center cursor-pointer relative lg:hidden dark:text-white'>
                        <RiShoppingCartLine className='text-3xl' />
                        <p className={`${totalItems === 0 && 'opacity-50'} absolute bg-sale-red h-6 w-6 text-white rounded-full text-sm font-bold flex items-center justify-center right-[-15px] top-[-10px]`}>{totalItems}</p>
                    </div>
                </Link>
            </div>
        </Container>    
    </div>
  )
}

export default HeaderSale
