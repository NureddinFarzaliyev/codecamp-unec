import React, { useContext, useEffect, useState } from 'react'
import Container from '../ui/Container'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { currencyContext } from '../../contexts/CurrencyContext'
import { useCart } from 'react-use-cart'
import { toast } from 'react-toastify'
import { RiShoppingCartLine } from 'react-icons/ri'

const Details = () => {

    const {mealId} = useParams()
    const [data, setData] = useState([])

    const [currency] = useContext(currencyContext)
    
    const [price, setPrice] = useState(0)

    const {addItem} = useCart()

    const notify = (item) => toast.success(`"${item}" added to cart.`, {
        theme: 'dark'
    })

    useEffect(() => {
        setPrice(Math.round(Math.floor(Math.random() * 100 + 1) * currency.rate))
    }, [])

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => setData(res.data.meals[0]))
        .catch(err => console.error(err))
    }, [])

  return (
    <Container>
        {data && (
            <div className='pt-5 text-main-text min-h-dvh dark:text-white'>
                <h1 className='py-2 text-5xl font-semibold'>{data.strMeal}</h1>
                <div className='flex gap-2'>
                    <span className='px-6 py-2 my-2 bg-cart-green rounded-full text-white font-bold'>{data.strCategory}</span>                
                    <span className='px-6 py-2 my-2 bg-sale-purple rounded-full text-white font-bold'>{data.strArea}</span>         
                </div>
                <div className='grid xl:grid-cols-2 gap-4 mt-10'>
                    <div className='mx-auto'>
                        <img src={data.strMealThumb} alt={data.strMeal} className='rounded-xl shadow-2xl border-cart-green border-2' />
                    </div>
                    <p className='text-lg px-2 mt-10 xl:mt-0'>{data.strInstructions}
                    <h1 className='text-3xl mt-5 font-bold'>{price} {currency.name}</h1>
                    <button onClick={(e) => {e.stopPropagation(); e.preventDefault(); addItem({...data, id: data.idMeal, price: Math.round(Math.floor(Math.random() * 100))}); notify(data.strMeal) }}
                    className='bg-cart-green mt-5 h-10 dark:hover:bg-transparent flex items-center text-xl py-1 px-4 rounded-lg border-2 border-transparent text-white font-bold gap-2 hover:scale-110 transition duration-200 hover:shadow-md hover:text-cart-green hover:bg-white hover:border-cart-green'> <RiShoppingCartLine /> Add to Cart </button>
                    </p>
                </div>
            </div>
        )}
    </Container>
  )
}

export default Details
