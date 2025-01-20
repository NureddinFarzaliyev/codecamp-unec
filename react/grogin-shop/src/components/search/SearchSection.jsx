import React, { useContext } from 'react'
import logo from '../../assets/img/logo.png'
import Search from './Search'
import Container from '../ui/Container'
import { CiLocationOn } from "react-icons/ci";
import { BiMoon, BiHeart, BiSun  } from 'react-icons/bi'
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useCart } from 'react-use-cart';


const SearchSection = () => {

  const [theme, setTheme] = useContext(ThemeContext)
  const { totalItems } = useCart()

  return (
    <Container>
    <div className='h-24 lg:flex items-center hidden w-full justify-between gap-5 border-b-main-text border-b-[1px] dark:border-b-white/20 border-opacity-10'>
      <Link to='/'>
        <img src={logo} alt="" className='h-10 logo' />
      </Link>

      <div className='flex gap-2'>
        <div className='h-10 w-10 bg-main-text/10 dark:bg-white/10 rounded-full text-2xl text-main-text dark:text-white flex items-center justify-center'><CiLocationOn/></div>
        <div className='flex flex-col'>
            <span className='text-xs text-main-text dark:text-white opacity-70'>Deliver to</span>
            <span className='text-sm font-bold'>all</span>
        </div>
      </div>

      <Search />

      <div className='flex gap-4'>
        <div className='flex flex-col gap-1 items-center cursor-pointer justify-center hover:scale-110'>
            {theme === 'dark' ? <BiSun className='text-3xl' onClick={() => setTheme('light')} /> : <BiMoon className='text-3xl' onClick={() => setTheme('dark')} />}
        </div>
        <div className='flex flex-col gap-1 items-center cursor-pointer'>
            <BiHeart className='text-3xl' />
        </div>
        <Link to={'/cart'}>
          <div className='flex flex-col gap-1 items-center cursor-pointer relative'>
            <RiShoppingCartLine className='text-3xl' />
            <p className={`${totalItems === 0 && 'opacity-50'} absolute bg-sale-red text-white h-6 w-6 rounded-full text-sm font-bold flex items-center justify-center right-[-15px] top-[-10px]`}>{totalItems}</p>
          </div>
        </Link>
      </div>
    </div>
    </Container>
  )
}

export default SearchSection
