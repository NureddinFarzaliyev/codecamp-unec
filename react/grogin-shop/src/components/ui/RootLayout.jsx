import React, { useEffect } from 'react'
import Header from '../header/Header'
import FilterProvider from '../../contexts/FilterProvider'
import { DataProvider } from '../../contexts/DataProvider'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../footer/Footer'

const RootLayout = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

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
