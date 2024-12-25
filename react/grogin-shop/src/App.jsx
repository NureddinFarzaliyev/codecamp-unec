import React from 'react'
import Filter from './components/filter/Filter'
import Display from './components/display/Display'
import { DataProvider } from './contexts/DataProvider'
import FilterProvider from './contexts/FilterProvider'
import Header from './components/header/Header'

const App = () => {
  return (
    <DataProvider>
      <Header />
      <FilterProvider>
        <Filter />
      </FilterProvider>
      <Display /> 
    </DataProvider>
  )
}

export default App
