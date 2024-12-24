import { DataContext, DataDispatch } from '../../contexts/DataContext'
import { useContext, useEffect } from 'react'
import axios from 'axios'

const Display = () => {
    const data = useContext( DataContext )
    const dispatch = useContext( DataDispatch )

    useEffect(() => {
        if(data.length === 0) {
            axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
            .then(res => dispatch(res.data.meals))
            .catch(err => console.error(err))
        }
    }, [data])

    return (
        <div className="border-2 p-3 m-3">
            {data?.map((item, index) => <p key={index}>{item.strMeal}</p>)}
        </div>
    )
}

export default Display
