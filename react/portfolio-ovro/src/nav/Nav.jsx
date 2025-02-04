import React, { useEffect, useState } from 'react'
import { BiHome, BiCalendar } from 'react-icons/bi'
import { FaInfo, FaPenNib, FaCommentDots, FaQuoteRight, FaBook} from "react-icons/fa";
import { IoPerson } from 'react-icons/io5';

const Nav = ({}) => {

    const [activeNav, setActiveNav] = useState('home') 

    const sectionIdList=['home', 'about-us', 'our-service', 'my-skill', 'portfolio', 'testimonial', 'our-blog', 'contact-us']
    const sectionIconList=[<BiHome />, <FaInfo />, <BiCalendar />, <FaPenNib />, <FaCommentDots />, <FaQuoteRight />, <FaBook />, <IoPerson/>]

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {    
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setActiveNav(entry.target.id)
                }
            })
        },{
            rootMargin: '0px 0px -150px 0px',
        })   

        const sections = document.querySelectorAll('section')

        sections.forEach(section => {
            observer.observe(section)
        })
    }, [])

  return (
    <div className='text-white sticky w-full top-[50%] translate-y-[-50%] flex items-center justify-end z-[999999]'>
        <ul className='flex justify-between flex-col'>
            {sectionIdList.map((sectionId, i) => {
            return (
                <a className='text-5xl relative nav-item' 
                href={`#${sectionId}`} onClick={() => {setActiveNav(sectionId)}}>
                    <li key={i} 
                        className={`${activeNav === sectionId ? 'text-black bg-accent border-accent' : 'transition-all  duration-300 text-black dark:text-white bg-secondary/10 dark:bg-secondary'} 
                        m-2 rounded-md border-[1px] border-white/80 w-min p-3 dark:hover:bg-accent hover:bg-accent dark:hover:text-black `}>
                            {sectionIconList[i]}
                    </li>
                    <div className='absolute top-[50%] translate-y-[-50%] right-[-200%] bg-accent text-xl text-black font-bold rounded-md text-center justify-center w-44 h-[80%] flex items-center nav-hidden'>
                        {sectionId.split("-").map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(" ")}
                    </div>
                </a>
            )
            })}
        </ul>
    </div>
  )
}

export default Nav
