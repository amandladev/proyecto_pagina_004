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
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our products or services? We're here to help. Reach out to us through any of the
            following channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-light text-gray-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName">First name</label>
                  <input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName">Last name</label>
                  <input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="john@example.com" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone">Phone (optional)</label>
                <input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject">Subject</label>
                <input id="subject" placeholder="How can we help?" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your message..." className="min-h-[150px]" required />
              </div>

              <button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid gap-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Our Location</h3>
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
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Sales: (555) 123-4567
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
                      Sales: sales@company.com
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
                    <h3 className="font-medium text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
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

