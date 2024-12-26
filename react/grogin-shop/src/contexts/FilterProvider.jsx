import { ActiveFilterContext, ActiveFilterDispatch, FilterTypeContext, FilterTypeDispatch } from "./FilterContext"
import { useState } from "react"

const FilterProvider = ({children}) => {

  const [activeFilter, setActiveFilter] = useState('Beef')
  const [filterType, setFilterType] = useState('c')

  return (
    <ActiveFilterContext.Provider value={activeFilter}>
      <ActiveFilterDispatch.Provider value={setActiveFilter}>
        <FilterTypeContext.Provider value={filterType}>
          <FilterTypeDispatch.Provider value={setFilterType}>
            {children}
          </FilterTypeDispatch.Provider>
        </FilterTypeContext.Provider>
      </ActiveFilterDispatch.Provider>
    </ActiveFilterContext.Provider>
  )
}

export default FilterProvider
