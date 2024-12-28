import React from 'react'

const SearchBar = ({handleInput}) => {
  return (
    <div className='flex justify-center'>
      <input type="text" onChange={(e) => {handleInput(e.target.value)}} placeholder='Type a username to search...'
      className='px-5 mb-5 text-xl font-medium transition w-[80vw] md:w-[50vw] h-14 rounded-full bg-fg bg-opacity-50 outline-none border-2 border-fg border-transparent focus:border-white focus:scale-105 hover:scale-105' />
    </div>
  )
}

export default SearchBar
