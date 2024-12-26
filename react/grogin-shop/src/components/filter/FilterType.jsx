import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FilterButton from './FilterButton'

const FilterType = ({filter, filterName}) => {
    const [filters, setFilters] = useState([])

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?${filter}=list`)
        .then(res => {setFilters(res.data.meals)})
        .catch(err => console.error(err))
    }, [])


  return (
    <div className='mb-5 flex flex-col'>
        <h1 className='text-md font-medium mb-2'>Filter by {filterName.charAt(0).toUpperCase() + filterName.toLowerCase().slice(1)}</h1>
        {filters.map((f, i) => <FilterButton key={i} filterName={Object.values(f)[0]} filterType={filter} />)}
    </div>
  )
}

export default FilterType
