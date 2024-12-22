import React, { Component } from 'react'
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'


export class Card extends Component {
    

  constructor(){
    super();  

    this.state = {
        isOpen: false
    }
  }

  render() {
    const {data} = this.props
    const {title, image, price, rating, count, category, description} = data
    
    return (
        <>
        <div className='border-2 p-3 m-3' onClick={() => this.setState({isOpen: true})}>
            <img src={image} className='h-20' alt="" />
            <h1>{title}</h1>
        </div>

        <Dialog open={this.state.isOpen} onClose={() => this.setState({isOpen: false})} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/80 data-[closed]:opacity-50 duration-200" transition />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel transition className="flex flex-col gap-2 max-w-lg space-y-4 bg-white p-12 duration-200 ease-out data-[closed]:translate-y-[-100px] data-[closed]:opacity-0">

            <h1>{title}</h1>
            <img src={image} className='h-40' />
            <p>{description}</p>
            <span>{category}</span>
            <span>{rating.rate}</span>
            <span>{price}</span>
            
            <button onClick={() => this.setState({isOpen: false})}>Cancel</button>
            <button onClick={() => this.setState({isOpen: false})}>Buy</button>
          </DialogPanel>
        </div>
        </Dialog>
        </>
    )
  }
}

export default Card
