import { useContext } from "react"
import { DataDispatch } from "../../contexts/DataContext"
import axios from "axios"

const Filter = () => {
  const dataDispatch = useContext( DataDispatch )

  const filterData = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then( response => {
        dataDispatch(response.data.meals)
    }).catch(err=>console.error(err))
  }

  return (
    <div className="border-2 p-3 m-3">
      <button onClick={() => {dataDispatch([])}}>Remove Filter</button>
      <button onClick={() => {filterData()}}>Filter</button>
    </div>
  )
}

export default Filter
