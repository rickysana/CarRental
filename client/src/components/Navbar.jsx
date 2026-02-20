import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate} from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

const location = useLocation()
const [open, setOpen] = useState(false)
const navigate = useNavigate()
  return (
    <div style={{background: 'linear-gradient(90deg, #F8FAFB 0%, #F6F7F3 35%, #F5F0E0 70%, #F0E8D0 100%)'}} className='flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-[#1F2937] relative transition-all'>
        <Link to="/">
        <img src={assets.logo} alt="logo" className="h-15 "/>
        </Link>
        
        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-8'>
            {menuLinks.map((link , index)=> ( 
                <Link key={index} to={link.path}> 
                {link.name}
                </Link>
            ))}
            <div className='hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56'>
              <input type="text" className="py-1.5 w-full bg-transparent outline-none placeholder-[#1F2937] placeholder:text-sm" placeholder="Search Cars" />
              <img src={assets.search_icon} alt="search " />
            </div>

            <div className="flex items-center gap-6 ">
              <button onClick={() => navigate('/owner')} className="cursor-pointer text-[#1F2937] hover:text-[#B8860B] font-medium transition-all">Dashboard</button>
              <button onClick={() => setShowLogin(true)} className="cursor-pointer px-8 py-2 bg-[#F3F0E6] hover:bg-[#E7E1CF] transition-all text-[#1F2937] rounded-full font-medium border border-[#E7E1CF]">Login</button>
            </div>
        </div>

        {/* Medium Screen Menu */}
        <div className='hidden md:flex lg:hidden items-center gap-4'>
            {menuLinks.map((link , index)=> ( 
                <Link key={index} to={link.path} className='text-sm'> 
                {link.name}
                </Link>
            ))}
            <div className="flex items-center gap-3">
              <button onClick={() => navigate('/owner')} className="cursor-pointer text-sm text-[#1F2937] hover:text-[#B8860B] font-medium transition-all">Dashboard</button>
              <button onClick={() => setShowLogin(true)} className="cursor-pointer px-4 py-1 text-sm bg-[#F3F0E6] hover:bg-[#E7E1CF] transition-all text-[#1F2937] rounded-full font-medium border border-[#E7E1CF]">Login</button>
            </div>
        </div>

        {/* Mobile Menu & Search */}
        <div className='md:hidden flex items-center gap-3'>
            {/* Mobile Search Bar */}
            <div className='flex items-center text-xs gap-1 border border-borderColor px-2 rounded-full'>
              <input type="text" className="py-1.5 w-24 bg-transparent outline-none placeholder-[#1F2937] placeholder:text-xs" placeholder="Search" />
              <img src={assets.search_icon} alt="search" className='h-3.5' />
            </div>

            {/* Hamburger Menu Button */}
            <button className='cursor-pointer' aria-label="Menu" onClick={() => setOpen(!open)}>
              <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" className='h-6' />
            </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 right-0 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 max-sm:p-4 transition-all duration-300 z-50 max-sm:bg-white ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"} md:hidden`}>
            {menuLinks.map((link , index)=> ( 
                <Link key={index} to={link.path}> 
                {link.name}
                </Link>
            ))}

            <div className="flex max-sm:flex-col items-start sm:items-center gap-6 ">
              <button onClick={() => navigate('/owner')} className="cursor-pointer text-[#1F2937] hover:text-[#B8860B] font-medium transition-all">Dashboard</button>
              <button onClick={() => setShowLogin(true)} className="cursor-pointer px-8 py-2 bg-[#F3F0E6] hover:bg-[#E7E1CF] transition-all text-[#1F2937] rounded-full font-medium border border-[#E7E1CF]">Login</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar