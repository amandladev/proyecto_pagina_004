"use client"

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { TechnicalSpecsModal } from "../modal/TechnicalSpec";

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
      { id: 101, name: "Palta", image: "/agro/features/palta.jpg" },
      { id: 102, name: "Citricos", image: "/agro/features/citrico.jpg" },
      { id: 103, name: "Mangos", image: "/agro/features/mango.jpg" },
      { id: 104, name: "Uvas", image: "/agro/features/uva.jpg" },
    ],
    technicalSpecs: [
      { name: "Alkacip", src: "/fichasTecnicas/agro/Alkacip.pdf"},
      { name: "Break Down", src: "/fichasTecnicas/agro/Break_down.pdf"},
      { name: "Full Clean", src: "/fichasTecnicas/agro/Fullclean.pdf"},
      { name: "Green Adhiere", src: "/fichasTecnicas/agro/Green_Adhiere.pdf"},
      { name: "Green Fruits", src: "/fichasTecnicas/agro/Green_Fruits.pdf"},
      { name: "Green K", src: "/fichasTecnicas/agro/Green_k.pdf"},
      { name: "Green Silicon", src: "/fichasTecnicas/agro/Green_Silicon.pdf"},
      { name: "Green Tree", src: "/fichasTecnicas/agro/Green_Tree.pdf"}
    ]
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
        image: "/lacteos/lacteos_6.jpg",
        images: [{ image: "/agro/features/products/1.jpg", name: "Ordeñadores 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 2,
        title: "Fabricacion de Lacteos",
        description: "Desinfección de citricos y otros cultivos.",
        image: "/lacteos/lacteos_7.jpg",
        images: [{ image: "/agro/features/products/1.jpg", name: "Ordeñadores 2" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 3,
        title: "Quesos",
        description: "Desinfección de ViD y otros cultivos.",
        image: "/lacteos/lacteos_8.jpg",
        images: [{ image: "/agro/features/products/1.jpg", name: "Ordeñadores 3" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
    ],
    products: [
      { id: 2001, name: "Leche", image: "/lacteos/features/leche.webp" },
      { id: 2002, name: "Manjar", image: "/lacteos/features/manjar.webp" },
      { id: 2003, name: "Yogurt", image: "/lacteos/features/yogurt.jpeg" },
      { id: 2004, name: "Queso", image: "/lacteos/features/queso.jpg" },
    ],
    technicalSpecs: [
      { name: "Acidcip", src: "/fichasTecnicas/lacteos/Acidcip.pdf"},
      { name: "Acid Clean", src: "/fichasTecnicas/lacteos/Acidclean.pdf"},
      { name: "Alkacip", src: "/fichasTecnicas/lacteos/Alkacip.pdf"},
      { name: "Alka Clean", src: "/fichasTecnicas/lacteos/Alkaclean.pdf"},
      { name: "Azoquats", src: "/fichasTecnicas/lacteos/Azoquats.pdf"},
      { name: "Biochlor Prime", src: "/fichasTecnicas/lacteos/Biochlor.pdf"},
      { name: "Full Clean", src: "/fichasTecnicas/lacteos/Fullclean.pdf"},
      { name: "Jabon Neutro", src: "/fichasTecnicas/lacteos/Jabon_neutro.pdf"}
    ]
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
        image: "/food/avocado.jpg",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 2,
        title: "Citricos",
        description: "Desinfección de citricos y otros cultivos.",
        image: "/food/citrico.jpg",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 3,
        title: "ViD",
        description: "Desinfección de ViD y otros cultivos.",
        image: "/food/uva.jpg",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      },
      {
        id: 4,
        title: "Mango",
        description: "Desinfección de mango y otros cultivos.",
        image: "/food/mango.jpg",
        images: [{ image: "/agro/features/products/1.jpg", name: "Limpieza 1" }, { image: "/agro/features/products/2.jpg", name: "Limpieza 2" }, { image: "/agro/features/products/3.jpg", name: "Limpieza 3" }]


      }
    ],
    products: [
      { id: 1009, name: "Botella de agua", image: "/food/features/botella.jpg" },
      { id: 1010, name: "Verduras supermercado", image: "/food/features/verduras.jpg" },
      { id: 1011, name: "Ketchup y Mostaza", image: "/food/features/mayonnaise.jpg" },
      { id: 1041, name: "Jugos en caja tetrapack", image: "/food/features/jugos.jpg" },
    ],
    technicalSpecs: [
      { name: "Acidcip", src: "/fichasTecnicas/food/Acidcip.pdf"},
      { name: "Acidclean", src: "/fichasTecnicas/food/Acidclean.pdf"},
      { name: "Alkacip", src: "/fichasTecnicas/food/Alkacip.pdf"},
      { name: "Azoquats", src: "/fichasTecnicas/food/Azoquats.pdf"},
      { name: "Biochlor Prime", src: "/fichasTecnicas/food/Biochlor.pdf"},
      { name: "Full Clean", src: "/fichasTecnicas/food/Fullclean.pdf"},
      { name: "Green Foods", src: "/fichasTecnicas/food/Green_Foods.pdf"},
      { name: "Jabon Neutro", src: "/fichasTecnicas/food/Jabon_neutro.pdf"}
    ]
  },
  {
    id: 4,
    title: "Ganaderia",
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
      { id: 201, name: "Ordenar", image: "/ganaderia/features/ordenar.jpg" },
      { id: 202, name: "Ubres", image: "/ganaderia/features/ubres.jpg" },
      { id: 203, name: "Leche", image: "/ganaderia/features/leche.png" },
      { id: 204, name: "Pezunas", image: "/ganaderia/features/pezunas.jpg" },
    ],
    technicalSpecs: [
      { name: "Acidclean", src: "/fichasTecnicas/ganaderia/Acidclean.pdf"},
      { name: "Acilow", src: "/fichasTecnicas/ganaderia/Acilow.pdf"},
      { name: "Alkalow", src: "/fichasTecnicas/ganaderia/Alkalow.pdf"},
      { name: "Azoquats", src: "/fichasTecnicas/ganaderia/Azoquats.pdf"},
      { name: "Barrera", src: "/fichasTecnicas/ganaderia/Barrera.pdf"},
      { name: "Biochlor Prime", src: "/fichasTecnicas/ganaderia/Biochlor.pdf"},
      { name: "Full Clean", src: "/fichasTecnicas/ganaderia/Fullclean.pdf"},
      { name: "Iodine", src: "/fichasTecnicas/ganaderia/Iodine.pdf"},
      { name: "Lactifoam", src: "/fichasTecnicas/ganaderia/Lacti.pdf"},
      { name: "Peroxiclean", src: "/fichasTecnicas/ganaderia/Peroxiclean.pdf"},
      { name: "Pre Oxilac", src: "/fichasTecnicas/ganaderia/Pre-Oxilac.pdf"},
      { name: "Pre Sellado", src: "/fichasTecnicas/ganaderia/Pre-sellado.pdf"}
    ]
  },
  {
    id: 5,
    title: "Horeca",
    description:
      "Expert consultation and training services to help your team maintain cleanliness and safety standards. We share our expertise to empower your organization.",
    image: "/hoteles/hoteles.jpg?height=600&width=800",
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
      { id: 301, name: "Comedor de empresa", image: "/hoteles/hoteles.jpg" },
      { id: 302, name: "Cocina", image: "/hoteles/hoteles_2.jpg" },
      { id: 303, name: "Sanitarios", image: "/hoteles/hoteles_3.jpg" },
      { id: 304, name: "Lavanderia", image: "/hoteles/hoteles_4.jpg" },
    ],
    technicalSpecs: [
      { name: "Gel Hidroalcoholico", src: "/fichasTecnicas/horeca/Alcohol.pdf"},
      { name: "Biochlor Prime", src: "/fichasTecnicas/horeca/Biochlor.pdf"},
      { name: "Jabon Neutro", src: "/fichasTecnicas/horeca/Jabon_neutro.pdf"},
      { name: "Lavavajillas", src: "/fichasTecnicas/horeca/Lavavajillas.pdf"},
      { name: "Limpia pisos", src: "/fichasTecnicas/horeca/Limpia_pisos.pdf"},
      { name: "Limpia baños", src: "/fichasTecnicas/horeca/Limpiabanos.pdf"},
      { name: "Limpiatodo", src: "/fichasTecnicas/horeca/Limpiatodo.pdf"},
      { name: "Limpiavidrio", src: "/fichasTecnicas/horeca/Limpiavidrio.pdf"},
      { name: "Ropa Blanca", src: "/fichasTecnicas/horeca/Ropa_Blanca_Azowash.pdf"},
      { name: "Ropa color", src: "/fichasTecnicas/horeca/Ropa_color.pdf"},
      { name: "Sacagrasa", src: "/fichasTecnicas/horeca/Sacagrasa.pdf"},
      { name: "Sacasarro", src: "/fichasTecnicas/horeca/Sacasarro.pdf"},
    ]
  },
];

export default function ServicesSection() {
  const [showModal, setShowModal] = useState(false);
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

        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeService.products.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="relative h-[250px] w-[280px] shrink-0 rounded-md overflow-hidden sm:left-[15%] left-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 bg-color-yellow text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Ver Fichas Técnicas
            </button>
          </div>

          <TechnicalSpecsModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            specs={activeService.technicalSpecs}
          />
        </div>
      </div>
    </section>
  );
}
