import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { BiCart, BiSearch } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from 'motion/react'

const Nav = () => {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const [links, _] = useState([ {name: "Home", url: "/home"}, {name: "About Us", url: "/about"}, {name: "Cart Products", url: "/cart"}, {name: "Our Pages", url: "/pages"}, {name: "Latest Blog", url: "/blog"}, {name: "Contact Us", url: "/contact"} ])

  return (
    <nav>
      <img src={logo} alt="fresh vial" />

      <ul>
        {links.map((link, i) => <li key={i}><Link to={link.url}>{link.name}</Link></li>)}
      </ul>

      <AnimatePresence>
      {isMobileNavOpen && (
        <motion.ul className={`mobile-menu`} 
        animate={{ y: 0, opacity: 1 }} 
        initial={{ y: '-50%', opacity: 0 }} 
        exit={{ y: '-150%', opacity: 0 }}>
          {links.map((link, i) => <li key={i} onClick={() => setIsMobileNavOpen(false)}><Link to={link.url}>{link.name}</Link></li>)}
        </motion.ul>
      )}
      </AnimatePresence>

      <div className='icons'>
        <motion.button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} whileTap={{scale: 0.5}} >
          {!isMobileNavOpen ?  <GiHamburgerMenu /> : <RxCross1 />}
        </motion.button>
        <BiCart />
        <BiSearch />
      </div>
    </nav>
  )
}

export default Nav
