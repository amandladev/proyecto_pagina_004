"use client"

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    id: 1,
    title: "Agro",
    description: "Soluciones especializadas en limpieza para la industria agrícola.",
    image: "/agro/agro_1.jpg",
    features: [
      "Heavy-duty equipment cleaning",
      "Factory floor maintenance",
      "Industrial waste management",
      "24/7 emergency services",
      "Compliance with safety standards",
    ],
    products: [
      { id: 101, name: "Desinfectante Agrícola", image: "/agro/agro_1.jpg" },
      { id: 102, name: "Limpiador de Suelos", image: "/agro/agro_1.jpg" },
    ],
  },
  {
    id: 2,
    title: "Lácteos",
    description: "Limpieza y sanitización para plantas de procesamiento lácteo.",
    image: "/lacteos/lacteos_5.jpg",
    features: [
      "Daily office cleaning",
      "Floor and carpet care",
      "Window cleaning",
      "Restroom sanitation",
      "Green cleaning options",
    ],
    products: [
      { id: 201, name: "Detergente Especializado", image: "/products/lacteos_1.jpg" },
      { id: 202, name: "Sanitizante para Equipos", image: "/products/lacteos_2.jpg" },
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
    products: [
      { id: 101, name: "Desinfectante Agrícola", image: "/agro/agro_1.jpg" },
      { id: 102, name: "Limpiador de Suelos", image: "/agro/agro_1.jpg" },
    ],
  },
  {
    id: 4,
    title: "Carnicos",
    description:
      "Preventive maintenance and regular upkeep services to ensure your facility remains in optimal condition. We help extend the life of your assets and prevent costly repairs.",
    image: "/ganaderia/ganaderia_4.jpg?height=600&width=800",
    features: [
      "Equipment maintenance",
      "Preventive cleaning",
      "Surface protection",
      "Periodic deep cleaning",
      "Maintenance scheduling",
    ],
    products: [
      { id: 101, name: "Desinfectante Agrícola", image: "/agro/agro_1.jpg" },
      { id: 102, name: "Limpiador de Suelos", image: "/agro/agro_1.jpg" },
    ],
  },
  {
    id: 5,
    title: "Avicola",
    description:
      "Expert consultation and training services to help your team maintain cleanliness and safety standards. We share our expertise to empower your organization.",
    image: "/avicola.jpg?height=600&width=800",
    features: [
      "Cleaning protocol development",
      "Staff training programs",
      "Safety compliance consulting",
      "Efficiency audits",
      "Best practices workshops",
    ],
    products: [
      { id: 101, name: "Desinfectante Agrícola", image: "/agro/agro_1.jpg" },
      { id: 102, name: "Limpiador de Suelos", image: "/agro/agro_1.jpg" },
    ],
  },
  {
    id: 6,
    title: "Horeca",
    description:
      "Expert consultation and training services to help your team maintain cleanliness and safety standards. We share our expertise to empower your organization.",
    image: "/hoteles/hotel_2.jpg?height=600&width=800",
    features: [
      "Cleaning protocol development",
      "Staff training programs",
      "Safety compliance consulting",
      "Efficiency audits",
      "Best practices workshops",
    ],
    products: [
      { id: 101, name: "Desinfectante Agrícola", image: "/agro/agro_1.jpg" },
      { id: 102, name: "Limpiador de Suelos", image: "/agro/agro_1.jpg" },
    ],
  },
];

// const services = [
//   {
//     id: 1,
//     title: "Agro",
//     description:
//       "Professional cleaning solutions for industrial facilities and manufacturing plants. Our specialized equipment and eco-friendly products ensure a safe and clean working environment.",
//     image: "/agro/agro_1.jpg?height=600&width=800",
//     features: [
//       "Heavy-duty equipment cleaning",
//       "Factory floor maintenance",
//       "Industrial waste management",
//       "24/7 emergency services",
//       "Compliance with safety standards",
//     ],
//   },
//   {
//     id: 2,
//     title: "Lacteos",
//     description:
//       "Comprehensive cleaning services for offices, retail spaces, and commercial buildings. We maintain the highest standards of cleanliness to create a professional environment for your business.",
//     image: "/lacteos/lacteos_5.jpg?height=600&width=800",
//     features: [
//       "Daily office cleaning",
//       "Floor and carpet care",
//       "Window cleaning",
//       "Restroom sanitation",
//       "Green cleaning options",
//     ],
//   },

// ]

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Nuestros Sectores</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra nuestra amplia gama de servicios de limpieza y mantenimiento diseñados para satisfacer sus necesidades específicas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`px-6 py-3 rounded-full text-md font-medium transition-colors ${
                activeService.id === service.id
                  ? "bg-color-yellow text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src={activeService.image} alt={activeService.title} fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">{activeService.description}</p>

            <div className="mb-4">
              <h4 className="font-medium text-gray-800">Key Features:</h4>
              <ul className="space-y-2 text-gray-600">
                {activeService.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-gray-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-color-yellow text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Mira los productos
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-light text-gray-800">{activeService.title}</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-600 hover:text-gray-900">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {activeService.products.map((product) => (
                  <div key={product.id} className="bg-gray-100 p-4 rounded-lg text-center">
                    <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto mb-2 rounded-md object-cover" />
                    <p className="text-gray-800 font-medium mb-2">{product.name}</p>
                    <button
                      onClick={() => router.push(`/store/${product.id}`)}
                      className="mt-2 px-4 py-2 bg-color-yellow text-white rounded-md hover:bg-gray-700 transition-colors"
                    >
                      Ver detalle
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
