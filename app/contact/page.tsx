import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1
            className="text-5xl md:text-6xl font-bold mb-8 text-center"
            style={{ fontFamily: "Clash Display, sans-serif" }}
          >
            Get in Touch
          </h1>

          <div className="bg-card border border-border rounded-3xl p-8">
            <p className="text-center text-muted-foreground mb-8 leading-relaxed">
              Have questions about our adaptive gear? Want to share your adventure stories? We'd love to hear from you.
            </p>

            <div className="space-y-4 text-center">
              <p className="text-lg">
                <strong className="text-foreground">Email:</strong>{" "}
                <a href="mailto:hello@fruitdryer.com" className="text-accent hover:underline">
                  hello@fruitdryer.com
                </a>
              </p>

              <p className="text-muted-foreground">We typically respond within 24-48 hours.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
