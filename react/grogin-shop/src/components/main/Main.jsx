import React, { useState } from 'react'
import Filter from '../filter/Filter'
import Container from '../ui/Container'
import Path from './Path'
import RightSide from './RightSide'
import FilterButton from './FilterButton'

const Main = () => {

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <Container>
        <Path />
        <div className='flex justify-between gap-10 mt-5'>
            <FilterButton isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />
            <Filter isFilterOpen={isFilterOpen} />
            <RightSide isFilterOpen={isFilterOpen} />
        </div>
    </Container>
  )
}

export default Main
