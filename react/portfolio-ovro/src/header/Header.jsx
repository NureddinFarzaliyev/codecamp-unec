import React from 'react'
import logoBlack from '../assets/images/logi.png'
import logoWhite from '../assets/images/logo-dark.png'
import { Switch } from '@headlessui/react'
import AccentBtn from '../ui/AccentBtn'
import { FaRegEnvelope } from "react-icons/fa";

const Header = ({isDark, setIsDark}) => {
  return (
    <div className=' text-black dark:text-white z-20 relative h-24 flex items-center justify-between px-2 md:px-10 lg:px-32'>
      <img src={isDark ? logoWhite : logoBlack} alt="ovro" className='h-10' />

      <div className='flex items-center gap-4'>
        <div className='switch'>
            <Switch
            checked={isDark}
            onChange={setIsDark}
            className="group inline-flex h-8 w-16 items-center rounded-full bg-black/30 dark:bg-black/80 border-gray-500/50 transition">
            <span className="size-6 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-9" />
          </Switch>
        </div>
        <div className='hidden md:block'>
          <AccentBtn text={"HIRE ME"} icon={<FaRegEnvelope />} />
        </div>
      </div>
    </div>
  )
}

export default Header
