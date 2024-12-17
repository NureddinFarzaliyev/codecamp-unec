import React, { Component } from 'react'
import Slider from './Slider'
import img1 from './../../../public/slide-img-1.jpg'
import img2 from './../../../public/slide-img-2.jpg'
import img3 from './../../../public/slide-img-3.jpg'

export class BigSlider extends Component {

  render() {
    return (
        <section className='flex items-center justify-center mt-16'>
            <Slider slides={[img1, img2, img3].map((url, index) => <img key={index} src={url} alt="" className='rounded-lg xl:w-[60vw]' />)} />
        </section>
    )
  }
}

export default BigSlider
