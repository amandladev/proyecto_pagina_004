import Image from "next/image"
import { Award, Users, Leaf, TrendingUp } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">¿Quiénes Somos?</h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, esse dicta libero debitis harum magni quos qui quam quod odio obcaecati veritatis totam itaque pariatur corrupti molestias perspiciatis beatae! Eligendi..
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=800&width=600" alt="Our team at work" fill className="object-cover" />
            <div className="absolute inset-0 bg-gray-900/20"></div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light text-gray-800">Our Story</h3>
            <p className="text-gray-600">
              Founded in 2000, our company began with a simple mission: to create cleaning products that deliver
              exceptional results without compromising on safety or environmental responsibility.
            </p>
            <p className="text-gray-600">
              What started as a small family business has grown into a trusted brand, serving thousands of customers
              across the country. Despite our growth, we remain committed to our core values of quality, innovation, and
              sustainability.
            </p>

            {/* Key Values */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Quality</h4>
                  <p className="text-sm text-gray-600">Premium ingredients for superior results</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Eco-Friendly</h4>
                  <p className="text-sm text-gray-600">Sustainable formulas and packaging</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Family Safe</h4>
                  <p className="text-sm text-gray-600">Non-toxic and gentle formulations</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gray-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Innovation</h4>
                  <p className="text-sm text-gray-600">Constantly improving our products</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-light text-gray-800 mb-2">20+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-light text-gray-800 mb-2">50+</div>
            <div className="text-gray-600">Products</div>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-light text-gray-800 mb-2">100k+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-light text-gray-800 mb-2">15+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}

