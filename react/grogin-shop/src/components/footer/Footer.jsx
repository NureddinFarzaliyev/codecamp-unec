import React from 'react'
import Container from '../ui/Container'
import { BiPhoneCall } from 'react-icons/bi'
import { CgMail } from 'react-icons/cg'
import gplay from '../../assets/img/gplay.png'
import appstore from '../../assets/img/appstore.png'
import { BsFacebook, BsInstagram, BsTwitterX, BsLinkedin } from 'react-icons/bs'

const Footer = () => {

    const footerLinks = [
        {
            header: 'Make Money With Us',
            links: [ 'Sell on Grogin', 'Sell Your Services on Grogin', 'Sell on Grogin Business', 'Sell Your Apps on Grogin', 'Become an Affiliate', 'Advertise Your Products', 'Self-Publish with Us', 'Become an Blowwe Vendor']
        },
        {
            header: 'Let Us Help You',
            links: ['Accesibility', 'Your Account', 'Returns Centre', '100% Purchase Protection', 'Grogin App Download', 'Help', 'Terms and Conditions', 'Privacy Policy', 'Shipping Rates and Policies' , 'Track Packages or View Orders']
        },
        {
            header: 'Get to Know Us',
            links: [ 'Careers for Grogin', 'About Grogin', 'Inverstor Relations', 'Grogin Devices', 'Customer reviews', 'Social Responsibility', 'Store Locations']
        }
    ]

  return (
    <footer className='bg-[#F3F4F6] dark:bg-black/50 py-10 text-main-text mt-20'>
    <Container>  
        <div className='flex justify-between flex-col lg:flex-row gap-5 border-b-2 dark:border-white/20 pb-10'>
            <div>
                <h1 className='text-xl font-bold'>Join our newsletter for £10 offs </h1>
                <p className='lg:w-96 mt-1 text-sm opacity-70'>Register now to get latest updates on promotions & coupons.Don’t worry, we not spam!</p>
            </div>
            <div>
                <div>
                    <input className='bg-white dark:bg-main-text dark:border-[1px] dark:border-white/50 dark:outline-none h-14 w-96 rounded-l-md px-5 outline-sale-purple' 
                    type="text" name='newsletter' placeholder='Enter your email adress' />
                    <button className='bg-sale-purple h-14 px-5 rounded-r-md text-white font-medium'>SEND</button>
                </div>
                <p className='text-xs ml-2 mt-2'>By subscribing you agree to our <span className='text-sale-purple'>Terms & Conditions and Privacy & Cookies Policy</span>.</p>
            </div>
        </div>

        <div className='py-10 flex flex-col gap-5 lg:grid grid-cols-5'>

            <div className='flex flex-col gap-5'>
                <h2 className='text-md font-medium'>Do you need help?</h2>
                <p className='text-sm opacity-70'>Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.</p>
                <div className='flex gap-3'>
                    <BiPhoneCall className='text-5xl' />
                    <div>
                        <p className='text-sm opacity-70'>Monday-Friday: 08am-9pm</p>
                        <h2 className='text-lg font-medium'>0 800 300-353</h2>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <CgMail className='text-5xl' />
                    <div>
                        <p className='text-sm opacity-70'>Monday-Friday: 08am-9pm</p>
                        <h2 className='text-lg font-medium'>info@example.com</h2>
                    </div>
                </div>
            </div>

            {footerLinks.map((links, i) => {
                return (
                    <div key={i}>
                        <h2 className='text-md font-medium mb-3'>{links.header}</h2>
                        <ul className='text-sm opacity-70 flex flex-col gap-1'>
                            {links.links.map((link, i) => {
                                return <li key={i}><a href='#'>{link}</a></li>
                            })}
                        </ul>
                    </div>
                )
            })}

            <div>
                <h2 className='text-md font-medium mb-5'>Download our app</h2>
                <div className='flex gap-3 flex-col'>
                    <img src={gplay} alt="Google Play" className='w-36' />
                    <img src={appstore} alt="App Store" className='w-36' />
                </div>
                <div>
                    <h2 className='text-md font-medium mt-10 mb-5'>Follow us on social media</h2>
                    <div className='flex gap-3'>
                        <BsFacebook className='text-3xl' />
                        <BsInstagram className='text-3xl' />
                        <BsTwitterX className='text-3xl' />
                        <BsLinkedin className='text-3xl' />
                    </div>
                </div>
            </div>
        </div>

        <div className='lg:flex w-full text-xs opacity-70 justify-between'>
            <p>Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by KLBTheme.</p>
            <p>Terms and Conditions Privacy Policy Order Tracking</p>
        </div>
    </Container>
    </footer>
  )
}

export default Footer
