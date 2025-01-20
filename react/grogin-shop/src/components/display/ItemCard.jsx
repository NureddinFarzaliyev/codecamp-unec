import React, { useEffect, useState } from 'react'
import { GiHotMeal } from "react-icons/gi";
import axios from 'axios';
import DialogComponent from './DialogComponent';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';

const ItemCard = ({data}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [info, setInfo] = useState({})
  const {addItem} = useCart()

  const notify = (item) => toast.success(`"${item}" added to cart.`, {
    theme: 'dark'
  })

  useEffect(() => {
    if(isOpen === true){
      axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.idMeal}`)
      .then(res => {setInfo(res.data.meals[0])})
    }
  }, [isOpen])

  return (
    <Link to={`/meals/${data.idMeal}`} className='border-[0.5px] border-main-text dark:border-white p-4 flex flex-col items-center justify-around h-96 border-opacity-20 dark:border-opacity-20 cursor-pointer'>
      <img src={data.strMealThumb} alt={data.strMeal} className=' max-w-56 lg:max-w-[90%] rounded-lg shadow-lg' />
      <h1 className='font-bold w-full text-center'>{data.strMeal}</h1>
      <div className='flex gap-1'>
        <button onClick={(e) => {e.stopPropagation(); e.preventDefault(); addItem({...data, id: data.idMeal, price: Math.round(Math.floor(Math.random() * 50))}); notify(data.strMeal) }}
        className='bg-cart-green h-10 dark:hover:bg-transparent flex items-center text-2xl py-1 px-4 rounded-lg border-2 border-transparent text-white font-bold gap-2 hover:scale-110 transition duration-200 hover:shadow-md hover:text-cart-green hover:bg-white hover:border-cart-green'> <RiShoppingCartLine /> </button>
        <button onClick={(e) => {e.stopPropagation(); e.preventDefault(); setIsOpen(true)}}
        className='bg-white h-10 dark:bg-transparent flex items-center text-2xl py-1 px-4 rounded-lg border-2 text-cart-green font-bold gap-2 hover:scale-110 transition duration-200 hover:shadow-md hover:text-white hover:bg-cart-green border-cart-green dark:border-cart-green'> <GiHotMeal /> </button>
      </div>
      <DialogComponent isOpen={isOpen} setIsOpen={setIsOpen} info={info} />   
    </Link>
  )
}

export default ItemCard
