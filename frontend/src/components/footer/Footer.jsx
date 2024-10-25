import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer relative flex flex-col  text-[#d9d9d9] bg-[#323232] '>
        <div className="container grid grid-cols-[2fr_1fr_1fr] gap-[80px] pl-20 py-14">
            <div className="left flex flex-col gap-[20px] items-start">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque a dolor quam non nesciunt omnis accusantium numquam optio voluptates incidunt porro voluptas officiis quos quo laborum obcaecati iste, aut harum!</p>
            <div className='social icon gap-5 flex'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
               
            </div>

            </div>
            <div className="center flex flex-col gap-[20px] items-start">
                <h1 className='font-bold text-3xl '>Company</h1>
                <ul className=''>
                    <li className='mb-[10px]'>Home</li>
                    <li className='mb-[10px]' >About</li>
                    <li className='mb-[10px]'>Delivery</li>
                    <li className='mb-[10px]'>Private policy</li>
                </ul>
            </div>
            <div className="right flex flex-col gap-[20px] items-start">
                <h1 className='font-bold text-3xl '>Get in  touch</h1>
                <ul>
                    <li className='mb-[10px]'>+91 7869937371</li>
                    <li className='mb-[10px]'>sohelsvvv@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr className='w-full my-[20px] border-none h-[2px] bg-gray-600'/>
        <div className=' self-center mb-[20px]'>Copyright @2024</div>
        
    </div>
  )
}

export default Footer