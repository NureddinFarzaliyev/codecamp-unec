import React, { Component } from 'react'

export class ServiceH extends Component {
  render() {
    return (
      <div className='mt-10 mb-4 text-xl font-semibold'>
        {this.props.children}
      </div>
    )
  }
}

export default ServiceH
