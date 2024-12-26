import React from 'react'
import Filter from '../filter/Filter'
import Container from '../ui/Container'
import Path from './Path'
import RightSide from './RightSide'

const Main = () => {
  return (
    <Container>
        <Path />
        <div className='flex justify-between gap-10 mt-5'>
            <Filter />
            <RightSide />
        </div>
    </Container>
  )
}

export default Main
