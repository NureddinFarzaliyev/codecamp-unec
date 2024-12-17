import React, { Component } from 'react'

class NavLink extends Component {
  render() {
    return (
        <div className='cursor-pointer hover:text-accent transition-colors font-medium'>
            {this.props.text}
        </div>
    )
  }
}

export default NavLink
