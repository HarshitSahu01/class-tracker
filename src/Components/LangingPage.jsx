import React from 'react'
import video from '../assets/LandingPageVideo.mp4'
import DetailsForm from './DetailsForm'
import logo from '../assets/logo.svg'
const LangingPage = () => {
  return (
    <div className='main min-w-screen h-screen flex flex-col justify-center items-center'>
        <video className='w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity' src={video} autoPlay loop muted ></video>
        <div className="content top-60 bg-gray-800 bg-opacity-50 backdrop-blur-sm  flex lg:flex-row flex-col justify-center gap-6 lg:gap-44 items-center text-white absolute w-[80vw] px-12 py-12 rounded-2xl">
           <div className="left rounded-lg h-[35vh] px-5 flex flex-col gap-5 justify-center items-center">
            <div className="img">
            <img src={logo} alt="Logo" className="logo w-[10vw]"  />
            </div>
            <div className="head text-4xl font-extrabold text-white flex flex-col justify-center items-center">
                Welcome to <span className='text-orange-500'>CLASS TRACKER!</span>
            </div>
           </div>
           <div className="right  bg-opacity-50 backdrop-blur-3xl">
    <DetailsForm/>
</div>

        </div>
    </div>
  )
}

export default LangingPage