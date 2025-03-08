"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, User, ChevronDown } from "lucide-react"

const menuItems = [
  { name: "¿Quiénes Somos?", href: "/" },
  // Services is handled separately
  { name: "Tienda Virtual", href: "/store" },
  { name: "Contacto", href: "/#contact" },
]

// Services submenu items
const serviceItems = [
  { name: "Agro", href: "/services/cleaning" },
  { name: "Lacteos", href: "/services/maintenance" },
  { name: "Food & Drink", href: "/services/consulting" },
  { name: "Carnicos", href: "/services/training" },
  { name: "Avicola", href: "/services/custom" },
  { name: "Horeca", href: "/services/consulting" },
]

const adviceItems = [
    { name: "Planes", href: "/services/cleaning" },
    { name: "Validaciones", href: "/services/maintenance" },
    { name: "Charlas", href: "/services/consulting" },
  ]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileAdvicesOpen, setIsMobileAdvicesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              {/* Replace with your actual logo */}
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center mr-2">
                <span className="text-gray-600 font-bold">L</span>
              </div>
              <span className="primary-text-color font-light text-xl">Logo</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {/* First menu item */}
              <Link href="/" className="text-tertiary-color hover:text-gray-800 px-2 py-1 text-md font-bold transition-colors">
                ¿Quiénes Somos?
              </Link>

              <div className="relative group">
                <button className="flex items-center text-tertiary-color hover:text-gray-800 px-2 py-1 text-md font-bold transition-colors">
                  Sectores
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {/* Dropdown menu with improved hover area */}
                <div className="absolute left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="rounded-md shadow-lg tertiary-color ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="py-1">
                      {serviceItems.map((service, index) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-md bg-gray-200 hover:bg-greenNew hover:text-white transition-colors"
                          style={{
                            animationDelay: `${index * 50}ms`,
                            animation: "fadeInDown 0.3s ease forwards",
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>


              <div className="relative group">
                <button className="flex items-center text-tertiary-color hover:text-gray-800 px-2 py-1 text-md font-bold transition-colors">
                  Asesoría Experta
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {/* Dropdown menu with improved hover area */}
                <div className="absolute left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="rounded-md shadow-lg tertiary-color ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="py-1">
                      {adviceItems.map((advice, index) => (
                        <Link
                          key={advice.name}
                          href={advice.href}
                          className="block px-4 py-2 text-md bg-gray-200 hover:bg-greenNew hover:text-white transition-colors"
                          style={{
                            animationDelay: `${index * 50}ms`,
                            animation: "fadeInDown 0.3s ease forwards",
                          }}
                        >
                          {advice.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>



              {/* Remaining menu items */}
              {menuItems.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-tertiary-color hover:text-gray-800 px-2 py-1 text-md font-bold transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button className="flex items-center hover:text-white bg-color-yellow hover:bg-gray-800 px-4 py-2 rounded-md text-md font-bold transition-colors">
              <User className="h-4 w-4 mr-2" />
              Iniciar sesión
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-tertiary-color hover:text-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700">
          {/* Home link */}
          <Link
            href="/"
            className="text-white hover:bg-gray-600 block px-3 py-2 rounded-md text-base font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Services dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full text-white hover:bg-gray-600 px-3 py-2 rounded-md text-base font-bold"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              <span>Servicios</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${isMobileServicesOpen ? "transform rotate-180" : ""}`}
              />
            </button>

            {/* Mobile Services submenu */}
            <div
              className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${
                isMobileServicesOpen ? "max-h-80" : "max-h-0"
              }`}
            >
              {serviceItems.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-white hover:bg-gray-600 block px-3 py-2 rounded-md text-base font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>


          <div>
            <button
              className="flex items-center justify-between w-full text-white hover:bg-gray-600 px-3 py-2 rounded-md text-base font-bold"
              onClick={() => setIsMobileAdvicesOpen(!isMobileAdvicesOpen)}
            >
              <span>Asesoría Experta</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${isMobileAdvicesOpen ? "transform rotate-180" : ""}`}
              />
            </button>

            {/* Mobile Services submenu */}
            <div
              className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${
                isMobileAdvicesOpen ? "max-h-80" : "max-h-0"
              }`}
            >
              {adviceItems.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-white hover:bg-gray-600 block px-3 py-2 rounded-md text-base font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining menu items */}
          {menuItems.slice(1).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:bg-gray-600 block px-3 py-2 rounded-md text-base font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <button className="flex items-center w-full text-white hover:bg-gray-600 px-3 py-2 rounded-md text-base font-medium mt-4">
            <User className="h-5 w-5 mr-2" />
            Iniciar sesión
          </button>
        </div>
      </div>
    </nav>
  )
}

