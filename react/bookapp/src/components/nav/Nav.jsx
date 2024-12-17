import React, { Component } from 'react'
import Logo from '../../../public/logo-1.png'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import NavList from './NavList';
import LoginBtn from './LoginBtn';
import MobileNav from './MobileNav';

class Nav extends Component {

  constructor(){
    super();
    this.state = {
      showMobileNav: false
    }
  }

  changeMobileNav = () => {
    this.setState({showMobileNav: !this.state.showMobileNav})
  } 

  render() {
    return (
      <div className='flex px-4 md:px-20 lg:px-44 2xl:px-64 items-center justify-between h-20'>
        <img src={Logo} alt="" /> <NavList /> <LoginBtn hideOnMobile={true} />
        <button onClick={this.changeMobileNav} className='flex xl:hidden h-9 w-9 bg-accent text-2xl text-white items-center justify-center'>{this.state.showMobileNav === true ? <RxCross1/> : <RxHamburgerMenu />}</button>
        <div className={`absolute top-0 left-0 ${this.state.showMobileNav === true ? 'come-in' : 'get-out'}`}><MobileNav /></div>
      </div>
    )
  }
}

export default Nav
