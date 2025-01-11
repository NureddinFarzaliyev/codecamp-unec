import React from 'react'
import { DataProvider } from './contexts/DataProvider'
import FilterProvider from './contexts/FilterProvider'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './components/details/Details'

const App = () => {
  return (
    <BrowserRouter>
    <DataProvider>
      <Header />
      <FilterProvider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/meals/:mealId" element={<Details />} />
        </Routes>
      </FilterProvider>
      <Footer />
    </DataProvider>
    </BrowserRouter>
  )
}

export default App
