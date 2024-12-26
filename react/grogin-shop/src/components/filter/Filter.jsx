import { useContext, useEffect } from "react"
import { DataDispatch } from "../../contexts/DataContext"
import axios from "axios"
import FilterType from "./FilterType"
import { ActiveFilterContext, FilterTypeContext } from "../../contexts/FilterContext"
import { FILTER_TYPES } from "../../utils"
import RangeSliderComponent from "./RangeSliderComponent"

const Filter = ({isFilterOpen}) => {
  const dataDispatch = useContext( DataDispatch )

  const activeFilter = useContext(ActiveFilterContext)
  const filterType = useContext(FilterTypeContext)

  const filterData = () => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?${filterType}=${activeFilter}`).then( response => {
        dataDispatch(response.data.meals)
    }).catch(err=>console.error(err))
  }

  useEffect(() => {
    filterData()
  }, [activeFilter, filterType])

  return (
      <div className={`${!isFilterOpen ? "hidden-filter" : 'shown-filter'} w-[20%]`}>
        <RangeSliderComponent />
        {Object.values(FILTER_TYPES).map((key, i) => <FilterType key={i} filter={key} filterName={Object.keys(FILTER_TYPES)[i]} />)}
      </div>
  )
}

export default Filter
