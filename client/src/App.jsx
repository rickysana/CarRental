import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import Home from './pages/Home'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import Login from './components/login'

const App = () => {

  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  
  return (
    <>
      {!isOwnerPath &&  <Navbar />} 
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cars' element={<Cars/>} />
        <Route path='/car/:id' element={<CarDetails/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {!isOwnerPath && <Footer />}
    </>
  )
}

export default App