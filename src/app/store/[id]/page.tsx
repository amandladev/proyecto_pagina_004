import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Home, Star, ShoppingCart, Heart, Share2, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// This would normally come from a database or API
const product = {
  id: 1,
  name: "Multi-Surface Cleaner",
  description:
    "Professional-grade cleaner for all surfaces. Our Multi-Surface Cleaner is formulated to tackle dirt, grime, and stains on virtually any washable surface. The powerful yet gentle formula is safe for use on countertops, appliances, walls, floors, and more.",
  price: 12.99,
  category: "all-purpose",
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  rating: 4.5,
  reviewCount: 127,
  inStock: true,
  featured: true,
  details: {
    size: "32 oz",
    ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
    directions:
      "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
    warnings: "Keep out of reach of children. Avoid contact with eyes.",
  },
  relatedProducts: [
    {
      id: 3,
      name: "Glass & Window Cleaner",
      price: 9.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Bathroom Cleaner",
      price: 11.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 8,
      name: "Disinfectant Spray",
      price: 8.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 11,
      name: "Oven & Grill Cleaner",
      price: 15.99,
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
}

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm text-gray-500">
            <Link href="/" className="flex items-center hover:text-gray-700">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/products" className="hover:text-gray-700">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative rounded-lg overflow-hidden border bg-gray-100">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-square relative rounded-md overflow-hidden border cursor-pointer ${
                      index === 0 ? "ring-2 ring-gray-600" : ""
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-1">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="text-2xl font-medium text-gray-900 mb-4">${product.price.toFixed(2)}</div>

              {/* Description */}
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Options */}
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                    Size
                  </label>
                  <Select defaultValue="32oz">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="16oz">16 oz</SelectItem>
                      <SelectItem value="32oz">32 oz</SelectItem>
                      <SelectItem value="64oz">64 oz (Half Gallon)</SelectItem>
                      <SelectItem value="128oz">128 oz (Gallon)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <Select defaultValue="1">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" size="icon" className="h-11 w-11">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Product Details */}
              <div className="border-t pt-6 mt-auto">
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                    <TabsTrigger value="directions">Directions</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="pt-4">
                    <dl className="space-y-2">
                      <div className="flex">
                        <dt className="w-24 flex-shrink-0 text-gray-500">Size:</dt>
                        <dd>{product.details.size}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-24 flex-shrink-0 text-gray-500">Category:</dt>
                        <dd className="capitalize">{product.category.replace("-", " ")}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-24 flex-shrink-0 text-gray-500">SKU:</dt>
                        <dd>MSC-{product.id.toString().padStart(4, "0")}</dd>
                      </div>
                    </dl>
                  </TabsContent>
                  <TabsContent value="ingredients" className="pt-4">
                    <p className="text-gray-600">{product.details.ingredients}</p>
                  </TabsContent>
                  <TabsContent value="directions" className="pt-4">
                    <p className="text-gray-600">{product.details.directions}</p>
                    <p className="text-gray-600 mt-2 text-sm font-medium">Warning: {product.details.warnings}</p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-light text-gray-900">Related Products</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="group bg-white rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <span className="text-gray-900">${relatedProduct.price.toFixed(2)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

