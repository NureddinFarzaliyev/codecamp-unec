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
          <a href={repo.html_url} target='_blank'>
          <div key={i} className='border-[1px] border-opacity-20 border-white rounded-lg mt-3 p-2 flex flex-col gap-1 hover:border-opacity-60 cursor-pointer transition overflow-hidden'>
            <h3 className='text-lg font-bold'>{repo.name}</h3>
            <p className='opacity-50 text-xs'><span className='font-semibold'>[{repo.language}]</span> {repo.description}</p>
          </div>
          </a>
        )
    })}
    </div>
  )
}

export default Repos
