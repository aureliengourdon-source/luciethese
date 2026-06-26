'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const links = [
  { label: "La thèse", href: "#these" },
  { label: "Terrain", href: "#terrain" },
  { label: "Travaux", href: "#travaux" },
  { label: "Contact", href: "#vie" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-mangrove/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / title */}
        <a
          href="#"
          className="font-serif text-white text-base font-medium tracking-wide hover:text-white/80 transition-colors"
        >
          Lucie Gourdon
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-white/80 hover:text-white transition-colors duration-200"
              style={{ letterSpacing: "0.02em" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
