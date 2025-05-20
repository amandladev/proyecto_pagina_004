"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ContactSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    console.log({formData})
    const data = {
      name: formData.get("firstName"),
      email: formData.get("email"),
      message: formData.get("message"),
    }
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
  
      if (res.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Nos pondremos en contacto lo más pronto posible.",
        })
        form.reset()
      } else {
        toast({
          title: "Error al enviar",
          description: "Por favor intenta de nuevo.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error de servidor",
        description: "Algo salió mal. Intenta más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }  

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contáctanos</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Si tienes una pregunta, comentario o simplemente quieres saber más sobre nuestros servicios, no dudes en ponerte en contacto con nosotros.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
                {/* Address */}
                <div className="flex space-x-4 flex-col">
                  <h2 className="ms-6 text-lg font-bold mb-3">Ventas Industriales</h2>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      {/* <MapPin className="h-6 w-6 text-gray-600" /> */}
                      <Phone className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Teléfono</h3>
                      <p className="text-gray-600">
                        (51) 933 297 202  
                        <br/>
                        (51) 990 999 779
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 mt-3">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Correo Electrónico</h3>
                      <p className="text-gray-600">
                        ventas@higieneperu.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 mt-3">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Horario de Atención</h3>
                      <p className="text-gray-600">
                        Lunes - Viernes: 9:00 AM - 12:00 PM y 3:00 PM - 6:00 PM
                      </p>
                    </div>
                  </div>
                
                </div>

                {/* Contact Details */}
                <div className="flex space-x-4 flex-col"> 
                  <h2 className="ms-6 text-lg font-bold mb-3">Ventas Minorista y Hogar</h2>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Teléfono</h3>
                      <p className="text-gray-600">
                         (51) 956 054 017  
                         <br/>
                         (51) 940 864 330
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 mt-3">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Correo Electrónico</h3>
                      <p className="text-gray-600">
                      contacto@gana-service.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 mt-3">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Horario de Atención</h3>
                      <p className="text-gray-600">
                        Lunes - Viernes: 9:00 AM - 12:00 PM y 3:00 PM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-light text-gray-800 mb-6">Envianos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombres</Label>
                  <Input id="firstName" placeholder="John" required name="firstName"/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellidos</Label>
                  <Input id="lastName" placeholder="Doe" required name="lastName"/>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required name="email"/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefono (opcional)</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" name="phone"/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" placeholder="¿Cómo podemos ayudar?" required name="subject"/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="" className="min-h-[150px]" required name="message"/>
              </div>

              <Button type="submit" className="" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  )
}

