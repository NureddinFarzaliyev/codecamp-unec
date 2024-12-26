import { useContext } from 'react'
import { ActiveFilterDispatch, FilterTypeDispatch } from '../../contexts/FilterContext'

const FilterButton = ({filterName, filterType}) => {

    const changeFilter = useContext(ActiveFilterDispatch)
    const changeFilterType = useContext(FilterTypeDispatch)

  return (
    <div>
      <input type='radio' id={filterName} name="filter" className='cursor-pointer'
      onClick={() => { changeFilter(filterName); changeFilterType(filterType) }} />
      <label className='ml-2 cursor-pointer' htmlFor={filterName}>{filterName}</label>
    </div>
  )
}

export default FilterButton
