import React, { useEffect, useState } from 'react'
import { GiHotMeal } from "react-icons/gi";
import axios from 'axios';
import DialogComponent from './DialogComponent';
import { Link } from 'react-router-dom';

const ItemCard = ({data}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [info, setInfo] = useState({})

  useEffect(() => {
    if(isOpen === true){
      axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.idMeal}`)
      .then(res => {setInfo(res.data.meals[0])})
    }
  }, [isOpen])

  return (
    <div className='border-[0.5px] border-main-text p-4 flex flex-col items-center justify-around h-96 border-opacity-20 cursor-pointer'>
      <img src={data.strMealThumb} alt={data.strMeal} className=' max-w-56 lg:max-w-[90%] rounded-lg shadow-lg' />
      <h1 className='font-bold w-full text-center'>{data.strMeal}</h1>
      <div className='flex flex-col gap-1'>
        <button onClick={() => setIsOpen(true)}
        className='bg-cart-green flex items-center text-lg py-1 px-4 rounded-lg border-2 border-transparent text-white font-bold gap-2 hover:scale-110 transition duration-200 hover:shadow-md hover:text-cart-green hover:bg-white hover:border-cart-green'> <GiHotMeal /> Cook</button>
        <Link to={`/meals/${data.idMeal}`} className='text-center bg-white text-lg py-1 px-4 rounded-lg border-2 border-cart-green text-cart-green font-bold hover:scale-110 transition duration-200 hover:shadow-md hover:text-white hover:bg-cart-green hover:border-white'>Details</Link>
      </div>
      <DialogComponent isOpen={isOpen} setIsOpen={setIsOpen} info={info} />      
    </div>
  )
}

export default ItemCard
