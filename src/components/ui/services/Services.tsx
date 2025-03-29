"use client"

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, X } from "lucide-react";
import { useRouter } from "next/navigation";
const services = [
  {
    id: 1,
    title: "Agro",
    description: "Soluciones especializadas en limpieza para la industria agrícola.",
    image: "/agro/agro_1.jpg",
    features: [
      {
        id: 1,
        title: "Paltos",
        description: "Desinfección de paltos y otros cultivos.",
        image: "/agro/features/palta.jpg",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]
      },
      {
        id: 2,
        title: "Citricos",
        description: "Desinfección de citricos y otros cultivos.",
        image: "/agro/features/citrico.jpg",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]
      },
      {
        id: 3,
        title: "ViD",
        description: "Desinfección de ViD y otros cultivos.",
        image: "/agro/features/vid.jpg",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 4,
        title: "Mango",
        description: "Desinfección de mango y otros cultivos.",
        image: "/agro/features/mango_1.jpg",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      }
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
      {
        id: 1,
        title: "Ordeñadores",
        description: "Desinfección de paltos y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 2,
        title: "Fabricacion de Lacteos",
        description: "Desinfección de citricos y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 3,
        title: "Quesos",
        description: "Desinfección de ViD y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
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
      {
        id: 1,
        title: "Paltos",
        description: "Desinfección de paltos y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 2,
        title: "Citricos",
        description: "Desinfección de citricos y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 3,
        title: "ViD",
        description: "Desinfección de ViD y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 4,
        title: "Mango",
        description: "Desinfección de mango y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      }
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
      {
        id: 1,
        title: "Paltos",
        description: "Desinfección de paltos y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]

      },
      {
        id: 2,
        title: "Citricos",
        description: "Desinfección de citricos y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 3,
        title: "ViD",
        description: "Desinfección de ViD y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 4,
        title: "Mango",
        description: "Desinfección de mango y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      }
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
      {
        id: 1,
        title: "Paltos",
        description: "Desinfección de paltos y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 2,
        title: "Citricos",
        description: "Desinfección de citricos y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 3,
        title: "ViD",
        description: "Desinfección de ViD y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 4,
        title: "Mango",
        description: "Desinfección de mango y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      }
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
      {
        id: 1,
        title: "Paltos",
        description: "Desinfección de paltos y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 2,
        title: "Citricos",
        description: "Desinfección de citricos y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 3,
        title: "ViD",
        description: "Desinfección de ViD y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 4,
        title: "Mango",
        description: "Desinfección de mango y otros cultivos.",
        image: "",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      }
    ],
    products: [
      { id: 101, name: "Desinfectante Agrícola", image: "/agro/agro_1.jpg" },
      { id: 102, name: "Limpiador de Suelos", image: "/agro/agro_1.jpg" },
    ],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0])
  const [activeSubcategoryId, setActiveSubcategoryId] = useState(activeService.features[0].id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const activeSubcategory =
    activeService.features.find((sub) => sub.id === activeSubcategoryId) || activeService.features[0]

  const modalRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Sectores</h2>
          {/* <div className="w-24 h-1 bg-black mx-auto"></div> */}
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra nuestra amplia gama de servicios de limpieza y mantenimiento diseñados para satisfacer sus necesidades específicas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`px-6 py-3 rounded-full text-md font-medium transition-colors ${activeService.id === service.id
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
              <h4 className="font-medium text-gray-800">Sub sector:</h4>
              <ul className="space-y-2 text-gray-600">
                {activeService.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-gray-600 flex-shrink-0" />
                    <span>{feature.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-color-yellow text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Ver más
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Modal header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <h3 className="text-2xl font-semibold text-gray-800 ">{activeService.title}</h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700  p-2 rounded-full hover:bg-gray-100  transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 "
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description section */}
              <div className="px-6 pt-4 pb-2">
                <div className="bg-gray-50  rounded-lg p-4">
                  <p className="text-gray-700  leading-relaxed">{activeService.description}</p>
                </div>
              </div>

              {/* Main subcategory image */}
              <div className="px-6 pt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSubcategoryId + "-image"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-48 sm:h-64 overflow-hidden rounded-lg shadow-md"
                  >
                    <Image
                      src={activeSubcategory.image || "/placeholder.svg"}
                      alt={activeSubcategory.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h4 className="text-xl font-semibold mb-1">{activeSubcategory.title}</h4>
                        <p className="text-sm text-gray-200">{activeSubcategory.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Tabs navigation */}
              <div className="px-6 pt-4">
                <div className="flex overflow-x-auto scrollbar-hide space-x-1 border-b border-gray-200 ">
                  {activeService.features.map((subcategory) => (
                    <button
                      key={subcategory.id}
                      onClick={() => setActiveSubcategoryId(subcategory.id)}
                      className={`
                        px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-t-lg
                        ${subcategory.id === activeSubcategoryId
                          ? "bg-amber-500 text-white"
                          : "text-gray-600  hover:bg-gray-100 "}
                      `}
                    >
                      {subcategory.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal content with products */}
              <div className="p-6 overflow-y-auto max-h-[calc(80vh-400px)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSubcategoryId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                      {activeSubcategory.images.map((product, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -5 }}
                          className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <div className="relative h-48 w-full overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center blur-lg scale-110"
                              style={
                                {
                                  backgroundImage: `url(${product.image})`
                                }
                              }>
                            </div>
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-contain transition-transform duration-300 hover:scale-105 "
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="text-lg font-medium text-gray-800  mb-3">
                              {product.name}
                            </h4>
                            <button
                              onClick={() => router.push(`/store/${index}`)}
                              className="w-full px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center space-x-1 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                            >
                              <span>Ver detalle</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
