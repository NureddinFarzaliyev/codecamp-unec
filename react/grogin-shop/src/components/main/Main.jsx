import React from 'react'
import Filter from '../filter/Filter'
import Display from '../display/Display'
import Container from '../ui/Container'
import Path from './Path'

const Main = () => {
  return (
    <Container>
        <Path />
        <div className='flex justify-between gap-10 mt-5'>
            <Filter />
            <Display />
        </div>
    </Container>
  )
}

export default Main
