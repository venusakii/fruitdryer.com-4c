"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [priceRange, setPriceRange] = useState<number[]>([0, 100])
  const [minRating, setMinRating] = useState<number>(0)

  const categories = ["all", "paddle", "bag", "repair", "storage", "pump", "solar", "mount", "seat"]

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === "all" || product.category === selectedCategory
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
      const ratingMatch = product.rating >= minRating
      return categoryMatch && priceMatch && ratingMatch
    })
  }, [selectedCategory, priceRange, minRating])

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "Clash Display, sans-serif" }}>
              Adaptive Gear Collection
            </h1>
            <p className="text-xl text-muted-foreground">{filteredProducts.length} products flowing with innovation</p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-3xl p-6 space-y-8">
                {/* Category Filter */}
                <div>
                  <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "Clash Display, sans-serif" }}>
                    Category
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <motion.button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full text-left px-4 py-2 rounded-xl transition-all duration-300 ${
                          selectedCategory === category
                            ? "bg-gradient-to-r from-accent to-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                

                {/* Rating Filter */}
                <div>
                  <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "Clash Display, sans-serif" }}>
                    Minimum Rating
                  </h3>
                  <div className="space-y-2">
                    {[0, 3, 4, 5].map((rating) => (
                      <motion.button
                        key={rating}
                        onClick={() => setMinRating(rating)}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full text-left px-4 py-2 rounded-xl transition-all duration-300 ${
                          minRating === rating
                            ? "bg-gradient-to-r from-accent to-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        {rating === 0 ? "All Ratings" : `${rating}+ Stars`}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Reset Button */}
                <Button
                  onClick={() => {
                    setSelectedCategory("all")
                    setPriceRange([0, 100])
                    setMinRating(0)
                  }}
                  variant="outline"
                  className="w-full rounded-xl"
                >
                  Reset Filters
                </Button>
              </div>
            </motion.aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                  <p className="text-xl text-muted-foreground">
                    No products match your filters. Try adjusting your selection.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
