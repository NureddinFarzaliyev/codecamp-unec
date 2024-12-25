import { useState } from 'react'
import { fetchAndDispatch } from '../../utils'

const Search = () => {
  const [query, setQuery] = useState('')

  const search = (query) => {
    fetchAndDispatch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
  }

  return (
    <div className="border-2 p-3 m-3">
      <input type="text" placeholder='Search Query...' onChange={(e) => {setQuery(e.target.value)}} />
      <button onClick={() => {search(query)}}>Search</button>
    </div>
  )
}

export default Search
