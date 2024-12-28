import React, { useState, useEffect } from 'react'
import { fetchData } from '../../utils'
import { useNavigate, useParams } from 'react-router'

const People = ({url}) => {

    const [data, setData] = useState([])
    const navigate = useNavigate()
    const {username} = useParams()

    useEffect(() => {
        fetchData(url, setData)
    }, [username])
    
  return (
    <div>
      {data.map((person, i) => {
        return(
            <div key={i} onClick={() => {navigate(`/${person.login}`)}} className='overflow-hidden border-[1px] border-opacity-20 border-white rounded-lg mt-3 p-2 flex gap-3 hover:border-opacity-60 cursor-pointer transition items-center'>
                <img src={person.avatar_url} alt={person.login} className='h-16 w-16 rounded-lg shadow-md' />
                <p>{person.login}</p>
            </div>
        )
      })}
    </div>
  )
}

export default People
