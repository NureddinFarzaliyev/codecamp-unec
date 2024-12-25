import React from 'react'
import HeaderSale from './HeaderSale'
import SearchSection from '../search/SearchSection'
import Nav from './Nav'

const Header = () => {
  return (
    <div>
      <HeaderSale />
      <SearchSection />
      <Nav />
    </div>
  )
}

export default Header
