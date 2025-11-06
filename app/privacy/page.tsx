import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8" style={{ fontFamily: "Clash Display, sans-serif" }}>
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>Last updated: January 2025</p>

            <h2 className="text-2xl font-bold text-foreground mt-8">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including when you contact us or interact with our
              website.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">2. Cookies</h2>
            <p>
              We use cookies to enhance your experience and analyze website usage. By continuing to use our site, you
              consent to our use of cookies.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">3. Third-Party Services</h2>
            <p>
              We use Amazon Associates and other third-party services. These services may collect information as
              described in their respective privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">4. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at hello@fruitdryer.com.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
