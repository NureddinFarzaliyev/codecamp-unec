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
            rootMargin: '-100px',
        })   

        const sections = document.querySelectorAll('section')

        sections.forEach(section => {
            observer.observe(section)
        })
    }, [])

  return (
    <div className='text-white sticky top-[50%] w-full translate-y-[-50%] flex items-center justify-end'>
        <ul className='flex justify-between flex-col'>
            {sectionIdList.map((sectionId, i) => {
            return (
                <a className='text-5xl' 
                href={`#${sectionId}`} onClick={() => {setActiveNav(sectionId)}}>
                    <li key={i} 
                        className={`${activeNav === sectionId ? 'text-black bg-accent border-accent' : 'transition-all  duration-500 text-black dark:text-white bg-white/50 dark:bg-secondary'} m-2 rounded-md border-[1px] border-white/80 w-min p-3`}>
                            {sectionIconList[i]}
                    </li>
                </a>
            )
            })}
        </ul>
    </div>
  )
}

export default Nav
