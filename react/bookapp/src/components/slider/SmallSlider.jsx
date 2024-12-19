import React, { Component } from 'react'
import Container from '../ui/Container'
import Slider from './Slider'
import cardImg1 from '../../img/slide-img-4.png'
import cardImg2 from '../../img/slide-img-5.png'
import cardImg3 from '../../img/slide-img-6.png'
import avatar from '../../img/avatar-1.jpg'
import { CiLocationOn } from 'react-icons/ci'

export class SmallSlider extends Component {

constructor() {
    super();
    this.cards = [
        {
            sub: 'Barber Shop',
            title: 'City Tower Barber Shop',
            author: 'John Doe',
            location: 'City Tower, Road: 1285 USA',
            price: '$350,00',
            oldPrice: '$400,00',
            image: cardImg1,
        },
        {
            sub: 'Coffee Shop',
            title: 'Downtown Coffee',
            author: 'Jane Smith',
            location: 'Downtown, Road: 1234 USA',
            price: '$150,00',
            oldPrice: '$200,00',
            image: cardImg2,
        },
        {
            sub: 'Book Store',
            title: 'Central Book Store',
            author: 'Emily Johnson',
            location: 'Central Plaza, Road: 5678 USA',
            price: '$250,00',
            oldPrice: '$300,00',
            image: cardImg3,
        }
    ];
  }

  render() {
    return (
      <Container>
        <div className='mt-10 flex items-center justify-center'>
        <Slider slides={this.cards.map((card, index) => {
            return(
                <div key={index} className='small-slide-hover md:flex md:p-0 gap-5 md:h-96 border-2 border-opacity-60 rounded-lg overflow-hidden xl:w-[50vw]'>
                    <img src={card.image} alt={card.title} />
                    <div className='flex flex-col justify-center pr-20 gap-2 m-5 md:m-0'>
                        <span className='opacity-50 text-sm font-medium'>{card.sub}</span>
                        <h1 className='font-bold text-2xl'>{card.title}</h1>
                        <div className='flex gap-2 items-center'>
                            <img src={avatar} alt="avatar" className='h-6 rounded-full overflow-hidden' />
                            <p className='opacity-60 text-sm'>by <span className='underline'>{card.author}</span></p>
                        </div>
                        <div className='flex gap-2 items-center opacity-70 text-sm'>
                            <CiLocationOn />
                            <p>{card.location}</p>
                        </div>
                        <div className='flex gap-2 items-end'>
                            <p className='text-xl font-bold'>{card.price}</p>
                            <p className='text-sm line-through opacity-70 mb-[1px]'>{card.oldPrice}</p>
                        </div>
                        <button className='w-28 text-sm h-8 rounded-full mt-2 border-2 font-medium border-opacity-50'>
                            Book Now
                        </button>
                    </div>
                </div>
            )
        })} />
        </div>

      </Container>
    )
  }
}

export default SmallSlider
