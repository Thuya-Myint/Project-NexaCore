import React from 'react'
import nexacore from '../assets/Logo/nexa.png'
const Logo = () => {
   return (
      <div className={`relative h-[120px] w-[120px]   flex items-center justify-center`} style={{
         // backgroundColor: 'rgba(0,0,0,0.3)'
      }}>
         <img src={nexacore} alt="" className='w-[90px] h-[90px] absolute z-50' />
         <div className=' w-[60px] h-[60px]  absolute rounded-full inner'
         >
         </div>
         <div className=' w-[80px] h-[80px] absolute rounded-full center'
         >
         </div>
         <div className=' w-[100px] h-[100px] absolute rounded-full outer'
         >
         </div>
         <div className=' w-[140px] h-[140px] absolute rounded-full rotateOuterMost'
         >
            <div className="absolute w-[20px] h-[20px] border-t-4 border-l-4 border-hadfield-blue top-0 left-0 rounded-tl-full">
            </div>
            <div className="absolute w-[20px] h-[20px] border-t-4 border-l-4 border-bat-blood top-0 right-0 rounded-tl-full
            rotate-90">
            </div>
            <div className="absolute w-[20px] h-[20px] border-t-4 border-l-4 border-blue-berry bottom-0 left-0 rounded-tl-full
            rotate-270">

            </div>
            <div className="absolute w-[20px] h-[20px] border-t-4 border-l-4 border-mysterious-blue bottom-0 right-0 rounded-tl-full
            rotate-180">

            </div>

         </div>
      </div >
   )
}

export default Logo
