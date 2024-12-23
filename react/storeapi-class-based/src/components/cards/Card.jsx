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
        <div className='card-item border-2 p-20 m-3 h-80 w-80 rounded-lg cursor-pointer hover:scale-105 transition relative shadow-xl bg-white flex flex-col items-center justify-around' 
        onClick={() => this.setState({isOpen: true})}>
            <img src={image} alt="" className='object-contain h-80' />
            <div className="image-overlay absolute h-80 w-[102%]"></div>
            <h1 className='text-center font-bold absolute bottom-5 text-white image-header'>{title}</h1>
        </div>

        <Dialog open={this.state.isOpen} onClose={() => this.setState({isOpen: false})} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/80 data-[closed]:opacity-50 duration-200" transition />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel transition className="flex flex-col items-center gap-1 max-w-lg space-y-4 bg-white rounded-lg shadow-xl p-12 duration-200 ease-out data-[closed]:translate-y-[-100px] data-[closed]:opacity-0">
            <h1 className='font-bold text-xl'>{title}</h1>
            <img src={image} className='h-40 w-min' />
            <p>{description}</p>
            <div className='flex gap-1 items-center w-full'>
              <span className='border-2 py-2 px-4 border-accent rounded-full'>{category}</span>
              <span className='border-2 py-2 px-4 border-indigo-800 rounded-full'>{rating.rate} / 5</span>
            </div>
            <div className='flex gap-1 items-center w-full justify-between mt-20'>
              <span className='border-2 py-2 px-4 border-emerald-700 rounded-full font-bold text-xl'>${price}</span>
              <div>
                <button className='py-2 px-7 border-2 text-red-800 border-red-800 rounded-full text-xl transition hover:scale-105 opacity-70 hover:opacity-100' onClick={() => this.setState({isOpen: false})}>Cancel</button>
                <button className='py-2 px-10 bg-accent rounded-full font-bold text-white text-xl btn-glow-hover transition hover:scale-105 ml-2' onClick={() => this.setState({isOpen: false})}>Buy</button>
              </div>
            </div>
          </DialogPanel>
        </div>
        </Dialog>
        </>
    )
  }
}

export default Card
