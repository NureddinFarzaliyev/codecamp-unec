import React from 'react'
import Nav from './nav/Nav'

const App = () => {
  return (
    <div>
      <Nav sectionIdList={['home', 'about-us', 'our-service', 'my-skill', 'portfolio', 'testimonial', 'our-blog', 'contact-us']} />
      
      <section className='h-dvh bg-red-900 w-dvw mt-44' id='home'>home</section>
      <section className='h-dvh bg-green-900 w-dvw mt-44' id='about-us'>about-us</section>
      <section className='h-dvh bg-purple-900 w-dvw mt-44' id='our-service'>our-service</section>
      <section className='h-dvh bg-gray-900 w-dvw mt-44' id='my-skill'>my-skill</section>
      <section className='h-dvh bg-red-900 w-dvw mt-44' id='portfolio'>portfolio</section>
      <section className='h-dvh bg-green-900 w-dvw mt-44' id='testimonial'>testimonial</section>
      <section className='h-dvh bg-purple-900 w-dvw mt-44' id='our-blog'>our-blog</section>
      <section className='h-dvh bg-gray-900 w-dvw mt-44' id='contact-us'>contact-us</section>
    </div>
  )
}

export default App
