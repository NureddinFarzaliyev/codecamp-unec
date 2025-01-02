import React from 'react'
import Section from './Section'
import { FaInfo, FaCalendar, FaCommentDots, FaPenNib } from 'react-icons/fa'
import { BsTwitterX, BsInstagram, BsFacebook, BsLinkedin, BsGlobe } from 'react-icons/bs'

const AboutSection = () => {

  const socialMedia = [<BsTwitterX />, <BsInstagram />, <BsFacebook />, <BsLinkedin />, <BsGlobe />]
  

  return (
    <Section header={"Crafting Seamless User"} highlight={"Experiences"} subheader={"About Us"} sectionId={"about-us"}>
      <div data-aos="fade-left" className='my-6 p-6 bg-secondary/10 dark:bg-white/10 rounded-md border-[1px] border-white/10'>
        <h1 className='mb-6 text-text dark:text-white text-3xl font-semibold'>Alex Carry</h1>
        <p className='text-text dark:text-white'>Hi, I’m Alex Carry, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences. I specialize in crafting user-centered designs that enhance engagement and drive results. By combining research, creativity, and technical skills, I deliver solutions that not only look great but also function seamlessly. </p>
      </div>

      <div className='grid md:grid-cols-2 gap-4'>
      {[{title: "UI/UX Design", description: "Designing intuitive, user-focused interfaces that prioritize functionality & seamless navigation.", icon: <FaInfo />}, 
      {title: "User Research & Prototyping", description: "Building responsive, accessible websites that are optimized for speed & performance.", icon: <FaCalendar />},
      {title: "Responsive Web Design", description: "Creating unique, memorable brand identities that resonate with target audiences.", icon: <FaCommentDots />},
      {title: "Wireframing & Visual Design", description: "Providing expert advice & guidance on design, development, & branding projects.", icon: <FaPenNib />}].map((service, i) => {
        return (
          <div data-aos="fade-up" key={i} 
          className='p-6 bg-secondary/10 dark:bg-white/10 rounded-md border-[1px] border-white/10 lg:flex items-start gap-1 hover:border-accent transition-extra cursor-pointer'>
            <div className='text-black dark:text-white p-3 rounded-md text-4xl'>
              {service.icon}
            </div>
            <div>
              <h1 className='text-text dark:text-white text-xl font-semibold'>{service.title}</h1>
              <p className='text-text dark:text-white opacity-70'>{service.description}</p>
            </div>
          </div>
        )
      })}
      </div>

      <div className='grid md:grid-cols-2 gap-4'>
        <div>
          <h1 className='my-7 dark:text-white text-text text-3xl font-medium'>Work Experience</h1>
          <div>
            <div data-aos="zoom-in"
            className='p-6 bg-secondary/10 dark:bg-white/10 rounded-md border-[1px] border-white/10 flex flex-col gap-1 hover:border-accent transition-extra cursor-pointer'>
              <span className='text-md dark:text-white text-text opacity-60'>2010 - 2013</span>
              <h1 className='my-2 text-2xl dark:text-white text-text'>UI/UX Designer</h1>
              <span className='text-md dark:text-white text-text opacity-60'>Creative Spark Ageny</span>
              <span className='text-md dark:text-white text-text opacity-60 mt-3'>2010 - 2013</span>
              <h1 className='my-2 text-2xl dark:text-white text-text'>Senior UI/UX Designer</h1>
              <span className='text-md dark:text-white text-text opacity-60'>University of California</span>
            </div>
            <div data-aos="zoom-in" className='p-6 py-10 bg-secondary/10 dark:bg-white/10 rounded-md border-[1px] border-white/10 flex flex-col gap-1 hover:border-accent transition-extra cursor-pointer mt-4'>
              <h1 className='text-center dark:text-white text-text text-2xl font-medium'>Stay with me</h1>
              <ul className='flex gap-2 items-center justify-center mt-3 flex-wrap px-3'>
                {socialMedia.map((social, i) => {
                  return (
                    <li key={i} className='text-xl dark:text-white text-text p-3 dark:border-white border-black rounded-full border-[1px] hover:border-accent hover:bg-accent hover:text-black transition duration-500 cursor-pointer'>
                      {social}
                    </li>
                  )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1 className='my-7 dark:text-white text-3xl font-medium'>Education</h1>
          <div data-aos="zoom-in"
          className='p-6 bg-secondary/10 dark:bg-white/10 rounded-md border-[1px] border-white/10 flex flex-col gap-1 hover:border-accent transition-extra cursor-pointer'>
            <span className='text-md dark:text-white opacity-60'>2010 - 2013</span>
            <h1 className='my-2 text-2xl dark:text-white'>Bachelor's Degree in Graphic Design</h1>
            <span className='text-md dark:text-white opacity-60'>University of California</span>
            <span className='text-md dark:text-white opacity-60 mt-3'>2010 - 2013</span>
            <h1 className='my-2 text-2xl dark:text-white'>Master's Degree in User Experience Design</h1>
            <span className='text-md dark:text-white opacity-60'>University of California</span>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutSection
