import { useContext, useState } from 'react'
import { DataDispatch } from '../../contexts/DataContext'
import axios from 'axios'

const Search = () => {
  const dataDispatch = useContext( DataDispatch )

  const [query, setQuery] = useState('')

  const search = (query) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(res =>  res.data.meals ? dataDispatch(res.data.meals) : dataDispatch(['']))
    .catch(err => console.error(err))
  }

  return (
    <div className="border-2 p-3 m-3">
      <input type="text" placeholder='Search Query...' onChange={(e) => {setQuery(e.target.value)}} />
      <button onClick={() => {search(query)}}>Search</button>
    </div>
  )
}

export default Search
