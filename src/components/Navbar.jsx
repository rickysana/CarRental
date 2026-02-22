import { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {

  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-gradient-to-r from-[#F8FAFB] via-[#F6F7F3] to-[#F0E8D0] text-[#1F2937] relative'>

      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="logo" className="h-12" />
      </Link>

      {/* Desktop Menu */}
      <div className='hidden lg:flex items-center gap-8'>
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}

        {/* Search */}
        <div className='flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full max-w-56'>
          <input
            type="text"
            className="py-1.5 w-full bg-transparent outline-none placeholder:text-sm"
            placeholder="Search Cars"
          />
          <img src={assets.search_icon} alt="search" />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate('/owner')}
            className="cursor-pointer hover:text-[#B8860B] font-medium transition-all"
          >
            Dashboard
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="cursor-pointer px-6 py-2 bg-[#F3F0E6] hover:bg-[#E7E1CF] transition-all rounded-full font-medium border"
          >
            Login
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className='md:hidden flex items-center gap-3'>

        <button onClick={() => setOpen(!open)}>
          <img
            src={open ? assets.close_icon : assets.menu_icon}
            alt="menu"
            className='h-6'
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`fixed top-16 right-0 w-full h-screen bg-white flex flex-col gap-4 p-4 transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"}`}>

        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path} onClick={() => setOpen(false)}>
            {link.name}
          </Link>
        ))}

        <button onClick={() => navigate('/owner')}>
          Dashboard
        </button>

        <button onClick={() => setShowLogin(true)}>
          Login
        </button>
      </div>

    </div>
  )
}

export default Navbar