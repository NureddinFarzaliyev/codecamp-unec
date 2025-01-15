import React, { useEffect } from 'react'
import Header from '../header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../footer/Footer'
import Contexts from '../../context/Contexts'

const RootLayout = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

  return (
      <Contexts>
        <Header />
        <Outlet />
        <Footer />
      </Contexts>
  )
}

export default RootLayout
