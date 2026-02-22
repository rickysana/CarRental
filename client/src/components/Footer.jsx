import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-12 bg-beige mt-16'>

            <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="Logo" className='h-8 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        Rentora is a trusted vehicle rental platform connecting riders with reliable cars and bikes. We make travel easy, affordable, and convenient for everyone.
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#"> <img src={assets.facebook_logo} className='w-5 h-5' alt="Facebook" /></a>
                        <a href="#"> <img src={assets.instagram_logo} className='w-5 h-5' alt="Instagram" /></a>
                        <a href="#"> <img src={assets.gmail_logo} className='w-5 h-5' alt="Twitter" /></a>
                        
                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 '>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Cars</a></li>
                        <li><a href="#">List Your Car</a></li>
                        <li><a href="#">About Rentora</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Support</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 '>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cancellation Policy</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 '>
                        <li>📍Moirangkhom, Sougaijam Leikai</li> 
                        <li><a href="tel:+911234567898" className="hover:underline">☎️+91 1234567898</a></li>
                        <li><a href="mailto:support@rentora.com" className="hover:underline">
                        📧support@rentora.com </a></li>
                    </ul>
                </div>

        
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Rentora. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li>|</li>
                    <li><a href="#">Terms</a></li>
                    <li>|</li>
                    <li><a href="https://www.google.com/maps/place/Kangpokpi,+Manipur+795129/@25.1516367,93.9475164,15z/data=!3m1!4b1!4m15!1m8!3m7!1s0x3749265bf16390db:0x8cc1691ae0a829af!2sManipur!3b1!8m2!3d24.6637173!4d93.9062688!16zL20vMDI2bXg0!3m5!1s0x3748c6bd18e84845:0x44d39824085dc2bf!8m2!3d25.1519197!4d93.969963!16s%2Fm%2F05p098z?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D">Sitemap</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer