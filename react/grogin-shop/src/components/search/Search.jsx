import { useContext, useState } from 'react'
import { DataDispatch } from '../../contexts/DataContext'
import axios from 'axios'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Search = () => {
  const dataDispatch = useContext( DataDispatch )

  const [query, setQuery] = useState('')

  const search = (query) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(res =>  res.data.meals ? dataDispatch(res.data.meals) : dataDispatch())
    .catch(err => console.error(err))
  }

  return (
    <div className="w-[50%] xl:w-[45%] 2xl:w-[55%] flex relative">
      <input type="text" placeholder='Search For Meals...' 
      className='w-full bg-main-text bg-opacity-5 hover:bg-opacity-10 transition-colors px-4 h-12 rounded-md' 
      onChange={(e) => {setQuery(e.target.value)}} />
      <button className='absolute right-4 top-[50%] translate-y-[-50%]'
      onClick={() => {search(query)}}><FaMagnifyingGlass/></button>
    </div>
  )
}

export default Search
