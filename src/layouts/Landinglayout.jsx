import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import BookingModal from '../components/BookingModal'
import AvailablePlatform from '../components/AvailablePlatform'

const Landinglayout = () => {
   const [isBooking, setIsBooking] = useState(false)
   // useEffect(() => {
   //    if (isBooking) {
   //       document.body.style.overflow = 'hidden'
   //    }
   //    else {
   //       document.body.style.overflow = 'auto'
   //    }
   // }, [isBooking])
   return (
      <div className='mx-2  '>
         <Header />
         <HeroSection isBooking={isBooking} setIsBooking={setIsBooking} />
         <Services isBooking={isBooking} setIsBooking={setIsBooking} />
         {
            isBooking &&
            <BookingModal isBooking={isBooking} setIsBooking={setIsBooking} />
         }
         <AvailablePlatform />
      </div>
   )
}

export default Landinglayout
