import { useContext, useEffect } from "react"
import FilterType from "./FilterType"
import { ActiveFilterContext, FilterTypeContext } from "../../contexts/FilterContext"
import { FILTER_TYPES } from "../../utils"
import { fetchAndDispatch } from "../../utils"

const Filter = () => {
  const activeFilter = useContext(ActiveFilterContext)
  const filterType = useContext(FilterTypeContext)

  useEffect(() => {
    fetchAndDispatch(`https://www.themealdb.com/api/json/v1/1/filter.php?${filterType}=${activeFilter}`)
  }, [activeFilter, filterType])

  return (
      <div className="border-2 p-3 m-3">
        {Object.values(FILTER_TYPES).map((key, i) => <FilterType key={i} filter={key} />)}
      </div>
  )
}

export default Filter
