import React from 'react'
import Section from './Section'
import { FaFigma, FaSketch, FaWordpress } from 'react-icons/fa'
import { DiPhotoshop, DiIllustrator } from 'react-icons/di'
import { TbBrandAdobeXd } from 'react-icons/tb'

const SkillsSection = () => {
  return (
    <Section sectionId='my-skill' subheader="My Skill" header="The Tools Behind Exceptional" highlight="Design" >
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
        {[{title: "Figma", icon: <FaFigma/>, percentage: "96%"}, {title: "Sketch", icon: <FaSketch/>, percentage: "85%"}, {title: "Adobe XD", icon: <TbBrandAdobeXd/>, percentage: "90%"}, {title: "Photoshop", icon: <DiPhotoshop/>, percentage: "80%"}, {title: "Illustrator", icon: <DiIllustrator/>, percentage: "75%"}, {title: "Wordpress", icon: <FaWordpress/>, percentage: "70%"}].map((skill, index) => (
          <div data-aos="zoom-out" key={index} className="bg-secondary/10 dark:bg-white/10 p-6 rounded-md text-text dark:text-white flex flex-col items-center justify-around gap-4 border-[1px] border-white/20 hover:border-accent">
            <div className='text-5xl'>{skill.icon}</div>
            <div className='text-3xl font-bold xl'>{skill.percentage}</div>
            <div className='text-lg'>{skill.title}</div>
          </div>
        ))}
        </div>
    </Section>
  )
}

export default SkillsSection
