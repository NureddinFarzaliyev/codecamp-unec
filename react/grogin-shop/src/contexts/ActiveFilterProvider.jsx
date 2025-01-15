import { ActiveFilterContext, ActiveFilterDispatch } from "./FilterContext"
import { useState } from "react"

const ActiveFilterProvider = ({children}) => {

  const [activeFilter, setActiveFilter] = useState('Beef')

  return (
    <ActiveFilterContext.Provider value={activeFilter}>
      <ActiveFilterDispatch.Provider value={setActiveFilter}>
            {children}
      </ActiveFilterDispatch.Provider>
    </ActiveFilterContext.Provider>
  )
}

export default ActiveFilterProvider
