"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

// Sample client data - replace with your actual clients
const clients = [
  {
    name: "Gloria",
    logo: "/gloria.png?height=80&width=180",
    grayscale: true,
    link: "https://www.gloria.com.pe",
  },
  {
    name: "Gloria 1",
    logo: "/gloria.png?height=80&width=180",
    grayscale: true, 
    link: "https://www.gloria.com.pe",
  },
  {
    name: "Global Industries",
    logo: "/gloria.png?height=80&width=180",
    grayscale: true, 
    link: "https://www.gloria.com.pe",
  },
  {
    name: "Danper",
    logo: "/gloria.png?height=80&width=180",
    grayscale: true, 
    link: "https://www.gloria.com.pe",
  },
  {
    name: "Summit Group",
    logo: "/gloria.png?height=80&width=180",
    grayscale: true, 
    link: "https://www.gloria.com.pe",
  },
  {
    name: "Horizon Enterprises",
    logo: "/gloria.png?height=80&width=180",
    grayscale: true, 
    link: "https://www.gloria.com.pe",
  },
  {
    name: "Prime Solutions",
    logo: "/gloria.png?height=80&width=180",
    grayscale: true, 
    link: "https://www.gloria.com.pe",
  },
  {
    name: "Elite Partners",
    logo: "/gloria.png?height=80&width=180",
    grayscale: true, 
    link: "https://www.gloria.com.pe",
  },
]

const clients2 = [
  {
    name: "Danper",
    logo: "/danper.svg?height=80&width=180",
    grayscale: true,
    link: "https://danper.com",
  },
  {
    name: "Danper 1",
    logo: "/danper.svg?height=80&width=180",
    grayscale: true,
    link: "https://danper.com",
  },
  {
    name: "Danper 2",
    logo: "/danper.svg?height=80&width=180",
    grayscale: true,
    link: "https://danper.com",
  },
  {
    name: "Danper 3",
    logo: "/danper.svg?height=80&width=180",
    grayscale: true, 
    link: "https://danper.com",
  },
  {
    name: "Danper 4",
    logo: "/danper.svg?height=80&width=180",
    grayscale: true,
    link: "https://danper.com",
  },
  {
    name: "Danper 5",
    logo: "/danper.svg?height=80&width=180",
    grayscale: true,
    link: "https://danper.com",
  },
  {
    name: "Danper 6",
    logo: "/danper.svg?height=80&width=180",
    grayscale: true,
    link: "https://danper.com",
  },
  {
    name: "Danper 7",
    logo: "/danper.svg?height=80&width=180",
    grayscale: true,
    link: "https://danper.com",
  },
]

export default function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const duplicateClients = [...clients, ...clients2]

  // Automatic scrolling effect
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let startTime: number | null = null
    const speed = 0.5 // pixels per millisecond

    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      // const elapsed = timestamp - startTime

      if (scrollContainer) {
        scrollContainer.scrollLeft += speed

        // Reset scroll position when we've scrolled through half the items
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
          startTime = timestamp
        }
      }

      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="w-full py-20 bg-gray-50 mt-20" id="clients">
      {/* Section Header - Centered with container */}
      <div className="text-center mb-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4"> Con la confianza de los lideres de la Industria</h2>
        <div className="w-24 h-1 bg-black mx-auto"></div>
        <p className="mt-6 text-lg text-gray-600">
            Estamos orgullosos de trabajar con las mas respectadas empresas de distintas industrias.
        </p>
      </div>

      {/* Full-width Logos Section */}
      <div className="relative overflow-hidden w-full">
        {/* Gradient Overlay - Left */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gray-50 to-transparent"></div>

        {/* Scrolling Container - Full Width */}
        <div ref={scrollRef} className="flex overflow-x-hidden py-12" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="flex space-x-16 animate-scroll">
            {duplicateClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-24 w-56 bg-white rounded-lg shadow-sm px-6 transition-transform hover:scale-105"
              >
                <a href={client.link} target={"_blank"}>
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={180}
                    height={80}
                    className={`object-contain max-h-14 ${client.grayscale ? "grayscale hover:grayscale-0 transition-all duration-300" : ""}`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlay - Right */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gray-50 to-transparent"></div>
      </div>

      {/* Second Row of Logos - Scrolling in Opposite Direction */}
      <div className="relative overflow-hidden w-full mt-8">
        {/* Gradient Overlay - Left */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gray-50 to-transparent"></div>

        {/* Scrolling Container - Full Width */}
        <div className="flex overflow-x-hidden py-12">
          <div className="flex space-x-16 animate-scroll-reverse">
            {duplicateClients.reverse().map((client, index) => (
              <div
                key={`${client.name}-reverse-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-24 w-56 bg-white rounded-lg shadow-sm px-6 transition-transform hover:scale-105"
              >
                <a href={client.link} target={"_blank"}>
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={180}
                    height={80}
                    className={`object-contain max-h-14 ${client.grayscale ? "grayscale hover:grayscale-0 transition-all duration-300" : ""}`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlay - Right */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gray-50 to-transparent"></div>
      </div>

      {/* Static Grid for Smaller Screens */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto md:hidden">
        {clients.slice(0, 8).map((client, index) => (
          <div key={index} className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm px-4">
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={`${client.name} logo`}
              width={120}
              height={60}
              className={`object-contain max-h-10 ${client.grayscale ? "grayscale hover:grayscale-0 transition-all duration-300" : ""}`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}



