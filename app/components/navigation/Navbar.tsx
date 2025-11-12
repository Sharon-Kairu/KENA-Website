'use client'
import React from 'react'
import { links } from "../../constants/Constants"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu } from 'react-icons/fi'


type Props = {
  openNav: () => void
}
const Navbar = ({ openNav }: Props) => {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white flex items-center justify-between md:gap-20 px-6 md:px-10 py-4 shadow-lg z-50">
      {/* Logo & Title */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="object-contain brightness-110 contrast-125 sm:w-[60px] sm:h-[60px] xs:w-[60px] xs:h-[60px]"
        />
        <h1 className="md:text-2xl font-bold leading-tight">
          KENA DRIVING SCHOOL AND <br/>
          COMPUTER COLLEGE
        </h1>
      </div>

      {/* Links - hidden on mobile */}
      <div className="hidden md:flex gap-6 lg:mr-20">
        {links.map((link) => {
          const isActive = pathname === `/${link.url}`
          return (
            <Link 
              key={link.id}
              href={`/${link.url}`}
              className={`transition-colors duration-200 ${
                isActive 
                  ? "text-orange-400 font-semibold border-b-2 border-orange-400 pb-1"
                  : "hover:text-orange-400"
              }`}
            >
              {link.title}
            </Link>
          )
        })}
      </div>

      {/* Hamburger Menu (mobile only) */}
      <FiMenu 
        onClick={openNav}
        className="md:hidden text-3xl cursor-pointer" />
    </nav>
  )
}

export default Navbar
