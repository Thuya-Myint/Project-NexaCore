import React from 'react';
import nexaTextAround from '../assets/Logo/nexaText.png';
import { div } from 'framer-motion/client';

const Services = ({ isBooking, setIsBooking }) => {

   return (
      <div className={`mt-10 w-full p-10 rounded-2x  flex items-center justify-between bg-black rounded-2xl `}>
         <div className=' flex flex-col items-center gap-10'>
            <img src={nexaTextAround} alt="" className='w-[150px] h-[150xp]' />
            <button className='cursor-pointer text-[0.9rem] bg-amber-300 text-black p-2 mt-4 rounded-lg '>Have a project idea!</button>
         </div>
         <div className='text-[1.4rem]  h-full w-[80%] text-white text-justify font-thin flex flex-col gap-10 justify-between '>
            <p>
               Turn your vision into reality with our expert IT solutions. Whether you're starting from scratch or refining an existing concept, our team is ready to bring your ideas to life. We specialize in cutting-edge technologies, custom software development, and seamless integrations to help you achieve your business goals. Let’s collaborate to build innovative, scalable, and future-proof solutions. Get in touch today and take the first step toward making your project a success!
            </p>
            <button className='opacity-70 hover:opacity-100 text-[1rem] text-right underline underline-offset-4 cursor-pointer'
               onClick={() => setIsBooking(!isBooking)}
            >
               Get a {'free consultation >>'}
            </button>
         </div>
      </div>
   );
};

export default Services;
