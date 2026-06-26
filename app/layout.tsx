import type { Metadata } from "next"
import { Lora, Inter } from "next/font/google"
import "./globals.css"

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lucie Gourdon — Thèse",
  description: "La thèse de Lucie Gourdon sur le stockage du carbone dans les écosystèmes de mangrove au Brésil.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${lora.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
