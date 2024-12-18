import React, { Component } from 'react'
import Container from '../ui/Container'
import ServiceHeader from './ServiceHeader'
import ServiceDescription from './ServiceDescription'

export class Services extends Component {
  render() {
    return (
      <Container>
        <ServiceHeader />
        <ServiceDescription />
      </Container>
    )
  }
}

export default Services
