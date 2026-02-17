import React, { useRef, useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {
  const carRef = useRef(null)
  const[pickupLocation, setPickupLocation] = useState('')

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
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>

        <h1 className='text-4xl md:text-5xl font-semibold'> Cars on Rent</h1>

        <form className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgbs(0,0,0,0.1)]'>

          <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>
              <div className='flex flex-col items-start gap-2'>
                <select required value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)}>
                <option value="">Pickup Location</option>
                {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
                </select>
                <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : 'Please select location'}</p>
              </div>
          </div>

        </form>

        <img
          ref={carRef}
          src={assets.main_car}
          alt="car"
          className='max-h-80 hero-car'
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        />

    </div>
  )
}

export default Hero