import React, { useEffect, useState } from 'react'
import Container from '../ui/Container'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Details = () => {

    const {mealId} = useParams()
    const [data, setData] = useState([])

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
                    <p className='text-lg px-2 mt-10 xl:mt-0'>{data.strInstructions}</p>
                </div>
            </div>
        )}
    </Container>
  )
}

export default Details
