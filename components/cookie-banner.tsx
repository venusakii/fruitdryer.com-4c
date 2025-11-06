"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-card border border-border rounded-3xl p-6 shadow-2xl backdrop-blur-lg animate-breathe">
            <p className="text-sm text-foreground mb-4 leading-relaxed">
              This website uses cookies to enhance your experience and analyze usage. By continuing, you consent to our
              use of cookies.
            </p>
            <Button
              onClick={acceptCookies}
              className="w-full bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent transition-all duration-300"
            >
              Accept Flow 🌊
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
