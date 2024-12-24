import { useContext } from 'react'
import { ActiveFilterContext, ActiveFilterDispatch, FilterTypeContext, FilterTypeDispatch } from '../../contexts/FilterContext'

const FilterButton = ({filterName, filterType}) => {

    const currentFilterType = useContext(FilterTypeContext)
    const currentFilterName = useContext(ActiveFilterContext)

    const changeFilter = useContext(ActiveFilterDispatch)
    const changeFilterType = useContext(FilterTypeDispatch)

  return (
    <div className={`${currentFilterName === filterName && currentFilterType === filterType ? 'bg-red-900' : 'bg-none' }`}
    onClick={() => { changeFilter(filterName); changeFilterType(filterType) }}>
      {filterName} - {filterType}
    </div>
  )
}

export default FilterButton
