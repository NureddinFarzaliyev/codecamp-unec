import React from 'react'
import { DataProvider } from './contexts/DataProvider'
import FilterProvider from './contexts/FilterProvider'
import Header from './components/header/Header'
import Main from './components/main/Main'

const App = () => {
  return (
    <DataProvider>
      <Header />
      <FilterProvider>
        <Main />
      </FilterProvider>
    </DataProvider>
  )
}

export default App
