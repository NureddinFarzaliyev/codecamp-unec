import React from 'react'
import SectionHeader from './SectionHeader'
import SectionSubheader from './SectionSubheader'

const Section = ({header, highlight, subheader, children, sectionId}) => {
  return (
      <section id={sectionId} className='md:ml-5 pt-5 mt-10 px-5 md:px-0 xl:pr-20'>
        <SectionSubheader text={subheader} />
        <SectionHeader text={header} highlight={highlight} />
        {children}
      </section>
  )
}

export default Section
