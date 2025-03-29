"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ConsumerProductsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const products = [
    {
      id: 1,
      name: "EcoClean Home",
      category: "kitchen",
      description: "Powerful kitchen cleaner made with natural ingredients",
      features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "GlassShine Pro",
      category: "bathroom",
      description: "Streak-free glass and mirror cleaner for a crystal clear finish",
      features: ["No streaks", "Anti-fog", "Long-lasting"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "FreshScent Air",
      category: "living",
      description: "Air freshener that eliminates odors instead of masking them",
      features: ["Long-lasting", "Natural scents", "Odor neutralizing"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "MultiSurface Clean",
      category: "kitchen",
      description: "One solution for all your surfaces - wood, tile, granite, and more",
      features: ["Versatile", "Gentle formula", "Deep cleaning"],
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const filteredProducts = activeTab === "all" ? products : products.filter((product) => product.category === activeTab)

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 flex justify-center" id="consumer-products">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg  bg-slate-200 px-3 py-1 text-sm text-primary">Nuevo</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Limpieza Profesional, Ahora para tu Hogar
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Nuestro equipo de expertos en limpieza industrial ha reformulado nuestros productos para su uso cotidiano. El mismo poder y
            eficiencia, ahora para tu hogar.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-12">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All
            </TabsTrigger>
            <TabsTrigger value="kitchen" onClick={() => setActiveTab("kitchen")}>
              Cocina
            </TabsTrigger>
            <TabsTrigger value="bathroom" onClick={() => setActiveTab("bathroom")}>
              Baños
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
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
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
                  <Button variant="outline" className="w-full mt-2">
                    Learn more
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-xl bg-primary/5 border border-primary/10">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold mb-2">
            ¿Listo para transformar tu rutina de limpieza?
              </h3>
            <p className="text-gray-500">
              Experimenta la diferencia de productos de limpieza industrial de alta calidad diseñados para tu hogar.
              
            </p>
          </div>
          <Button size="lg" className="px-8">
            Ir a la tienda <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

