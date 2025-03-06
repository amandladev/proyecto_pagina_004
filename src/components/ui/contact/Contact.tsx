"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

// import { useToast } from "@/components/ui/use-toast"
// import { Toaster } from "@/components/ui/toaster"

export default function ContactSection() {
//   const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // toast({
    //   title: "Message sent!",
    //   description: "We'll get back to you as soon as possible.",
    // })

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Contactanos</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia aspernatur architecto deleniti ipsum corrupti, nam omnis, porro aperiam perspiciatis quisquam, voluptatum labore sed maxime. Similique accusantium quos libero earum.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-light text-gray-800 mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-gray-300">Nombres</label>
                  <input className="border border-gray-300 text-color-black px-2" id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-gray-300">Apellidos</label>
                  <input className="border border-gray-300 text-color-black px-2" id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="email" className="text-gray-300">Email</label>
                <input className="border border-gray-300 text-color-black px-2" id="email" type="email" placeholder="john@example.com" required />
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="phone" className="text-gray-300">Teléfono</label>
                <input className="border border-gray-300 text-color-black px-2" id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="subject" className="text-gray-300">Asunto</label>
                <input  className="border border-gray-300 text-color-black px-2" id="subject" placeholder="How can we help?" required />
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="message" className="text-gray-300">Mensaje</label>
                <textarea id="message" placeholder="Your message..." className="min-h-[150px] text-color-black px-2 border border-gray-300" required />
              </div>

              <button type="submit" className="flex items-center text-white bg-color-yellow hover:bg-gray-800 px-4 py-2 rounded-md text-md font-medium transition-colors" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid gap-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Ubicación</h3>
                    <p className="text-gray-600">
                      123 Business Street
                      <br />
                      Suite 100
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">
                      Ventas: (555) 123-4567
                      <br />
                      Support: (555) 123-4568
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      Ventas: sales@company.com
                      <br />
                      Support: support@company.com
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Horario de atención</h3>
                    <p className="text-gray-600">
                      Lunes - Viernes: 9:00 AM - 6:00 PM
                      <br />
                      Sábado: 10:00 AM - 4:00 PM
                      <br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Toaster /> */}
    </section>
  )
}

