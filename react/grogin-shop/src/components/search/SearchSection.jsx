import React from 'react'
import logo from '../../assets/img/logo.png'
import Search from './Search'
import Container from '../ui/Container'
import { CiLocationOn } from "react-icons/ci";
import { BiUser, BiHeart,  } from 'react-icons/bi'
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const SearchSection = () => {
  return (
    <Container>
    <div className='h-24 lg:flex items-center hidden w-full justify-between gap-5 border-b-main-text border-b-[1px] border-opacity-10'>
      <Link to='/'>
        <img src={logo} alt="" className='h-10' />
      </Link>

      <div className='flex gap-2'>
        <div className='h-10 w-10 bg-main-text bg-opacity-10 rounded-full text-2xl text-main-text flex items-center justify-center'><CiLocationOn/></div>
        <div className='flex flex-col'>
            <span className='text-xs text-main-text opacity-70'>Deliver to</span>
            <span className='text-sm font-bold'>all</span>
        </div>
      </div>

      <Search />

      <div className='flex gap-4'>
        {[{title: "Account", icon: BiUser}, {title: "Wishlist", icon: BiHeart}, {title: "Your Cart", icon: RiShoppingCartLine}].map((t, i) =>
          <div className='flex flex-col gap-1 items-center cursor-pointer' key={i}>
            <t.icon className='text-3xl' />
            <span className='text-md w-max'>{t.title}</span>
          </div>
        )}
      </div>
    </div>
    </Container>
  )
}

export default SearchSection
