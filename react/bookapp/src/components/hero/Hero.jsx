import React, { Component } from 'react'
import bgHero from './../../img/bg-hero.png'
import Container from './../ui/Container'

export class Hero extends Component {
  render() {
    return (
        <section className='h-[250px] overflow-hidden relative z-[-1]'>
            <img src={bgHero} alt="bghero" className='h-[328px] object-cover' />
            <Container>
                <div className='absolute top-[50%] translate-y-[-50%] text-white'>
                    <h1 className='font-bold text-3xl lg:text-5xl'>Service Details</h1>
                    <h4 className='mt-4 font-medium'>Home / Service Details</h4>
                </div>
            </Container>
        </section>
    )
  }
}

export default Hero
