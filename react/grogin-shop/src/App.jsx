import React from 'react'
import Filter from './components/filter/Filter'
import Search from './components/search/Search'
import Display from './components/display/Display'
import { DataProvider } from './contexts/DataProvider'
import FilterProvider from './contexts/FilterProvider'

const App = () => {
  return (
    <DataProvider>
      <Search />
      <FilterProvider>
        <Filter />
      </FilterProvider>
      <Display /> 
    </DataProvider>
  )
}

export default App
