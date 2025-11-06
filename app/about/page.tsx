import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1
            className="text-5xl md:text-6xl font-bold mb-8 text-center"
            style={{ fontFamily: "Clash Display, sans-serif" }}
          >
            About FruitDryer
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              FruitDryer is where technology meets water. We design ultralight packraft gear that adapts to your
              adventures, merging nature-inspired design with cutting-edge materials.
            </p>

            <p>
              Our philosophy is simple:{" "}
              <strong className="text-foreground">Everything moves. Everything adapts.</strong> Just like water flows
              around obstacles, our gear morphs to fit your needs.
            </p>

            <p>
              From AI-optimized designs to explorer-tested durability, every product in our collection represents the
              future of portable adventure gear.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
