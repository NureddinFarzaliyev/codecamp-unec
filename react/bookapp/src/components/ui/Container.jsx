import React, { Component } from 'react'

export class Container extends Component {
  render() {
    return (
      <div className='px-4 md:px-20 lg:px-44 2xl:px-64'>
        {this.props.children}
      </div>
    )
  }
}

export default Container
