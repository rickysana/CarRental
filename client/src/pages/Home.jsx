import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div style={{background: 'linear-gradient(90deg, #F8FAFB 0%, #F6F7F3 35%, #F5F0E0 70%, #F0E8D0 100%)'}}>
      <Hero />
      <FeaturedSection />
      <Banner/>
    </div>
  )
}

export default Home