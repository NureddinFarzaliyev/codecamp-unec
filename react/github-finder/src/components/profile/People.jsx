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
            <div key={i} onClick={() => {navigate(`/${person.login}`)}} className='border-2 m-2 p-2 flex items-center'>
                <img src={person.avatar_url} alt={person.login} className='h-16 w-16' />
                <p>{person.login}</p>
            </div>
        )
      })}
    </div>
  )
}

export default People
