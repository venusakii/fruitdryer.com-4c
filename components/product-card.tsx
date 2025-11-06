"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="group"
    >
      <Link href={`/product/${product.slug}`}>
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border transition-all duration-500 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 animate-breathe">
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg mb-2 text-balance" style={{ fontFamily: "Clash Display, sans-serif" }}>
              {product.name}
            </h3>

            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < product.rating ? "fill-secondary text-secondary" : "text-muted"}
                />
              ))}
            </div>

            <div className="flex items-center justify-between">
              
              <span className="text-sm text-muted-foreground">{product.weight}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
