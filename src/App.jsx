import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import Home from './pages/Home'
import MyBookings from './pages/MyBookings'
import Login from "./components/temp"


const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      {/* ✅ LOGIN MODAL */}
      {showLogin && <Login setShowLogin={setShowLogin} />}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/car-details/:id' element={<CarDetails/>} />
        <Route path='/car' element={<Cars/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
      </Routes>
    </>
  )
}

export default App