import React from 'react'
import Section from './Section'

const ServicesSection = () => {
  return (
    <Section sectionId='our-service' subheader="My Services" header="Elevating Brands Intuitive" highlight="Design" >
        {[{title: "UI/UX Design", description: "Designing intuitive, user-focused interfaces that prioritize functionality and seamless navigation."},
        {title: "User Research & Prototyping", description: "Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs."},
        {title: "Responsive Web Design", description: "Crafting designs that adapt seamlessly across all devices, ensuring a consistent user experience."},
        {title: "Wireframing & Visual Design", description: "Creating detailed wireframes and visually stunning designs to bring ideas into focus."},
        ].map((service, index) => (
            <div data-aos="fade-left" key={index} className="p-6 rounded-md border-[1px] border-white/50 hover:border-accent cursor-pointer text-text dark:text-white bg-secondary/10 my-6">
                <h3 className="text-3xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-lg">{service.description}</p>
            </div>
        ))}
    </Section>
  )
}

export default ServicesSection
