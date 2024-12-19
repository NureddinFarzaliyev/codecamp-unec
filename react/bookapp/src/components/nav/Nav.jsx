import React, { Component } from 'react'
import Logo from '../../../public/logo-1.png'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import NavList from './NavList';
import LoginBtn from './LoginBtn';
import MobileNav from './MobileNav';
import Container from '../ui/Container'

class Nav extends Component {

  constructor(){
    super();
    this.state = {
      showMobileNav: false
    }
  }

  changeMobileNav = () => {
    this.setState({showMobileNav: !this.state.showMobileNav})
    document.body.style.overflow = this.state.showMobileNav === true ? 'auto' : 'hidden'
  } 

  render() {
    return (
      <Container>
      <div className='flex items-center justify-between h-20'>
        <img src={Logo} alt="" /> <NavList /> <LoginBtn hideOnMobile={true} />
        <button onClick={this.changeMobileNav} className='flex xl:hidden h-9 w-9 bg-accent text-2xl text-white items-center justify-center z-[1000]'>{this.state.showMobileNav === true ? <RxCross1/> : <RxHamburgerMenu />}</button>
        <div className={`absolute top-0 left-0 z-[100] ${this.state.showMobileNav === true ? 'come-in overlay' : 'get-out'}`}><MobileNav /></div>
      </div>
      </Container>
    )
  }
}

export default Nav
