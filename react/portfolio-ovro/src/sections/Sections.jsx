import React from 'react'
import HomeSection from './HomeSection'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import SkillsSection from './SkillsSection'
import PortfolioSection from './PortfolioSection'
import TestimonialSection from './TestimonialSection'
import BlogSection from './BlogSection'
import ContactSection from './ContactSection'
import FooterSection from './FooterSection'

const Sections = ({isDark}) => {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <PortfolioSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
      <FooterSection isDark={isDark} />
    </div>
  )
}

export default Sections
