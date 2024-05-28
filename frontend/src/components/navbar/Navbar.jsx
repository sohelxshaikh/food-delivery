import React, { useState } from 'react'

import {assets} from '../../assets/frontend_assets/assets'

const Navbar = () => {


    const [menu,setMenu] = useState("home")


  return (
    <div className="navbar flex  text-[#49557e] justify-between py-[20px] items-center uppercase ">
        <img src={assets.logo} alt="" className='w-[150px]'  />
        <ul className='flex gap-[20px] items-center cursor-pointer font-[500]'>
            <li onClick={()=>setMenu('home')}  className={menu==="home"?"active border-b-2 border-[#49557e]":""}>home</li>
            <li  onClick={()=>setMenu('menu')} className={menu==="menu"?"active border-b-2 border-[#49557e]":""}>menu</li>
            <li onClick={()=>setMenu('mobile-app')}  className={menu==="mobile-app"?"active border-b-2 border-[#49557e]":""}>mobile-app</li>
            <li  onClick={()=>setMenu('contact-us')} className={menu==="contact-us"?"active border-b-2 border-[#49557e]":""}>contact-us</li>
        </ul>
        <div className='right flex cursor-pointer items-center gap-[20px] justify-between'>
            <img src={assets.search_icon} className='w-5' alt="" />
            <div className='flex items-center justify-center relative'>
            <img src={assets.basket_icon} className='w-6 h-8' alt="" />
            <div className='dot w-3 h-3 absolute -top-2 right-0 bg-red-600 rounded-full'></div>
            
            </div>
            <button className='border-[1px] border-red-500 py-1 px-4 rounded-2xl hover:bg-red-100 transition'>Sign-In</button>
        </div>
    </div>
  )
}

export default Navbar