import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8" style={{ fontFamily: "Clash Display, sans-serif" }}>
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>Last updated: January 2025</p>

            <h2 className="text-2xl font-bold text-foreground mt-8">1. Acceptance of Terms</h2>
            <p>
              By accessing and using FruitDryer.com, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">2. Amazon Affiliate Disclosure</h2>
            <p>
              FruitDryer.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
              program designed to provide a means for sites to earn advertising fees by advertising and linking to
              Amazon.com.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">3. Product Information</h2>
            <p>
              We strive to provide accurate product information. However, specifications and availability may change
              without notice.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
