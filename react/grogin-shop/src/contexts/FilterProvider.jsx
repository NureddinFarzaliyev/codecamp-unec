import { FilterTypeContext, FilterTypeDispatch } from "./FilterContext"
import { useState } from "react"

const FilterProvider = ({children}) => {

  const [filterType, setFilterType] = useState('c')

  return (
        <FilterTypeContext.Provider value={filterType}>
          <FilterTypeDispatch.Provider value={setFilterType}>
            {children}
          </FilterTypeDispatch.Provider>
        </FilterTypeContext.Provider>
  )
}

export default FilterProvider
