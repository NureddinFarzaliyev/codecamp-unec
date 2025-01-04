import React from 'react'
import Section from './Section'
import { BiEnvelope } from 'react-icons/bi'
import AccentBtn from '../ui/AccentBtn'

const ContactSection = () => {
  return (
    <Section header="Have Any Project in Mind," highlight="Let's Talk" sectionId='contact-us' subheader="Contact Me">
        <div data-aos="zoom-in" className='dark:bg-white/10 bg-secondary/10 dark:text-white text-text rounded-lg p-8 border-[1px] border-white/50 mt-10'>
            <form action="#" method="POST" className='grid gap-6'>
                <h1 className='text-3xl font-medium dark:text-white text-text'>Let's Work Together!</h1>
                <div className='flex gap-4 flex-col md:flex-row'>
                    <input type="text" name="name" className='dark:bg-white/20 bg-secondary/10 font-bold dark:text-white text-text w-full rounded-lg px-4 py-6' placeholder='Full Name' />
                    <input type="email" name="mail" className='dark:bg-white/20 bg-secondary/10 font-bold dark:text-white text-text w-full rounded-lg px-4 py-6' placeholder='Email Adress' />
                </div>
                <div className='flex gap-4 flex-col md:flex-row'>
                    <input type="number" name="number" className='dark:bg-white/20 bg-secondary/10 font-bold dark:text-white text-text w-full rounded-lg px-4 py-6' placeholder='Phone Number' />
                    <input type="text" name="text" className='dark:bg-white/20 bg-secondary/10 font-bold dark:text-white text-text w-full rounded-lg px-4 py-6' placeholder='Subject' />
                </div>
                <input type="text" name="budget" className='dark:bg-white/20 bg-secondary/10 font-bold dark:text-white text-text w-full rounded-lg px-4 py-6' placeholder='Your Budget (optional)' />
                <input type="text" name="message" className='dark:bg-white/20 bg-secondary/10 font-bold dark:text-white text-text w-full rounded-lg px-4 py-6 h-64' placeholder='Message' />
                <div className='w-fit'>
                    <AccentBtn text='SEND' icon={<BiEnvelope />} />
                </div>
            </form>
        </div>
    </Section>
  )
}

export default ContactSection
