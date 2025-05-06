import React, { useState, useEffect } from 'react'
import nexa from '../assets/Logo/nexa.png'
import { navigationItem } from '../constants/navigationItem'
import { FaPhone } from "react-icons/fa";
const Header = () => {
   const [isContactOpen, setIsContactOpen] = useState(false);
   return (
      <nav className={` w-full  h-[70px] border-b-[1px] fixed top-0 right-0 z-50 bg-white text-black flex items-center border-slate-300 justify-between px-[20px]
     `}>
         <img src={nexa} alt="" className='w-[30px] h-[30px] ' />
         <div className='flex gap-8 font-primary'>
            {
               navigationItem.map((item) => (
                  <div key={item} className='cursor-pointer'>
                     {item}
                  </div>
               ))
            }
         </div>
         <div>
            <button className='border-2 cursor-pointer border-slate-300 active:bg-slate-300 font-primary text-slate-600 py-1  px-2 rounded-full flex items-center gap-2' onClick={() => setIsContactOpen(!isContactOpen)}>
               Contact Us
               <FaPhone />
            </button>
         </div>


         <div className='absolute w-[300px] right-[5px] top-[80px] border-2 border-slate-300 p-2  bg-white rounded-lg'>
            <h1 className='border-l-4 border-black pl-2'>Contact Information</h1>
         </div>
      </nav>
   )
}

export default Header
