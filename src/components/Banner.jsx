import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='w-full pt-32 md:pt-40 pb-24 px-6 md:px-16 lg:px-24 xl:px-32'>
      <div style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 100%), #F6F2DE', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}} className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 max-w-6xl mx-auto rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.05)]'>

          
        <div className='text-[#1F2937]'>
            <h2 className='text-3xl font-medium'>Do you own a vehicle?</h2>
            <p className='mt-2'>Earn money by listing your car, bike, or scooter on Rentora.</p>
            <p className='max-w-130'>We handle bookings, verification, and secure payments so you can rent out your vehicle with ease.</p>

            <button className='px-6 py-2 bg-[#F3F0E6] hover:bg-[#E7E1CF] transition-all text-[#1F2937] rounded-full text-sm mt-4 cursor-pointer font-medium'>List your vehicle</button>
        </div>

        <img src={assets.banner_car_image} alt="car" className='max-h-45 mt-15'/>

      </div>
    </div>
  )
}

export default Banner