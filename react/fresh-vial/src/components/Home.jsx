import React from 'react'
import bg from '../assets/images/bg-1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.css';
import { motion } from 'motion/react';

const Home = () => {
  return (
    <div>
      <img src={bg} alt="background-image" className='home-bg' />
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
    >
      {[0,1].map((i) => {
        return (
            <SwiperSlide key={i}>
                <div className='slide-item'>
                    <h1>Always want safe and good water for healthy life.</h1>
                    <p>Lorem ipsum dolor sit, aquia Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sed expedita met consectetur adipisicing elit. Dicta sed expedita qui quia Dicta sed expedita qui  qui quia Dicta sed </p>
                    <motion.button 
                    transition={{duration: 0.5}}
                    whileHover={{backgroundColor: "#fff", color: "#2C2D3E"}}>
                        Learn More
                    </motion.button>
                </div>
            </SwiperSlide>
      )})}
    </Swiper>
    </div>
  )
}

export default Home
