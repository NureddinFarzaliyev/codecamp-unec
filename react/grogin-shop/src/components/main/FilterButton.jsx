import React from 'react'
import { FaFilter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const FilterButton = ({setIsFilterOpen, isFilterOpen}) => {
  return (
    <button className={`z-[999999] ${isFilterOpen ? 'bg-red-800' : 'bg-cart-green'} rounded-r-md rounded-e-md shadow-lg fixed md:hidden left-0 top-40 h-16 w-16 flex items-center justify-center text-2xl text-white`} onClick={() => {setIsFilterOpen(!isFilterOpen)}}>
      {isFilterOpen ? <IoMdClose/> : <FaFilter/>}
    </button>
  )
}

export default FilterButton
