import React from 'react'
import Filter from './components/filter/Filter'
import Search from './components/search/Search'
import Display from './components/display/Display'
import { DataProvider } from './contexts/DataProvider'

const App = () => {
  return (
    <DataProvider>
      <Search />
      <Filter />
      <Display /> 
    </DataProvider>
  )
}

export default App
