import React from 'react'
import SectionHeader from './ui/SectionHeader'
import map from '../assets/images/map.png'
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.css';
import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'

const Contact = () => {
  return (
    <div className='contact-section'>
        <SectionHeader text={"CONTACT US"} />
        <img src={map} alt="map" className='map' />

        <form>
            <div>
                <h2>Leave Reply</h2>
                <div className='sender-information'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" />
                    </div>
                    <div>
                        <label htmlFor="mail">Email Adress</label>
                        <input type="email" id="mail" />
                    </div>
                </div>

                <div className='message'>
                    <label htmlFor="message">Write a Message</label>
                    <textarea id="message" rows="4"></textarea>   
                </div>

                <button type='submit'>SUBMIT</button>
            </div>

            <div className='contact-info'>
                <h2>Contact Info</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                <div>
                    <span>
                        <CiLocationOn />
                    </span>
                    <p>Dambo dika,USA,road123</p>
                </div>
                <div>
                    <span>
                        <CiMail />
                    </span>
                    <p>dotsee@one.com</p>
                </div>
                <div>
                    <span>
                        <CiPhone />
                    </span>
                    <p>+123 456 7890</p>
                </div>
            </div>
        </form>


        <SectionHeader text={"BUSINESS PARTNERS"} />

        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        breakpoints={{
            320: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            },
            1440: {
                slidesPerView: 6,
            }
        }}
        >
        {[img1, img2, img3, img4, img1, img2, img3, img4, img1, img2, img3, img4].map((url, i) => {
            return (
                <SwiperSlide key={i}>
                    <div className='slide-item'>
                        <img src={url} alt="partner" />
                    </div>
                </SwiperSlide>
        )})}
        </Swiper>

    </div>
  )
}

export default Contact
