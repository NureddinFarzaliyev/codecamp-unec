import { useContext } from 'react'
import { DataDispatch } from '../../contexts/DataContext'
import axios from 'axios'

const Search = () => {
  const dataDispatch = useContext( DataDispatch )

  const search = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Plov')
    .then(res => dataDispatch(res.data.meals))
    .catch(err => console.error(err))
  }

  return (
    <div className="border-2 p-3 m-3">
      <button onClick={() => {dataDispatch([])}}>Remove Search</button>
      <button onClick={() => {search()}} >Search</button>
    </div>
  )
}

export default Search
