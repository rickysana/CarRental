import React, { useRef, useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {
  const carRef = useRef(null)
  const[pickupLocation, setPickupLocation] = useState('')
  const[pickupDate, setPickupDate] = useState('')
  const[dropDate, setDropDate] = useState('')
  

  const handleMove = (event) => {
    const node = carRef.current
    if (!node) return

    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2

    const rotateY = ((x - midX) / midX) * 10
    const rotateX = ((midY - y) / midY) * 8
    const lift = -10

    node.style.setProperty('--rx', `${rotateX}deg`)
    node.style.setProperty('--ry', `${rotateY}deg`)
    node.style.setProperty('--ty', `${lift}px`)
  }

  const handleLeave = () => {
    const node = carRef.current
    if (!node) return

    node.style.setProperty('--rx', '0deg')
    node.style.setProperty('--ry', '0deg')
    node.style.setProperty('--ty', '0px')
  }

  return (
    <div className='min-h-screen md:h-screen flex flex-col items-center justify-center gap-6 md:gap-14 text-center px-4 py-12 md:py-0'>

        <h1 className='text-2xl md:text-5xl font-semibold text-[#1F2937] mt-4 md:mt-0'> Find Your Perfect Ride </h1>

        <form className='flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-[#F3F0E6] shadow-[0px_8px_20px_rgba(0,0,0,0.1)] border border-[#E7E1CF]'>

          <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 min-md:ml-8 w-full md:w-auto'>
              <div className='flex flex-col items-start gap-2 w-full md:w-auto'>
                <select required value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)} className='bg-transparent text-[#1F2937] outline-none w-full md:w-auto text-sm md:text-base'>
                <option value="" className='text-[#1F2937]'>Pickup Location</option>
                {cityList.map((city)=> <option key={city} value={city} className='text-[#1F2937]'>{city}</option>)}
                </select>
                <p className='px-1 text-xs md:text-sm text-[#6B7280]'>{pickupLocation ? pickupLocation : 'Select location'}</p>
              </div>
              <div className='flex flex-col items-start gap-2 w-full md:w-auto'>
                <label htmlFor='pickup-date' className='text-[#1F2937] text-sm md:text-base'> Pickup Date</label>
                <input type='date' id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-xs md:text-sm text-[#1F2937] bg-transparent outline-none w-full md:w-auto' required/>
              </div>

              <div className='flex flex-col items-start gap-2 w-full md:w-auto'>
                <label htmlFor='return-date' className='text-[#1F2937] text-sm md:text-base'> Return Date</label>
                <input type='date' id="return-date" className='text-xs md:text-sm text-[#1F2937] bg-transparent outline-none w-full md:w-auto' required/>
              </div>

              </div>
              <button className='flex items-center justify-center gap-1 px-6 md:px-9 py-2 md:py-3 w-full md:w-auto md:mt-0 mt-4 bg-[#F3F0E6] hover:bg-[#E7E1CF] text-[#1F2937] rounded-full cursor-pointer font-medium text-sm md:text-base'>
                <img src={assets.search_icon} alt="Search" className='brightness-0 h-4 md:h-5'/>
                Search
              </button>
          

        </form>

        <img
          ref={carRef}
          src={assets.main_car}
          alt="car"
          className='max-h-40 md:max-h-90 hero-car'
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        />

    </div>
  )
}

export default Hero