'use client'
import React, { useEffect, useRef } from 'react'
import { links } from '../../constants/Constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CgClose } from "react-icons/cg"

type Props = {
  showNav: boolean
  closeNav: () => void
}

const Mobilenav = ({ showNav, closeNav }: Props) => {
  const pathname = usePathname()
  const navOpen = showNav ? "translate-x-0" : "translate-x-full"
  const prevPathRef = useRef<string | null>(null)

  useEffect(() => {
    if (prevPathRef.current !== null && prevPathRef.current !== pathname) {
      if (showNav) closeNav()
    }
    prevPathRef.current = pathname
  }, [pathname, showNav, closeNav])

  return (
    <div>
      {/* Overlay */}
      {showNav && (
        <div
          onClick={closeNav}
          className="fixed inset-0 bg-black bg-opacity-70 z-[10040]"
        />
      )}

      {/* Mobile nav panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-gray-900 text-white z-[10050] transform ${navOpen} transition-transform duration-500 shadow-2xl`}
      >
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer hover:text-gray-200 transition"
        />

        {/* Nav Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-semibold tracking-wide">
          {links.map((link) => {
  // Map 'home' url to '/' for active check and href
  const href = link.url === 'home' ? '/' : `/${link.url}`;
  const isActive = pathname === href;

  return (
    <Link 
      key={link.id}
      href={href}
      className={`transition-colors duration-200 ${
        isActive 
          ? "text-orange-400 font-semibold border-b-2 border-orange-400 pb-1"
          : "hover:text-orange-400"
      }`}
    >
      {link.title}
    </Link>
  );
})}

        </div>
      </div>
    </div>
  )
}

export default Mobilenav
