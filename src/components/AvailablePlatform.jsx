import React from 'react'
import website from '../assets/illustration/browser.png'
import app from '../assets/illustration/app.png'
const AvailablePlatform = () => {
   return (
      <div className='w-full mt-10 flex flex-col items-center mb-10'>
         <h1 className='text-[2rem] font-primary mb-4'>Our Services</h1>
         <div className='w-full h-full grid grid-cols-2  gap-2 justify-center items-center'>
            <div className='h-full  flex flex-col  bg-amber-300 p-2 border-l-4 border-amber-500'>
               <h3 className='text-[1.5rem] font-light border-l-2 border-amber-500 pl-2'>Seamless Web</h3>
               <div>
                  <h4 className='font-light opacity-80 my-2'>Elevate Your Business with a Seamless, User-Friendly Website</h4>
                  <p className='font-thin opacity-80'>
                     In today’s digital world, your website is more than just an online presence—it’s your brand’s first impression. We specialize in crafting high-performance, user-friendly websites that not only look stunning but also drive results. Whether you need a sleek business website, a powerful e-commerce platform, or a custom web solution, we ensure seamless navigation, fast loading speeds, and mobile responsiveness. Our expert team combines cutting-edge technology with intuitive design to create a website that engages visitors and converts them into loyal customers. Elevate your online presence today—let’s build something amazing together! 🚀
                  </p>
               </div>

               <button className=' text-right p-1 font-light flex items-center justify-between mt-2 cursor-pointer opacity-60 hover:opacity-100 active:opacity-60' style={{
                  backgroundColor: 'rgba(255,255,255,0.4)',

               }}>
                  <div>
                     Pricing & Plans
                  </div>
                  <div>
                     {">>>"}
                  </div>
               </button>
            </div>

            <div className='h-full  flex flex-col  bg-bat-blood p-2 border-l-4 border-bat-blood1 text-white'>
               <h3 className='text-[1.5rem] font-light border-l-2 border-bat-blood1 pl-2 '>Seamless Mobile</h3>
               <div>
                  <h4 className='font-light opacity-80 my-2'>Your Business, Always at Your Customers' Fingertips</h4>
                  <p className='font-thin opacity-80'>
                     In a mobile-first world, having a high-performing app is the key to success. We design and develop intuitive, fast, and feature-rich mobile applications that keep your customers engaged anytime, anywhere. Whether you need an iOS, Android, or cross-platform app, our expert team ensures smooth navigation, stunning design, and seamless performance. With cutting-edge technology and user-centric design, we create apps that not only look great but also deliver real results. Elevate your business with a mobile experience that drives growth and customer loyalty. Let’s build something extraordinary—start your mobile journey today! 🚀
                  </p>
               </div>

               <button className=' text-right p-1 font-light flex items-center justify-between mt-2 cursor-pointer opacity-60 hover:opacity-100 active:opacity-60' style={{
                  backgroundColor: 'rgba(255,255,255,0.4)',

               }}>
                  <div>
                     Pricing & Plans
                  </div>
                  <div>
                     {">>>"}
                  </div>
               </button>
            </div>

         </div>
      </div>
   )
}

export default AvailablePlatform
