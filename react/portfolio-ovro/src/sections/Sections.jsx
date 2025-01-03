import React from 'react'
import HomeSection from './HomeSection'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import SkillsSection from './SkillsSection'
import PortfolioSection from './PortfolioSection'
import TestimonialSection from './TestimonialSection'

const Sections = () => {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <PortfolioSection />
      <TestimonialSection />
      <section className='h-dvh mb-44 bg-purple-900' id='our-blog'>our-blog</section>
      <section className='h-dvh mb-44 bg-gray-900' id='contact-us'>contact-us</section>
    </div>
  )
}

export default Sections
