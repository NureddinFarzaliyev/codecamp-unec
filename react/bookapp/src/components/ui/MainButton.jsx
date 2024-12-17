import React, { Component } from 'react'

export class MainButton extends Component {
  render() {
    return (
      <button style={{height: this.props.h, width: this.props.w}} 
      className={`button-gradient button-circle flex text-white items-center justify-center gap-3 rounded-md hover:translate-y-[-5px] transition-transform duration-500 relative overflow-hidden`}>
          {this.props.icon}
          {this.props.text}
      </button>
    )
  }
}

export default MainButton
