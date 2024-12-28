import React from 'react'

const SearchBar = ({handleInput}) => {
  return (
    <input type="text" onChange={(e) => {handleInput(e.target.value)}}
    className='text-black' />
  )
}

export default SearchBar
