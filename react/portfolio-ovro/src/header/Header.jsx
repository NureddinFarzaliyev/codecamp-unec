import React from 'react'

const Header = ({isDark, setIsDark}) => {
  return (
    <div className='bg-white dark:bg-black text-black dark:text-white'>
      <button onClick={() => {setIsDark(!isDark)}}>{isDark ? 'light mode' : 'dark mode'}</button>
    </div>
  )
}

export default Header
