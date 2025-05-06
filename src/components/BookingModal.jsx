import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
const BookingModal = ({ isBooking, setIsBooking }) => {
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [activeFormItem, setActiveFormItem] = useState(null);
   const options = [
      { value: "WEB", label: "💻 Website" },
      { value: "Mobile", label: "📱 Mobile" },
      { value: "IOT", label: "🛜 IOT" },
      { value: "Android", label: "🤖 Android" },
      { value: "IOS", label: "🍎 IOS" },
   ];

   const [selected, setSelected] = useState(null);
   return (
      <div className='fixed inset-0 w-screen h-screen z-50 flex justify-center items-center' style={{
         backgroundColor: 'rgba(0,0,0,0.5)'
      }}
         onClick={() => setIsBooking(false)}
      >
         <div className='bg-white w-[50%] rounded-2xl' onClick={(e) => e.stopPropagation()}>
            <div className='w-full text-center font-primary bg-amber-300 text-black text-[1.2rem] rounded-t-xl p-2'>
               Need Help? Book a Tech Hero to the Rescue!
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='flex flex-col  gap-4 p-6 font-primary'>
               <input type="text" placeholder='Email' className='p-2 border-[1px] border-white-smoke rounded-md outline-0'
                  onClick={() => setActiveFormItem('email')}
               />
               <div className='flex gap-4'>
                  <input type="text" placeholder='Name' className='w-1/3 p-2 border-[1px] border-white-smoke rounded-md outline-0'
                     onClick={() => setActiveFormItem('name')}
                  />
                  <div className='w-1/3 flex gap-4 rounded-xl justify-center items-center'
                  >
                     {/* Service
                     <RxCaretDown className='text-[2rem]' /> */}
                     <Select
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        placeholder="Select a Service.."
                        className='w-full rounded-'
                     />
                  </div>
                  <button className='w-1/3 cursor-pointer ' >
                     <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                        className={`w-full  p-2 border-[1px] border-white-smoke rounded-md outline-0 cursor-pointer
                        `}
                     // onClickOutside={() => setOpen(false)}
                     />
                  </button>
               </div>
               <button type='submit' className='transition-all duration-150 bg-bat-blood text-white p-2 rounded-full cursor-pointer opacity-80 hover:opacity-100 active:opacity-60'>Book Now!</button>
            </form>
         </div >
      </div >
   )
}

export default BookingModal
