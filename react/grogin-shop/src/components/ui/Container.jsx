import React from 'react'

const Container = ({children}) => {
  return (
    <div className='xl:w-[90%] 2xl:w-[80%] w-dvw xl:ml-[5%] 2xl:ml-[10%] px-5 xl:px-0'>
      {children}
    </div>
  )
}

export default Container
