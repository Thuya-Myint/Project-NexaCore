import React from 'react'
import Loading from '../assets/animation/cool.json'
import Lottie from 'lottie-react'
const FallBack = () => {
   return (
      <div className='w-screen h-screen flex flex-col justify-center items-center font-primary overflow-hidden'>

         <Lottie animationData={Loading} loop={true} style={{ width: 200, height: 200 }} />
         <p className='text-xl'> Loading... Like an intern on their first day.” 😅</p>


      </div>
   )
}

export default FallBack
