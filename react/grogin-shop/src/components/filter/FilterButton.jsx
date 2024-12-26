import { useContext } from 'react'
import { ActiveFilterDispatch, FilterTypeDispatch, ActiveFilterContext } from '../../contexts/FilterContext'

const FilterButton = ({filterName, filterType}) => {

    const changeFilter = useContext(ActiveFilterDispatch)
    const changeFilterType = useContext(FilterTypeDispatch)
    const activeFilter = useContext(ActiveFilterContext)

  return (
    <div>
      <input type='radio' id={filterName} name="filter" className='cursor-pointer' checked={activeFilter === filterName} readOnly
      onClick={() => { changeFilter(filterName); changeFilterType(filterType) }} />
      <label className='ml-2 cursor-pointer' htmlFor={filterName}>{filterName}</label>
    </div>
  )
}

export default FilterButton
