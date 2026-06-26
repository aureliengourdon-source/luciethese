'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Lucie Mangroves Brésilienne.jpeg"
          alt="Lucie dans les mangroves brésiliennes"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient overlay — sombre en bas, transparent en haut */}
      <div className="absolute inset-0 bg-gradient-to-t from-mangrove/95 via-mangrove/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 pb-36">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <span className="inline-flex items-center self-start rounded-full border border-leaf/40 bg-leaf/15 px-4 py-1.5 text-sm font-sans font-medium text-leaf backdrop-blur-sm">
            Sorbonne · USP São Paulo
          </span>

          {/* Title */}
          <h1
            className="font-serif text-white text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.05]"
            style={{ letterSpacing: '-0.03em' }}
          >
            La thèse<br />de Lucie
          </h1>

          {/* Subtitle */}
          <p className="font-serif italic text-white/70 text-xl sm:text-2xl">
            Carbone bleu et mangroves brésiliennes
          </p>

          {/* Stat cards */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            {[
              {
                value: "10×",
                label: "plus vite qu'une forêt terrestre pour capter le carbone",
                delay: 0.2,
              },
              {
                value: ">75%",
                label: "du stock de carbone stocké sous terre",
                delay: 0.3,
              },
              {
                value: "Millénaires",
                label: "durée de conservation du carbone dans les sols",
                delay: 0.4,
              },
            ].map((stat) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: stat.delay, ease: "easeOut" }}
                className="flex flex-col gap-1 rounded-2xl border border-white/15 bg-white/15 backdrop-blur-md px-5 py-4 flex-1"
              >
                <span className="font-serif text-white text-2xl font-bold leading-none">
                  {stat.value}
                </span>
                <span className="font-sans text-white/70 text-xs leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span
          className="font-sans text-xs uppercase text-white/50"
          style={{ letterSpacing: '0.12em' }}
        >
          Découvrir
        </span>
        <svg
          className="h-5 w-5 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  )
}
