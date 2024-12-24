import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FilterButton from './FilterButton'

const FilterType = ({filter}) => {
    const [filters, setFilters] = useState([])

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?${filter}=list`)
        .then(res => {setFilters(res.data.meals)})
        .catch(err => console.error(err))
    }, [])


  return (
    <div className='border-2 m-2 p-2'>
        {filters.map((f, i) => <FilterButton key={i} filterName={Object.values(f)[0]} filterType={filter} />)}
    </div>
  )
}

export default FilterType
