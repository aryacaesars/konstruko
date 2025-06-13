"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import navData from "@/data/navbar-data.json"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-full w-[95%] max-w-7xl ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent border border-white"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className={`text-2xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>
                {navData.logo.text}
                <span className="text-[#4a6fa5]">{navData.logo.highlight}</span>
              </span>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navData.navLinks.map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className={`${scrolled ? "text-gray-700" : "text-white"} hover:text-[#4a6fa5] font-medium transition-colors`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <button className={`${scrolled ? "text-gray-700" : "text-white"} hover:text-[#4a6fa5]`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
