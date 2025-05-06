import React, { useEffect, useState } from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
import { SiSparkpost } from "react-icons/si";
import creative from '../assets/icon/creative.png'
import effective from '../assets/icon/effective.png'
import ux from '../assets/icon/ux.png'
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDown } from "react-icons/io5";
const HeroSection = ({ isBooking, setIsBooking }) => {
   const iconArray = [creative, effective, ux]
   const textArray = ["Creative", "Effective", "User Friendly"]
   const colorArray = ['bg-bat-blood', 'bg-hadfield-blue', 'bg-amber-300']
   const shadowArray = ['shadow-bat-blood', 'shadow-hadfield-blue', 'shadow-amber-500']
   const [currentIndex, setCurrentIndex] = useState(0);
   // const text = [
   //    { letter: "N", color: "text-black" },
   //    { letter: "e", color: "text-black" },
   //    { letter: "x", color: "text-hadfield-blue" },
   //    { letter: "a", color: "text-bat-blood" },
   //    { letter: " ", color: "text-black" },
   //    { letter: "C", color: "text-black" },
   //    { letter: "o", color: "text-black" },
   //    { letter: "r", color: "text-black" },
   //    { letter: "e", color: "text-black" },
   // ];
   const text = "Nexa Core";

   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % iconArray.length);
      }, 3000);

      return () => clearInterval(timer); // Cleanup on unmount
   }, [iconArray, textArray]);
   return (
      <div className='mt-[70px]'>
         <div className=' w-full  flex flex-col items-center justify-center'>
            <h1 className='text-[2rem] font-primary mt-10 mb-4'>
               <AnimatePresence>
                  {text.split("").map((char, index) => (
                     <motion.span
                        key={index}
                        initial={{ textShadow: "0px 0px 0px rgba(255, 255, 255, 0)" }}
                        animate={!isBooking ? {
                           textShadow: [
                              "0px 0px 5px rgba(25, 255, 255, 1)",
                              "0px 0px 10px rgba(255, 25, 255, 1)",
                              "0px 0px 5px rgba(255, 255, 25, 1)"
                           ]
                        } : { textShadow: "0px 0px 0px rgba(255, 255, 255, 0)" }}
                        transition={{ duration: 1.5, delay: index * 0.1, repeat: Infinity, repeatType: "reverse" }}
                        className={char === 'x' ? "text-blue-500" : char === 'a' ? "text-red-500" : "text-black"}
                     >
                        {char}
                     </motion.span>
                  ))}</AnimatePresence>
            </h1>
            <div className='flex gap-2 mt-2 items-center rounded-full p-2  shadow-lg  border-l-4'
               style={{
                  borderLeft: '4px solid rgba(0,0,0,0.4)'
               }}>
               <SiSparkpost className='text-[1rem] text-bat-blood' />
               <div className='text-[0.9rem]'>100% Trusted Company</div>
            </div>
            <div className='mt-4 text-[4rem] font-primary  mb-10 '>
               <div className='flex gap-4 justify-center'>
                  Transforming
                  <div className='text-[3rem] '>
                     <BsPatchCheckFill className='text-right text-hadfield-blue' />
                     Ideas
                  </div>
               </div>
               <div className='w-full flex justify-center'>
                  <span className='text-bat-blood'>i</span>
                  <span className='text-amber-300'>n</span>
                  to <span className='bg-amber-300 mx-4 p-2 text-[3rem] rounded-3xl shadow-xl shadow-amber-500 rotate-[-10deg]'>
                     Digital
                  </span> Excellence
               </div>
            </div>
         </div>
         <div className={`transition-all duration-500 top-[300px] right-[50px] flex flex-col items-center `}>
            <AnimatePresence mode="wait">
               <motion.div
                  key={currentIndex}
                  className={`text-[1.2rem] font-primary mb-4 p-2 rounded-xl text-white ${colorArray[currentIndex]} shadow-lg ${shadowArray[currentIndex]}`}
                  initial={!isBooking ? { opacity: 0, x: -100, scale: 0.8 } : { opacity: 0, x: 0, scale: 1 }}
                  animate={!isBooking ? { opacity: 1, x: 0, scale: 1 } : { opacity: 1, x: 0, scale: 1 }}
                  exit={!isBooking ? { opacity: 0, x: 100, scale: 0.8 } : { opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: !isBooking ? 0.5 : 0 }}
               >
                  {textArray[currentIndex]}
               </motion.div>
            </AnimatePresence>

            <div className=' '>
               <div className={`absolute ${shadowArray[currentIndex]} w-[80px] h-[80px] ${!isBooking ? 'rotatedBorder' : ''}  rounded-full flex justify-center items-center shadow-lg `} >
               </div>
               <motion.img
                  key={currentIndex} // Key change triggers animation
                  src={iconArray[currentIndex]}
                  alt=""
                  className={`w-[70px] h-[70px] ml-[5px] mt-[5px] `}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={!isBooking ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                  exit={!isBooking ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                  transition={!isBooking ? { duration: 0.5 } : { duration: 0 }}
               />
            </div>
         </div>
         <div className=' justify-center mt-10 font-primary flex items-center gap-4 cursor-pointer'>
            Scroll Down
            <div className={`w-[40px] h-[40px] bg-amber-500 flex justify-center items-center text-white rounded-full shadow-lg border-b-4 border-b-amber-600 shadow-black`}>
               <IoChevronDown className='text-[2rem]' />
            </div>
         </div>
      </div>

   )
}

export default HeroSection
