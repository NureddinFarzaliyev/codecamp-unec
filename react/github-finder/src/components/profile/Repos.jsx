import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils'
import { useParams } from 'react-router'

const Repos = ({url}) => {

    const [data, setData] = useState([])
    const {username} = useParams()

    useEffect(() => {
        fetchData(url, setData)
    }, [username])

  return (
    <div>
      {data.map((repo, i) => {
        return (
          <div key={i} className='border-2 m-2 p-2'>
            <h3 className='text-2xl'>{repo.name}</h3>
            <p>{repo.description}</p>
          </div>
        )
    })}
    </div>
  )
}

export default Repos
