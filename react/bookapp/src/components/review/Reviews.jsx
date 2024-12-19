import React, { Component } from 'react'
import Container from '../ui/Container'
import ReviewCard from './ReviewCard';

export class Reviews extends Component {
    constructor(){
        super();
        
        this.reviews = [{
            name: 'Mark Jco',
            location: "LA",
            time: '4 days ago',
            title: 'Ana Studios was very logical and creative at the same time',
            content: "The client received excellent feedback on DePalma Studios’ designs due to their website's improved look and feel. The team was very communicative and collaborative, and they demonstrated a unique understanding of the client’s requirements, providing very. "
        },
        {
            name: 'Jane Doe',
            location: "NY",
            time: '2 days ago',
            title: 'Amazing experience with Ana Studios',
            content: "Ana Studios provided exceptional service and creativity. Their designs were top-notch and they were very responsive to our needs."
        },
        {
            name: 'John Smith',
            location: "Chicago",
            time: '1 week ago',
            title: 'Highly recommend Ana Studios',
            content: "The team at Ana Studios exceeded our expectations. They were professional, innovative, and delivered on time. We are thrilled with the results from Ana Studios. Their attention to detail and creativity were outstanding."
        },
        {
            name: 'Emily Johnson',
            location: "San Francisco",
            time: '3 days ago',
            title: 'Fantastic work by Ana Studios',
            content: "We are thrilled with the results from Ana Studios. Their attention to detail and creativity were outstanding. Their designs were top-notch and they were very responsive to our needs."
        },
        {
            name: 'Michael Brown',
            location: "Miami",
            time: '5 days ago',
            title: 'Great collaboration with Ana Studios',
            content: "Working with Ana Studios was a pleasure. They understood our vision and brought it to life beautifully. Ana Studios provided exceptional service and creativity. Their designs were top-notch and they were very responsive to our needs."
        }]
    }

  render() {
    return (
      <Container>
        {this.reviews.map((review, index) => <ReviewCard review={review} key={index} i={index} /> )}
      </Container>
    )
  }
}

export default Reviews
