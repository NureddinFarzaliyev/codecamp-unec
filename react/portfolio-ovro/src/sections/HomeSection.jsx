import React from 'react'
import Section from './Section'
import { MdArrowOutward } from "react-icons/md";
import circleText from '../assets/images/demoui-circle.png'
import others from '../assets/images/others.png'

const HomeSection = () => {
  return (
    <Section header='Designing Intuitive Experiences' highlight='Inspire' subheader='Hi, I’m Alex, UI/UX Designer' sectionId='home'>
        <div className='flex md:justify-end' data-aos="fade-left">
            <p className='lg:w-[60%] text-text mt-2 mb-5 dark:text-white text-md font-medium'>Your gateway to innovative design, seamless user experiences, and impactful solutions. Turning complex ideas into user-friendly designs. </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-center justify-between' data-aos="fade-left">
            <div className='relative w-fit bg-none cursor-pointer dark:bg-secondary rounded-full p-2 border-2 dark:border-white border-secondary'>
                <img src={circleText} className='invert-colors animate-spin duration-150 circle-text' alt="demoui" />
                <MdArrowOutward className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl dark:text-white' />
            </div>
            <div className='flex gap-2 items-center text-text dark:text-white'>
                <img src={others} alt="2K+ other people" />
                <div>
                    <p>2k+ Reviews</p>
                    <p>(4.90 of 5)</p>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" className='home-btn relative my-8 dark:bg-white/10 bg-secondary/10 rounded-md cursor-pointer transition-extra p-5 h-44 flex items-center justify-center gap-5 dark:text-white dark:hover:text-text hover:text-text 2xl:text-6xl text-4xl
        before:absolute before:top-0 before:z-0 before:h-[100%] before:w-[0%] before:bg-accent before:rounded-md before:transition-extra before:duration-500 before:ease-in-out hover:before:w-[100%]'>
            <span className='font-medium z-20'>Let's Work Together</span>
            <div className='text-3xl 2xl:text-5xl bg-white/10 p-2 rounded-full z-20'><MdArrowOutward /></div>
        </div>
    </Section>
  )
}

export default HomeSection
