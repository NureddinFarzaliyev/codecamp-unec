import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchData } from '../../utils'
import Repos from './Repos'
import People from './People'

const Profile = () => {

  const {username} = useParams() 
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData(`https://api.github.com/users/${username}`, setData)
  }, [username])


  console.log(data)

  return (
    <div>
      <img src={data.avatar_url} alt={data.login} className='h-44 w-44' />
      <h1>{data.name}</h1>
      <h3>{data.login}</h3>
      <p>{data.location}</p>
      <p>{data.public_repos}</p>
      <a href={data.html_url}>Github page</a>

      

      <h1>Followers</h1>
      <People url={`https://api.github.com/users/${username}/followers`} />
      <h1>Following</h1>
      <People url={`https://api.github.com/users/${username}/following`} />


      <h1>Repositories</h1>
      <Repos url={`https://api.github.com/users/${username}/repos`} />
      <h1>Starred Repositories</h1>
      <Repos url={`https://api.github.com/users/${username}/starred`} />


    </div>
  )
}

export default Profile
