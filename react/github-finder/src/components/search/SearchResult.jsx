import React from 'react'
import { useNavigate } from 'react-router'

const SearchResult = ({data}) => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-wrap'>
      {data.map((user, i) => {
        return (
          <div key={i} className='m-5'>
            <img src={user.avatar_url} alt={user.login} className='h-44 w-44' />
            <p>{user.login}</p>
            <a href={user.html_url}>Github</a>
            <button onClick={() => navigate(`/${user.login}`)}>Profile</button>
          </div>
        )
      })}
    </div>
  )
}

export default SearchResult
