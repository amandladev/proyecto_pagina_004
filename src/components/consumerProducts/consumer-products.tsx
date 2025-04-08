"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function ConsumerProductsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const products = [
    {
      id: 1,
      name: "Jabón Líquido",
      category: "personalCare",
      description: "Jabón para uso general en baños, cocina",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/products/liquid_soap.jpg?height=300&width=300",
      priceDetail: [{
        price: 10,
        amount: 0.38
      }],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["0.38"]
    },
    {
      id: 2,
      name: "Jabón Neutro",
      category: "cleaning",
      description: "Jabón profesional sin olor ni color para manos en cocina",
      features: ["No streaks", "Anti-fog", "Long-lasting"],
      image: "/products/neutral_soap.jpg?height=300&width=300",
      priceDetail: [{
        price: 20,
        amount: 1
      }],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["1"]
    },
    {
      id: 3,
      name: "Shampoo Professional Line",
      category: "personalCare",
      description: "Shampoo profesional PH balanceado para la familia",
      features: ["Long-lasting", "Natural scents", "Odor neutralizing"],
      image: "/products/shampoo_familia.jpg?height=300&width=300",
      priceDetail: [{
        price: 25,
        amount: 0.5
      }],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["0.5"]
    },
    {
      id: 4,
      name: "Shampoo Pets",
      category: "personalCare",
      description: "Shampoo profesional PH balanceado para mascotas",
      features: ["Versatile", "Gentle formula", "Deep cleaning"],
      image: "/products/gato_1.jpg?height=300&width=300",
      priceDetail: [{
        price: 20,
        amount: 1
      }],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["1"]
    },
    {
      id: 5,
      name: "Shampoo Pets Antipulgas",
      category: "personalCare",
      description: "Shampoo profesional para mascotas con adhitivo antipulgas",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/products/perro_1.jpg?height=300&width=300",
      priceDetail: [
        {
          price: 25,
          amount: 1
        }
      ],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["1"]
    },
    {
      id: 6,
      name: "Biochlor Prime",
      category: "desinfeccion",
      description: "Solución ddesinfectante de frutas y verduras",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/frutas/frutas_1.jpg?height=300&width=300",
      priceDetail: [
        {
          price: 15,
          amount: 0.25
        }
      ],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["0.25"]
    },
    {
      id: 7,
      name: "Lavavajillas Conc. / Lavaplatos",
      category: "cleaning",
      description: "Lavalozas profesionales para vajilla, utensilios, cubiertos y ollas",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/products/lavavajillas.jpg?height=300&width=300",
      priceDetail: [
        {
          price: 15,
          amount: 1
        }
      ],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["1"]
    },
    {
      id: 8,
      name: "Limpia baños",
      category: "cleaning",
      description: "Limpieza profesional para el baño (Artefactos, quitamanchas, funguicida)",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/products/limpia_banos.jpg?height=300&width=300",
      priceDetail: [
        {
          price: 35,
          amount: 1
        }
      ],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["1"]
    },
    {
      id: 9,
      name: "Limpia vidrios",
      category: "cleaning",
      description: "Limpia vidrios con formulación profesional",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/products/limpia_vidrios.jpg?height=300&width=300",
      priceDetail: [
        {
          price: 10,
          amount: 1
        }
      ],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["1"]
    },
    {
      id: 10,
      name: "Limpiatodo Cuaternario",
      category: "cleaning",
      description: "Limpieza y desinfección profesional de superficies",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/products/limpiatodo_cuaternario.jpg?height=300&width=300",
      priceDetail: [
        {
          price: 30,
          amount: 1
        }
      ],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["1"]
    }
    ,
    {
      id: 11,
      name: "Limpiapisos Cuaternario",
      category: "cleaning",
      description: "Limpieza y desinfección profesional de pisos",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/products/pisos_cuaternario.jpg?height=300&width=300",
      priceDetail: [
        {
          price: 40,
          amount: 4
        }
      ],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["4"]
    },
    {
      id: 12,
      name: "Sacagrasa",
      category: "cleaning",
      description: "Sacagrasas profesional para campanas, parrillas y grasa pesada",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/products/saca_grasa.jpg?height=300&width=300",
      priceDetail: [
        {
          price: 20,
          amount: 0.5
        }
      ],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["0.5"]
    },
    {
      id: 14,
      name: "Sacasarro RTU",
      category: "cleaning",
      description: "Sacasarro profesional PH balanceado para duchas, griferia y desagües",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/products/sacasarro.jpg?height=300&width=300",
      priceDetail: [
        {
          price: 20,
          amount: 1
        }
      ],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["1"]
    },
    {
      id: 15,
      name: "Ropa blanca",
      category: "living",
      description: "Limpieza profesional de ropa blanca",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/products/ropa_blanca.jpg?height=300&width=300",
      priceDetail: [
        {
          price: 50,
          amount: 4
        }
      ],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["4"]
    },
    {
      id: 16,
      name: "Ropa color",
      category: "living",
      description: "Limpieza profesional de ropa de color",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/products/ropa_color.jpg?height=300&width=300",
      priceDetail: [
        {
          price: 50,
          amount: 4
        }
      ],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["4"]
    },
    {
      id: 17,
      name: "Gel Hidroalcohol",
      category: "desinfeccion",
      description: "",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/products/gel_hidroalcohol.jpg?height=300&width=300",
      priceDetail: [
        {
          price: 15,
          amount: 0.5
        },
        {
          price: 20,
          amount: 1
        }
      ],
      isStock: true,
      featured: true,
      rating: 4.5,
      size: ["0.5", "1"]
    },
  ]

  const filteredProducts = activeTab === "all" ? products : products.filter((product) => product.category === activeTab)

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 flex justify-center" id="consumer-products">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg  bg-slate-100 px-3 py-1 text-sm text-primary">Nuevo</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Limpieza Profesional, Ahora para tu Hogar
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Nuestro equipo de expertos en limpieza industrial ha reformulado nuestros productos para su uso cotidiano. El mismo poder y
            eficiencia, ahora para tu hogar.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-12">
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              Todos
            </TabsTrigger>
            <TabsTrigger value="desinfeccion" onClick={() => setActiveTab("desinfeccion")}>
              Desinfección
            </TabsTrigger>
            <TabsTrigger value="personalCare" onClick={() => setActiveTab("personalCare")}>
              Personal Care
            </TabsTrigger>
            <TabsTrigger value="cleaning" onClick={() => setActiveTab("cleaning")}>
              Limpieza Hogar
            </TabsTrigger>
            <TabsTrigger value="living" onClick={() => setActiveTab("living")}>
              Ropa
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg h-full">
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Link href={`/store/${product.id}`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />

                  </Link>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-500 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="h-4 w-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* <Link  href={`/store/${product.id}`}>
                    <Button variant="outline" className="w-full mt-2">
                      Ver detalle
                    </Button>
                  </Link> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-xl bg-gray-100 border border-primary/10">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold mb-2">
            ¿Listo para transformar tu rutina de limpieza?
              </h3>
            <p className="text-gray-500">
              Experimenta la diferencia de productos de limpieza industrial de alta calidad diseñados para tu hogar.
              
            </p>
          </div>
          <Link href={"/store"}>
            <Button size="lg" className="px-8">
              Ir a la tienda <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

