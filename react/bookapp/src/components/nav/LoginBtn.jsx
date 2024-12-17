import React, { Component } from 'react'
import { CiGlobe, CiLogin } from "react-icons/ci";
import MainButton from '../ui/MainButton';

class LoginBtn extends Component {
  render() {
    return (
        <div className={`${this.props.hideOnMobile === true ? 'hidden xl:flex' : 'flex self-center mt-10'} gap-5`}> 
            <button className='flex items-center gap-2 text-lg font-medium'> <CiGlobe className='text-2xl' /> Eng </button>
            <MainButton h="40px" w="110px" text="Login" icon={<CiLogin className='text-xl font-bold' />} />
        </div>
    )
  }
}

export default LoginBtn
