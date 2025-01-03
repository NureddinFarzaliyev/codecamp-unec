import React from 'react'
import Section from './Section'
import TestimonialCard from '../ui/TestimonialCard'

const TestimonialSection = () => {
  return (
    <Section sectionId='testimonial' header='What Client Says About' highlight='My Work' subheader='Testimonial'>
        <div className='grid md:grid-cols-3 gap-4 mt-16'>
            <TestimonialCard span={true} paragraph={"Working with Alex was a game-changer for our brand. Their attention to detail and focus on creating a seamless user experience truly transformed our website. We’ve seen an incredible boost in user engagement and satisfaction."} />
            <TestimonialCard paragraph={"Alex exceeded all expectations with their innovative designs and collaborative approach. Reality that perfectly resonates with our audience."} />
            <TestimonialCard paragraph={"The designs delivered by Alex were intuitive and engaging, making a significant difference in how users interacted with our platform."} />
            <TestimonialCard span={true} paragraph={"From wireframes to the final product, Alex brought creativity and functionality together beautifully. The final design not only looks fantastic but also works flawlessly across devices."} />
        </div>
    </Section>
  )
}

export default TestimonialSection
