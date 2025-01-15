import React, { useState } from 'react'
import 'react-range-slider-input/dist/style.css';
import RangeSlider from 'react-range-slider-input'; 

const RangeSliderComponent = () => {
  const [minVal, setMinVal] = useState(0)
  const [maxVal, setMaxVal] = useState(50)

  return (
    <div className='mb-5'>
      <h1 className='text-md font-medium mb-2'>Widget Price Filter</h1>
      <div className='flex justify-between my-3 items-end gap-1'>
        <div className='flex flex-col w-10 md:w-16 lg:w-24'>
          <span className='w-max text-sm mb-3 opacity-50'>Min price</span>
          <input type="text" value={minVal} className='border-[1.5px] border-main-text dark:border-white/20 outline-none dark:bg-main-text border-opacity-40 p-2 rounded-md font-bold'
          onChange={(e) => {if(e.target.value >= 0 && e.target.value <= 50) setMinVal(e.target.value)}} />
        </div>
        <div className='mb-2 text-2xl font-light'>
          -
        </div>
        <div className='flex flex-col w-10 md:w-16 lg:w-24'>
          <span className='w-max text-sm mb-3 opacity-50'>Max price</span>
          <input type="text" value={maxVal} className='border-[1.5px] border-main-text dark:border-white/20 outline-none dark:bg-main-text border-opacity-40 p-2 rounded-md font-bold'
           onChange={(e) => {if(e.target.value >= 0 && e.target.value <= 50) setMaxVal(e.target.value)}} />
        </div>
      </div>
      <RangeSlider min={0} max={50} step={10} defaultValue={[0, 50]} value={[minVal, maxVal]} onInput={(e) => {setMinVal(e[0]); setMaxVal(e[1])}} />
      <p className='mt-5'>Price: ${minVal} - ${maxVal}</p>
    </div>
  )
}

export default RangeSliderComponent
