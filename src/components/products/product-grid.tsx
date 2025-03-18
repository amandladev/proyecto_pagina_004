"use client"

import { useState } from "react"
import ProductCard from "./product-card"
import ProductFilters from "./product-filters"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, SlidersHorizontal } from "lucide-react"

// Sample product data - replace with your actual products
const products = [
  {
    id: 1,
    name: "Multi-Surface Cleaner",
    description: "Professional-grade cleaner for all surfaces",
    price: 12.99,
    category: "all-purpose",
    image: "/cocinas/cocinas_0.jpg?height=300&width=300",
    rating: 4.5,
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Industrial Degreaser",
    description: "Heavy-duty degreaser for industrial use",
    price: 24.99,
    category: "industrial",
    image: "/cocinas/cocinas_1.jpg?height=300&width=300",
    rating: 4.8,
    inStock: true,
    featured: false,
  },
  {
    id: 3,
    name: "Glass & Window Cleaner",
    description: "Streak-free formula for glass surfaces",
    price: 9.99,
    category: "glass",
    image: "/frutas/frutas_0.jpg?height=300&width=300",
    rating: 4.2,
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: "Floor Cleaning Solution",
    description: "Concentrated formula for all floor types",
    price: 19.99,
    category: "floor",
    image: "/frutas/frutas_1.jpg?height=300&width=300",
    rating: 4.6,
    inStock: true,
    featured: false,
  },
  {
    id: 5,
    name: "Bathroom Cleaner",
    description: "Removes soap scum and hard water stains",
    price: 11.99,
    category: "bathroom",
    image: "/limpieza/limpieza_0.jpg?height=300&width=300",
    rating: 4.3,
    inStock: true,
    featured: true,
  },
  {
    id: 6,
    name: "Stainless Steel Polish",
    description: "Restores shine to stainless steel surfaces",
    price: 14.99,
    category: "specialty",
    image: "/limpieza/limpieza_1.jpg?height=300&width=300",
    rating: 4.7,
    inStock: false,
    featured: false,
  },
  {
    id: 7,
    name: "Carpet Shampoo",
    description: "Deep cleaning formula for carpets and upholstery",
    price: 22.99,
    category: "carpet",
    image: "/limpieza/limpieza_2.jpg?height=300&width=300",
    rating: 4.4,
    inStock: true,
    featured: false,
  },
  {
    id: 8,
    name: "Disinfectant Spray",
    description: "Kills 99.9% of germs and bacteria",
    price: 8.99,
    category: "disinfectant",
    image: "/lacteos/lacteos_4.jpg?height=300&width=300",
    rating: 4.9,
    inStock: true,
    featured: true,
  },
  {
    id: 9,
    name: "Wood Furniture Polish",
    description: "Nourishes and protects wood surfaces",
    price: 16.99,
    category: "specialty",
    image: "/ganaderia/ganaderia_0.jpg?height=300&width=300",
    rating: 4.1,
    inStock: true,
    featured: false,
  },
  {
    id: 10,
    name: "Grout Cleaner",
    description: "Restores grout lines to like-new condition",
    price: 13.99,
    category: "specialty",
    image: "/ganaderia/ganaderia_1.jpg?height=300&width=300",
    rating: 4.6,
    inStock: true,
    featured: false,
  },
  {
    id: 11,
    name: "Oven & Grill Cleaner",
    description: "Cuts through tough baked-on grease",
    price: 15.99,
    category: "kitchen",
    image: "/cocinas/cocinas_0.jpg?height=300&width=300",
    rating: 4.7,
    inStock: true,
    featured: true,
  },
  {
    id: 12,
    name: "Laundry Detergent",
    description: "Industrial-strength formula for tough stains",
    price: 18.99,
    category: "laundry",
    image: "/limpieza/limpieza_8.jpg?height=300&width=300",
    rating: 4.5,
    inStock: true,
    featured: false,
  },
]

// Categories for filtering
const categories = [
  { value: "all", label: "Todos los Productos" },
  { value: "all-purpose", label: "All-Purpose Cleaners" },
  { value: "industrial", label: "Industrial Cleaners" },
  { value: "glass", label: "Glass Cleaners" },
  { value: "floor", label: "Floor Cleaners" },
  { value: "bathroom", label: "Bathroom Cleaners" },
  { value: "kitchen", label: "Kitchen Cleaners" },
  { value: "specialty", label: "Specialty Cleaners" },
  { value: "disinfectant", label: "Disinfectants" },
  { value: "carpet", label: "Carpet Care" },
  { value: "laundry", label: "Laundry Products" },
]

export default function ProductsGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortOption, setSortOption] = useState("featured")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  // Filter products by category
  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      case "rating":
        return b.rating - a.rating
      case "featured":
      default:
        return b.featured ? 1 : -1
    }
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Products */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b">
            {/* Mobile Filter Button */}
            <Button
              variant="outline"
              className="lg:hidden flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>

            {/* View Mode Toggles */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="h-9 w-9"
              >
                <Grid className="h-4 w-4" />
                <span className="sr-only">Grid view</span>
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="h-9 w-9"
              >
                <List className="h-4 w-4" />
                <span className="sr-only">List view</span>
              </Button>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Ordenar por:</span>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Categoría</SelectItem>
                  <SelectItem value="price-low">Precio: Bajo a Alto</SelectItem>
                  <SelectItem value="price-high">Precio: Alto a Bajo</SelectItem>
                  <SelectItem value="name">Nombre</SelectItem>
                  <SelectItem value="rating">Valoración</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mobile Filters (Collapsible) */}
          {showFilters && (
            <div className="lg:hidden mb-6">
              <ProductFilters
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={(category) => {
                  setSelectedCategory(category)
                  setShowFilters(false)
                }}
              />
            </div>
          )}

          {/* Products Grid/List */}
          <div
            className={`
            ${viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}
          `}
          >
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found matching your criteria.</p>
              <Button variant="outline" className="mt-4" onClick={() => setSelectedCategory("all")}>
                View All Products
              </Button>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" disabled>
                Atras
              </Button>
              <Button variant="outline" className="bg-gray-100">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Siguiente</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

