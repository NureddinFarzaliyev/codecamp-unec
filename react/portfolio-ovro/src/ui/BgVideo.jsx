import React from 'react'
import video from '../assets/videos/video.mp4'

const BgVideo = () => {
  return (
    <div className='h-dvh w-dvw fixed top-0 left-0 z-[0]'>
      <video src={video} autoPlay loop className='h-dvh w-dvw object-cover z-[-1]'></video>
      <div className='h-dvh w-dvw z-0 fixed top-0 bg-white/80 dark:bg-secondary/50'></div>
    </div>
  )
}

export default BgVideo
