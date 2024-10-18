import React from 'react'
import video from '../assets/LandingPageVideo.mp4'
import DetailsForm from './DetailsForm'
import logo from '../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom' 
const LangingPage = () => {
  const navigate = useNavigate();
  return (
    <div className='main min-w-screen h-screen flex flex-col justify-center items-center'>
        <video className='w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity' src={video} autoPlay loop muted ></video>
        <div className="content top-44 bg-gray-800 bg-opacity-50 backdrop-blur-sm  flex lg:flex-row flex-col justify-center gap-6 lg:gap-44 items-center text-white absolute w-[80vw] px-12 py-12 rounded-2xl">
           <div className="left rounded-lg h-[35vh] px-5 flex flex-col gap-5 justify-center items-center">
            <div className="">
            <img src={logo} alt="Logo" className="logo w-[12vw] h-[24vh]"  />
            </div>
            <div className="head text-4xl font-extrabold text-white flex flex-col justify-center items-center">
                Welcome to <span className='text-orange-500'>CLASS TRACKER!</span>
            </div>
           </div>
           <div className="right ">
    {/* <DetailsForm/> */}
    <div className="getstarted">
      <button onClick={()=>{
        navigate('/StudentRegistration')
      }}>
        <span className="content text-4xl font-extrabold  bg-orange-400 w-32 h-20 px-4 rounded-lg hover:bg-orange-500 hover:text-black py-3">
          Get Started{" "} →
        </span>
      </button>
    </div>
</div>

        </div>
    </div>
  )
}

export default LangingPage