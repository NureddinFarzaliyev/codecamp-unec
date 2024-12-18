import React, { Component } from 'react'
import ServiceH from '../ui/ServiceH';
import { CiSquareCheck } from 'react-icons/ci';
import Book from './Book';

export class ServiceDescription extends Component {

    constructor() {
        super();
        
        this.checks = ['100% Secure Services', 'Covid 19 Safety', 'Easy Payment Method', 'Services Quality Ensure']
        this.listName = ['Service Booking', 'Service Duration', 'Service Availability']
        this.listDescription = ['3 hours before service delivery', '40 minutes (can be extended up to 10 minutes)', '9 Am to 7 pm']
    }

  render() {
    return (
      <div>
        <ServiceH> Service Description </ServiceH>

        <p>Get Barbers at your doorstep now on your demand as per your required time and date. Trim your regular hairstyle or get a new look with a new style from the catalog. Even if you are too busy in the office and have a meeting to attend, why not get the job done in the office itself!! Choose a regular scissor cut or ask for a trimmer cut, any style you want is just a tap away! </p>
        <p className='mt-2'>Praesent lectus facilisi tempor ridiculus arcu pharetra non tellus. Torquent nisl tempori amader Magnis mollis lobortis nam, montes ut, consequat sed amet nullam.</p>

        <ServiceH> Service Description </ServiceH>

        <ul className='list-disc ml-5 flex flex-col gap-3'>
            {this.listName.map((name, index) => <li key={index}><b>{name}:</b> <span className='opacity-60 font-medium'>{this.listDescription[index]}</span> </li>)}
        </ul>

        <ServiceH> Service Features </ServiceH>

        <ul className='flex gap-3 md:gap-5 flex-wrap mb-10'>
            {this.checks.map((check, index) => <li key={index}><span className='opacity-60 flex gap-1 items-center font-medium'> <CiSquareCheck className='text-accent text-xl'/>{check}</span></li>)}
        </ul>

        <Book />
      </div>
    )
  }
}

export default ServiceDescription
