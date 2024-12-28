import React from 'react'
import { useNavigate } from 'react-router'
import { FiExternalLink } from "react-icons/fi";

const SearchResult = ({data}) => {

    const navigate = useNavigate()

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 px-5'>
      {data.map((user, i) => {
        return (
          <div key={i} className='flex items-center bg-fg rounded-xl shadow-xl p-5 gap-5'>
            <img src={user.avatar_url} alt={user.login} className='sm:h-44 sm:w-44 h-32 w-32 rounded-xl shadow-md' />
            <div className='flex flex-col gap-3'>
              <p className='font-bold text-xl md:text-2xl'>{user.login}</p>
              <div className='bg-bg w-fit px-6 py-2 rounded-md cursor-pointer hover:scale-110 shadow-md transition hover:bg-white hover:text-bg duration-300'
              onClick={() => navigate(`/${user.login}`)}>See Details</div>
              <a className='bg-bg w-fit flex items-center gap-2 px-6 py-2 rounded-md cursor-pointer hover:scale-110 shadow-md transition hover:bg-white hover:text-bg duration-300 opacity-50' 
              href={user.html_url} target='_blank'> <FiExternalLink /> GitHub</a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SearchResult
