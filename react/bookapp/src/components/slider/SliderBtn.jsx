import React, { Component } from 'react'

export class SliderBtn extends Component {
  render() {
    return (
        <button onClick={() => {this.props.fn()}} style={this.props.style}
        className='absolute md:relative button-gradient rounded h-10 w-10 text-white flex items-center justify-center hover:scale-110 transition'> 
            {this.props.children} 
        </button>
    )
  }
}

export default SliderBtn
