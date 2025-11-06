"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!product) {
    notFound()
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link href="/reviews" className="text-accent hover:underline">
              ← Back to Products
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted">
                <img
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    null
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Details */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div>
                <h1
                  className="text-4xl md:text-5xl font-bold mb-4 text-balance"
                  style={{ fontFamily: "Clash Display, sans-serif" }}
                >
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < product.rating ? "fill-secondary text-secondary" : "text-muted"}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">({product.rating}.0)</span>
                </div>

                

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{product.description}</p>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-lg py-6 rounded-full transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-accent/50"
                >
                  <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                    Buy on Amazon <ExternalLink className="ml-2" />
                  </a>
                </Button>
              </div>

              {/* Specs */}
              <div className="bg-card border border-border rounded-3xl p-6">
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Clash Display, sans-serif" }}>
                  Specs at a Glance
                </h2>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Material</dt>
                    <dd className="font-semibold">{product.specs.material}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Dimensions</dt>
                    <dd className="font-semibold">{product.specs.dimensions}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Weight</dt>
                    <dd className="font-semibold">{product.specs.weight}</dd>
                  </div>
                  {product.specs.capacity && (
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Capacity</dt>
                      <dd className="font-semibold">{product.specs.capacity}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Features */}
              <div className="bg-card border border-border rounded-3xl p-6">
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Clash Display, sans-serif" }}>
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-accent mt-1">✓</span>
                      <span className="leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
