import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/254713449911"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex justify-center items-center shadow-lg z-50 transition-all"
    >
      <FaWhatsapp size={32}/>
    </a>
  )
}

export default WhatsappButton
