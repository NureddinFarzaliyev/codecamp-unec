import React from 'react'
import Section from './Section'
import PortfolioCard from '../ui/PortfolioCard'
import image1 from '../assets/images/portfolio-img1.png'
import image2 from '../assets/images/portfolio-img2.png'
import image3 from '../assets/images/portfolio-img3.png'
import image4 from '../assets/images/portfolio-img4.png'

const PortfolioSection = () => {
  return (
    <Section sectionId='portfolio' header="Innovation Designs Real" highlight="Results" subheader="My Portfolio">
        <div className='flex flex-col items-center justify-center gap-4 mt-10'>
            <PortfolioCard img={image1} header="Reelup - E commercer Video Platform" />
            <div className='md:flex gap-4'>
                <PortfolioCard img={image3} header="Academy - Sales Career" />
                <PortfolioCard img={image4} header="Logo Design" />
            </div>
            <PortfolioCard img={image2} header="Reelup - E commercer Video Platform" />
        </div>
    </Section>
  )
}

export default PortfolioSection
