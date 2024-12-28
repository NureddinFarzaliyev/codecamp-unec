import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router'

const Nav = () => {

  const navigate = useNavigate()

  return (
    <div onClick={() => {navigate('/')}} 
    className='py-10 text-white text-2xl text-medium flex justify-center items-center gap-4'>
      <FaGithub className='text-4xl' />
      <h1>GitHub Finder</h1>
    </div>
  )
}

export default Nav
