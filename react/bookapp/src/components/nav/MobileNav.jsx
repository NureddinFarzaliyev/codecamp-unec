import React, { Component } from 'react'
import NavLink from './NavLink'
import LoginBtn from './LoginBtn'

class MobileNav extends Component {

  navLinks = ['Home', 'Services', 'Vendors', 'Pages', 'Blog', 'Contact']

  render() {
    return (
        <div className='bg-white border-opacity-80 border-r-4 gap-3 absolute h-[100vh] w-72 left-0 top-0 flex flex-col pt-10 px-5 shadow-2xl z-[999]'>
            {this.navLinks.map((link, index) => <div key={index}><NavLink text={link} /> <hr /></div>)}
            <LoginBtn />
        </div>
    )
  }
}

export default MobileNav
