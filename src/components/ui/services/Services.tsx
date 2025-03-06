"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"

// Services data - replace with your actual services
const services = [
  {
    id: 1,
    title: "Agro",
    description:
      "Professional cleaning solutions for industrial facilities and manufacturing plants. Our specialized equipment and eco-friendly products ensure a safe and clean working environment.",
    image: "/ganaderia/ganaderia_0.jpg?height=600&width=800",
    features: [
      "Heavy-duty equipment cleaning",
      "Factory floor maintenance",
      "Industrial waste management",
      "24/7 emergency services",
      "Compliance with safety standards",
    ],
  },
  {
    id: 2,
    title: "Lacteos",
    description:
      "Comprehensive cleaning services for offices, retail spaces, and commercial buildings. We maintain the highest standards of cleanliness to create a professional environment for your business.",
    image: "/lacteos/lacteos_0.jpg?height=600&width=800",
    features: [
      "Daily office cleaning",
      "Floor and carpet care",
      "Window cleaning",
      "Restroom sanitation",
      "Green cleaning options",
    ],
  },
  {
    id: 3,
    title: "Food & Drink",
    description:
      "Custom cleaning solutions for unique environments and specific industry requirements. Our expert team develops tailored approaches for your specialized cleaning needs.",
    image: "/frutas/frutas_0.jpg?height=600&width=800",
    features: [
      "Clean room maintenance",
      "Healthcare facility cleaning",
      "Food processing area sanitation",
      "Laboratory cleaning",
      "Antistatic cleaning",
    ],
  },
  {
    id: 4,
    title: "Carnicos",
    description:
      "Preventive maintenance and regular upkeep services to ensure your facility remains in optimal condition. We help extend the life of your assets and prevent costly repairs.",
    image: "/ganaderia/ganaderia_3.jpg?height=600&width=800",
    features: [
      "Equipment maintenance",
      "Preventive cleaning",
      "Surface protection",
      "Periodic deep cleaning",
      "Maintenance scheduling",
    ],
  },
  {
    id: 5,
    title: "Avicola",
    description:
      "Expert consultation and training services to help your team maintain cleanliness and safety standards. We share our expertise to empower your organization.",
    image: "/ganaderia/ganaderia_1.jpg?height=600&width=800",
    features: [
      "Cleaning protocol development",
      "Staff training programs",
      "Safety compliance consulting",
      "Efficiency audits",
      "Best practices workshops",
    ],
  },
  {
    id: 6,
    title: "Horeca",
    description:
      "Expert consultation and training services to help your team maintain cleanliness and safety standards. We share our expertise to empower your organization.",
    image: "/ganaderia/ganaderia_1.jpg?height=600&width=800",
    features: [
      "Cleaning protocol development",
      "Staff training programs",
      "Safety compliance consulting",
      "Efficiency audits",
      "Best practices workshops",
    ],
  },
]

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Nuestros Sectores</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Descubra nuestra amplia gama de servicios de limpieza y mantenimiento diseñados para satisfacer sus necesidades específicas.
          </p>
        </div>

        {/* Services Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`px-6 py-3 rounded-full text-md font-medium transition-colors
                ${
                  activeService.id === service.id
                    ? "bg-color-yellow text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src={activeService.image || "/placeholder.svg"}
                alt={activeService.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Service Information */}
            <div className="space-y-6 order-1 lg:order-2">
              {/* <h3 className="text-2xl font-light text-gray-800">{activeService.title}</h3> */}
              <p className="text-gray-600">{activeService.description}</p>

              {/* Features List */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-800">Key Features:</h4>
                <ul className="space-y-3">
                  {activeService.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-600"
                    >
                      <Check className="h-5 w-5 text-gray-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <div className="pt-6">
                <button className="px-8 py-3 bg-color-yellow text-white rounded-md hover:bg-gray-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

