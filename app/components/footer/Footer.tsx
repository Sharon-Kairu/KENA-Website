import React from 'react'
import Image from 'next/image'
import { FiMail, FiPhone, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-6 p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Logo */}
        <div className="flex flex-col items-center justify-center">
          <Image 
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="mb-3"
          />
          <h1 className="text-white text-center text-lg md:text-xl font-bold">
            KENA DRIVING SCHOOL<br/>AND <br/> COMPUTER COLLEGE
          </h1>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center text-white gap-3">
          <h2 className="font-semibold text-lg text-orange-500">Contact Us</h2>

          <div className="flex items-center gap-2">
            <FiMail size={18} />
            <span className="text-sm md:text-base">kenadrivingschool13@gmail.com</span>
          </div>

          <a 
            href="https://wa.me/254713449911" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-600 transition"
          >
            <FiPhone size={18} />
            <span className="text-sm md:text-base">+254 713 449 911</span>
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center text-white gap-3 ">
          <h2 className="font-semibold text-lg text-orange-500">Follow Us</h2>

          <a 
            href="https://www.instagram.com/kena_dsthika/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-500 transition"
          >
            <FiInstagram size={18} />
            <span className="text-sm md:text-base">@kenadrivingschool</span>
          </a>

          <a
            href="https://www.facebook.com/KenaDsThika/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <FiFacebook size={18} />
            <span className="text-sm md:text-base">kenadrivingschool</span>
          </a>
          
          <a
            href="https://x.com/kena_dsThika"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <FiTwitter size={18} />
            <span className="text-sm md:text-base">kenadrivingschool</span>
          </a>

          <a
            href="https://www.tiktok.com/@kenadrivingschool?_t=ZM-90x7wgKr0JQ&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-500 transition-colors"
          >
            <FaTiktok size={18} />
            <span className="text-sm md:text-base">@kenadrivingschool</span>
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center font-bold text-gray-400 text-xs md:text-sm mt-8 border-t border-gray-700 pt-3">
        © {new Date().getFullYear()} KENA DRIVING SCHOOL. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
