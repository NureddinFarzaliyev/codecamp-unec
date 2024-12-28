import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchData } from '../../utils'
import Repos from './Repos'
import People from './People'
import { CiLocationOn } from 'react-icons/ci'
import { GoRepo } from 'react-icons/go'
import { FiExternalLink } from 'react-icons/fi'

const Profile = () => {

  const {username} = useParams() 
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData(`https://api.github.com/users/${username}`, setData)
  }, [username])



  return (
    <div className='bg-fg mx-2 sm:mx-10 rounded-lg p-5 md:p-10'>
      <div className='flex flex-col md:flex-row gap-10 items-center'>
        <img src={data.avatar_url} alt={data.login} className='h-44 w-44 rounded-lg shadow-xl' />
        <div>
          <h1 className='text-2xl font-bold'>{data.name}</h1>
          <h3 className='text-xl mb-3 opacity-70'>{data.login}</h3>
          <p className='opacity-70 flex gap-2'> <CiLocationOn/> {data.location}</p>
          <p className='opacity-70 flex gap-2'> <GoRepo /> {data.public_repos} Public Repositories</p>
          <a className='bg-bg w-fit flex items-center mt-3 gap-2 px-4 py-1 rounded-md cursor-pointer hover:scale-110 shadow-md transition hover:bg-white hover:text-bg duration-300 opacity-50' 
          href={`https://github.com/${username}`} target='_blank'> <FiExternalLink /> GitHub</a>
        </div>
      </div>

      
      <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
        <div>
          <h1 className='font-bold'>Followers</h1>
          <People url={`https://api.github.com/users/${username}/followers`} />
        </div>
        <div>
          <h1 className='font-bold'>Following</h1>
          <People url={`https://api.github.com/users/${username}/following`} />
        </div>
        <div>
          <h1 className='font-bold'>Repositories</h1>
          <Repos url={`https://api.github.com/users/${username}/repos`} />
        </div>
        <div>
          <h1 className='font-bold'>Starred Repositories</h1>
          <Repos url={`https://api.github.com/users/${username}/starred`} />
        </div>
      </div>




    </div>
  )
}

export default Profile
