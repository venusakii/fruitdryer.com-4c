import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary/80 text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(182,255,110,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(74,0,224,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "Clash Display, sans-serif" }}>
              FruitDryer
            </h3>
            <p className="text-sm text-primary-foreground/80">Everything moves. Everything adapts.</p>
          </div>

          

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-secondary transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-secondary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">Join the flow of innovation</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                IG
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                TW
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="YouTube">
                YT
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-sm text-center text-primary-foreground/80">
          <p className="mb-2">© 2025 FruitDryer.com — All Rights Reserved.</p>
          <p>🛒 Amazon Affiliate Partner — As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
