"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ArrowRight, Droplets, Zap, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CookieBanner />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-morph"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-full blur-3xl animate-morph"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl animate-morph"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.p
              className="text-accent text-sm md:text-base mb-4 tracking-wider uppercase"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Everything moves. Everything adapts.
            </motion.p>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Ultralight Packraft Gear.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-accent">
                Reimagined.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Smart accessories for water explorers and digital nomads.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-lg px-8 py-6 rounded-full transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-accent/50"
              >
                <Link href="/reviews">
                  Explore Gear <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-accent/30 rounded-2xl animate-float"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-secondary/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </section>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,0,224,0.05),transparent_70%)]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-balance"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Where Technology Meets Water
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              FruitDryer merges nature-inspired design with adaptive tech — building tools for the future of mobility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Clash Display, sans-serif" }}>
              Adaptive Gear Collection
            </h2>
            <p className="text-muted-foreground text-lg">Nine innovations that flow with your adventure</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 text-balance"
                style={{ fontFamily: "Clash Display, sans-serif" }}
              >
                Innovation on Water
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The future of portable gear is flexible. Our designs adapt to your needs, morphing between ultra-compact
                storage and full functionality.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 bg-transparent"
              >
                <Link href="/reviews">
                  Discover More <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 animate-morph" />
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Featured Product"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Clash Display, sans-serif" }}>
              The Morph Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Design inspired by AI",
                description: "Machine learning optimizes every curve and connection",
              },
              {
                icon: Droplets,
                title: "Tested by explorers",
                description: "Real-world conditions shape our innovations",
              },
              { icon: Shield, title: "Perfected by nature", description: "Biomimicry guides our adaptive solutions" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent to-primary rounded-3xl flex items-center justify-center animate-breathe"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Clash Display, sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(182,255,110,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Clash Display, sans-serif" }}>
              Voices from the Flow
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { quote: "Incredibly lightweight, fits anywhere.", author: "Alex Rivera" },
              { quote: "Feels like a living organism, not gear.", author: "Taro Kimura" },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-3xl p-8 animate-breathe"
              >
                <p className="text-lg mb-4 leading-relaxed text-balance">"{review.quote}"</p>
                <p className="text-accent font-semibold">– {review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary animate-morph" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2
              className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground text-balance"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Shape Your Next Adventure
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover how adaptive design redefines ultralight travel.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 rounded-full shadow-2xl animate-breathe"
              >
                <Link href="/reviews">
                  Explore Collection <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
