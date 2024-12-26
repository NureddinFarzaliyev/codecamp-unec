import { DataContext, DataDispatch } from '../../contexts/DataContext'
import { useContext, useEffect } from 'react'
import axios from 'axios'
import ItemCard from './ItemCard'
import { GiOpenedFoodCan } from "react-icons/gi";

const Display = () => {
    const data = useContext( DataContext )
    const dispatch = useContext( DataDispatch )

    useEffect(() => {
        if(data && data.length === 0) {
            axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
            .then(res => dispatch(res.data.meals))
            .catch(err => console.error(err))
        }
    }, [data])

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-10 relative'>
            {data?.map((item, i) => <ItemCard key={i} data={item} />)}
            <div className={`${data ? "hidden" : ''} flex flex-col items-center gap-5 text-center text-xl justify-center w-full mt-20 absolute`}>
            <GiOpenedFoodCan className="text-9xl" /> <p className="opacity-60">No meals found</p> 
            </div>
        </div>
    )
}

export default Display
