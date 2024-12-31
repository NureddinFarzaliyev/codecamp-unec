import React from 'react'

const AccentBtn = ({text, icon}) => {
  return (
    <button className='px-6 py-3 flex gap-2 items-center bg-accent rounded-full font-bold border-[1px] border-transparent text-lg hover:border-black dark:hover:border-white hover:bg-transparent transition hover:text-black dark:hover:text-white duration-500 text-black'>
      {text} {icon}
    </button>
  )
}

export default AccentBtn
