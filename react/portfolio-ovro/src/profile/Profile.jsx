import React from 'react'
import avatar from '../assets/images/avatar.png'
import { BsTwitterX, BsInstagram, BsFacebook, BsLinkedin, BsGlobe, BsDownload } from 'react-icons/bs'
import AccentBtn from '../ui/AccentBtn'

const Profile = () => {

  const socialMedia = [<BsTwitterX />, <BsInstagram />, <BsFacebook />, <BsLinkedin />, <BsGlobe />]

  return (
    <div className='h-[75vh] w-[100%] bg-secondary/10 dark:bg-white/10 border-[1px] rounded-md border-white/10 md:sticky md:top-[50%] md:bottom-[50%] md:translate-y-[-50%] py-4 flex flex-col items-center justify-between z-[0]'>
      <div className='object-fit w-[90%] flex items-center justify-center mx-auto'>
        <img src={avatar} alt="avatar" />
      </div>
      <h1 className='dark:text-white text-center my-3 text-2xl font-bold'>Alex Carry</h1>
      <p className='dark:text-white text-center px-3 text-sm'>Hi, I’m Alex, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences.</p>
      <ul className='flex gap-2 items-center justify-center mt-3 flex-wrap px-3'>
        {socialMedia.map((social, i) => {
          return (
            <li key={i} className='text-xl dark:text-white p-3 dark:border-white border-black rounded-full border-[1px] hover:border-accent hover:bg-accent hover:text-black transition duration-500 cursor-pointer'>
              {social}
            </li>
          )
          })
        }
      </ul>
      <div className='px-4'>
        <AccentBtn text={"DOWNLOAD NOW"} icon={<BsDownload />} />
      </div>
      <p className='dark:text-white text-sm'>© 2024 OVRO. All Rights Reserved.</p>
    </div>
  )
}

export default Profile
