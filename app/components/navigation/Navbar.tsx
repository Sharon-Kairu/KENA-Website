'use client'

import React, { useEffect, useState } from 'react'
import { links } from "../../constants/Constants"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu } from 'react-icons/fi'

type Props = { openNav: () => void }

const Navbar = ({ openNav }: Props) => {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white flex items-center justify-between md:gap-20 px-6 md:px-10 py-4 shadow-lg z-50">
      
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          width={80}
          height={80}
          alt="Logo"
          className="object-contain brightness-110 contrast-125 sm:w-[60px] sm:h-[60px]"
        />
        <h1 className="md:text-2xl font-bold leading-tight">
          KENA DRIVING SCHOOL AND <br/> COMPUTER COLLEGE
        </h1>
      </div>

      <div className="hidden md:flex gap-6 lg:mr-20">
        {links.map(link => {
          const href = link.url === 'home' ? '/' : `/${link.url}`

          // Only calculate active link on the client
          const isActive = mounted
            ? (href === '/' && (pathname === '/' || pathname === '/home')) || pathname === href
            : false

          return (
            <Link
              key={link.id}
              href={href}
              className={`transition-colors duration-200 ${
                isActive
                  ? 'text-orange-400 font-semibold border-b-2 border-orange-400 pb-1'
                  : 'hover:text-orange-400'
              }`}
            >
              {link.title}
            </Link>
          )
        })}
      </div>

      <FiMenu onClick={openNav} className="md:hidden text-3xl cursor-pointer" />
    </nav>
  )
}

export default Navbar
