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
  metadataBase: new URL("https://these-lucie.vercel.app"),
  title: "Lucie Gourdon — Thèse",
  description:
    "Lucie Gourdon, doctorante Sorbonne × USP São Paulo, étudie comment le carbone se stocke pour des millénaires dans les mangroves brésiliennes.",
  openGraph: {
    title: "La thèse de Lucie — Carbone bleu & mangroves brésiliennes",
    description:
      "Lucie Gourdon, doctorante Sorbonne × USP São Paulo, étudie comment le carbone se stocke pour des millénaires dans les mangroves brésiliennes.",
    images: [
      {
        url: "/Lucie Mangroves Brésilienne.jpeg",
        width: 1200,
        height: 800,
        alt: "Lucie dans les mangroves brésiliennes",
      },
    ],
    type: "website",
    locale: "fr_FR",
    siteName: "La thèse de Lucie",
  },
  twitter: {
    card: "summary_large_image",
    title: "La thèse de Lucie — Carbone bleu & mangroves brésiliennes",
    description: "Lucie Gourdon, doctorante Sorbonne × USP São Paulo.",
    images: ["/Lucie Mangroves Brésilienne.jpeg"],
  },
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
