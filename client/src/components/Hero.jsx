import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>

        <h1 className='text-4xl md:text-5xl font-semibold'> Cars on Rent</h1>

        <form className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgbs(0,0,0,0.1)]'>

          <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>

          </div>

        </form>

        <img src={assets.main_car} alt="car" className='max-h-80'/>

    </div>
  )
}

export default Hero