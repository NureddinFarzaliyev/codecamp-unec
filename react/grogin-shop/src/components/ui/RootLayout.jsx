import React from 'react'
import Header from '../header/Header'
import FilterProvider from '../../contexts/FilterProvider'
import { DataProvider } from '../../contexts/DataProvider'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const RootLayout = () => {
  return (
    <DataProvider>
        <Header />
        <FilterProvider>
            <Outlet />
        </FilterProvider>
        <Footer />
    </DataProvider>
  )
}

export default RootLayout
