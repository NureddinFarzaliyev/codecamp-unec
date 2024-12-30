import React, { useEffect, useState } from 'react'

const Nav = ({sectionIdList}) => {

    const [activeNav, setActiveNav] = useState('home') 

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {    
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setActiveNav(entry.target.id)
                }
            })
        })   

        const sections = document.querySelectorAll('section')

        sections.forEach(section => {
            observer.observe(section)
        })

        console.log(sectionIdList)
    }, [])

  return (
    <div className='bg-black text-white sticky top-[50%] w-full translate-y-[-50%]'>
        <ul className='flex justify-between flex-col'>
            {sectionIdList.map((sectionId, i) => {
            return (
                <li key={i} className={`${activeNav === sectionId ? 'text-red-500' : 'text-white'}`}>
                    <a href={`#${sectionId}`} onClick={() => {setActiveNav(sectionId)}}>
                        {sectionId.split("-").map((name) => name.charAt(0).toUpperCase() + name.slice(1)).join(" ")}
                    </a>
                </li>
            )
            })}
        </ul>
    </div>
  )
}

export default Nav
