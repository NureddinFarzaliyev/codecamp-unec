import React from 'react'
import { DataProvider } from './contexts/DataProvider'
import FilterProvider from './contexts/FilterProvider'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <DataProvider>
      <Header />
      <FilterProvider>
        <Main />
      </FilterProvider>
      <Footer />
    </DataProvider>
  )
}

export default App
