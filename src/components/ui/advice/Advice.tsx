import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, FileCheck, Users, ArrowRight, CheckCircle } from "lucide-react"

const expertiseItems = [
  {
    title: "Planes",
    icon: <ClipboardCheck className="h-10 w-10 text-gray-600" />,
    description: "Customized cleaning protocols designed specifically for your facility and operational needs.",
    features: [
      "Tailored cleaning schedules",
      "Product recommendations",
      "Staff allocation planning",
      "Budget optimization",
    ],
    image: "/asesorias/planes.webp?height=400&width=600",
    cta: "Get a custom plan",
    link: "/services/plans",
  },
  {
    title: "Validaciones",
    icon: <FileCheck className="h-10 w-10 text-gray-600" />,
    description:
      "Professional validation services to ensure your cleaning processes meet industry standards and regulations.",
    features: [
      "Compliance verification",
      "Quality assurance testing",
      "Contamination prevention",
      "Certification support",
    ],
    image: "/asesorias/validaciones.webp?height=400&width=600",
    cta: "Request validation",
    link: "/services/validations",
  },
  {
    title: "Charlas",
    icon: <Users className="h-10 w-10 text-gray-600" />,
    description: "Educational sessions and workshops led by cleaning industry experts for your team.",
    features: ["Best practices training", "New technology demonstrations", "Regulatory updates", "Hands-on workshops"],
    image: "/asesorias/charlas.webp?height=400&width=600",
    cta: "Book a session",
    link: "/services/talks",
  },
]

export default function ExpertAdviceSection() {
  return (
    <section className="py-16 bg-gray-50" id="expert-advice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Asesoría Experta</h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Además de nuestros productos de limpieza premium, ofrecemos servicios de consultoría profesional para ayudarte a
            implementar estrategias de limpieza efectivas para tu negocio.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col transition-transform hover:shadow-md hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gray-900/20"></div>
                <div className="absolute top-4 left-4 bg-white/90 rounded-full p-3">{item.icon}</div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-medium text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 mt-auto">
                <Link href={item.link}>
                  <Button className="w-full group">
                    {item.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Need a customized solution for your specific cleaning challenges?</p>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Schedule a Consultation
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  )
}

