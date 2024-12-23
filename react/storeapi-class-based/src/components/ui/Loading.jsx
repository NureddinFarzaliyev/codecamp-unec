import React, { Component } from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export class Loading extends Component {
  render() {
    return (
      <div className={`text-center text-white text-3xl w-dvw flex items-center justify-center absolute left-0`}>
          <AiOutlineLoading3Quarters className='animate-spin' />
      </div>
    )
  }
}

export default Loading
