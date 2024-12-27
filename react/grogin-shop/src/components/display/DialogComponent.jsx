import React from 'react'
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'
import { GiKnifeFork } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const DialogComponent = ({isOpen, setIsOpen, info}) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/80 data-[closed]:opacity-50 duration-200" transition />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel transition
          className="flex flex-col gap-1 text-main-text w-[90vw] h-[90vh] bg-white rounded-lg shadow-xl p-12 duration-200 ease-out data-[closed]:translate-y-[-100px] data-[closed]:opacity-0 relative overflow-scroll lg:overflow-hidden">
              <div className=''>
                <h1 className='text-2xl font-bold mb-4'>{info.strMeal}</h1>
                
                <div className='flex items-center lg:items-start flex-col lg:grid grid-cols-2 gap-5 lg:gap-10 xl:gap-24 relative'>
                  <div>
                    <div className='flex gap-1'>
                      <span className='bg-cart-green py-1 px-4 font-medium rounded-full border-[1px] border-cart-green bg-opacity-30'>{info.strArea}</span>
                      <span className='bg-sale-purple py-1 px-4 font-medium rounded-full border-[1px] border-sale-purple bg-opacity-30'>{info.strCategory}</span>
                    </div>
                    <h3 className='font-medium mt-4 text-lg'>Instructions</h3>
                    <p className='mt-2 opacity-80 lg:max-h-[58vh] overflow-scroll'>{info.strInstructions}</p>
                  </div>
                  <div className='flex items-center justify-center h-full'>
                    <img src={info.strMealThumb} alt={info.strMeal} className='rounded-lg shadow-md mt-5 lg:mt-0' />
                  </div>
                </div>

                
              </div>
              <button className='flex gap-4 py-2 px-6 w-min rounded-full border-2 lg:absolute mt-5 lg:mt-0 bottom-10 border-cart-green hover:bg-white hover:text-cart-green bg-cart-green text-xl items-center text-white hover:scale-110 transition hover:shadow-xl duration-300' 
              onClick={() => {setIsOpen(false)}}><GiKnifeFork /> Ready</button>
              <button onClick={() => {setIsOpen(false)}}
              className='absolute right-10 top-10 text-xl p-1 border-2 transition border-main-text text-main-text opacity-50 hover:opacity-100 hover:border-sale-red rounded-full hover:text-sale-red'><IoMdClose /></button>
          </DialogPanel>
        </div>
      </Dialog>
  )
}

export default DialogComponent
