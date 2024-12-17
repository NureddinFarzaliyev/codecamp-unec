import React, { Component } from 'react'
import NavLink from './NavLink'

class NavList extends Component {

  navLinks = ['Home+', 'Services+', 'Vendors+', 'Pages+', 'Blog+', 'Contact']

  render() {
    return (
      <div className='hidden xl:flex gap-5 2xl:gap-10 items-center'>
        {this.navLinks.map((link, index) => <NavLink key={index} text={link} />)}
      </div>
    )
  }
}

export default NavList
