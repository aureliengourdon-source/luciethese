'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const photos = [
  {
    src: '/Lucie Mangroves Brésilienne 2.jpeg',
    alt: "Lucie et l'équipe brésilienne avec une carotte de sol",
    caption: "Extraction d'une carotte de sol avec l'équipe brésilienne",
  },
  {
    src: '/Lucie Mangroves Brésilienne 3.jpeg',
    alt: 'Une carotte de sol posée sur le sol de la mangrove',
    caption: "Une carotte de sol — 1 mètre d'histoire géochimique",
  },
  {
    src: '/Lucie Mangroves Brésilienne 4.jpeg',
    alt: 'Lucie debout dans les racines aériennes',
    caption: 'Dans les racines aériennes, Pará, Brésil',
  },
  {
    src: '/Lucie SOM.jpeg',
    alt: 'Lucie devant le panneau du Symposium SOM 2026',
    caption: '10e Symposium International sur la Matière Organique des Sols, São Paulo 2026',
  },
]

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const photo = photos[index]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{ background: 'rgba(13, 34, 64, 0.96)', backdropFilter: 'blur(8px)' }}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 z-10 rounded-full p-2 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Fermer"
      >
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        className="absolute left-3 sm:left-6 z-10 rounded-full border border-white/20 bg-white/10 p-3 text-white/80 hover:text-white hover:bg-white/20 transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Photo précédente"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next */}
      <button
        className="absolute right-3 sm:right-6 z-10 rounded-full border border-white/20 bg-white/10 p-3 text-white/80 hover:text-white hover:bg-white/20 transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Photo suivante"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image */}
      <motion.div
        key={index}
        className="relative mx-16 sm:mx-24 max-h-[80vh] w-full max-w-3xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        style={{ aspectRatio: '4/3' }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-contain rounded-lg"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </motion.div>

      {/* Caption + counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-4">
        <p className="font-sans text-white/80 text-sm mb-1">{photo.caption}</p>
        <p className="font-sans text-white/40 text-xs">
          {index + 1} / {photos.length}
        </p>
      </div>
    </motion.div>,
    document.body
  )
}

export default function FieldWork() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prevPhoto = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length))
  const nextPhoto = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % photos.length))

  return (
    <section id="terrain" className="bg-mangrove py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14">
          <h2
            className="font-serif text-white text-4xl font-bold sm:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Sur le terrain
          </h2>
          <p className="font-serif italic text-white/60 mt-3 text-lg">
            Pará, nord du Brésil — mangroves de Salinopolis et Marapanim
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {photos.slice(0, 2).map((photo, i) => (
            <motion.button
              key={photo.src}
              className="group relative aspect-square overflow-hidden rounded-xl text-left w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={() => openLightbox(i)}
              aria-label={`Agrandir : ${photo.caption}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mangrove/90 to-transparent p-4">
                <p className="font-sans text-white/90 text-sm leading-snug">{photo.caption}</p>
              </div>
              {/* Expand hint */}
              <div className="absolute top-3 right-3 rounded-full bg-black/30 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
            </motion.button>
          ))}

          {/* Quote — full width */}
          <div className="md:col-span-2">
            <blockquote className="relative rounded-xl border border-leaf/30 bg-white/5 px-8 py-7 backdrop-blur-sm">
              <span
                className="absolute top-4 left-5 font-serif text-5xl text-leaf/40 leading-none select-none"
                aria-hidden="true"
              >
                "
              </span>
              <p className="font-serif italic text-white/90 text-xl sm:text-2xl leading-relaxed pl-6">
                La vase est partout, on peut s'enfoncer jusqu'aux hanches — et c'est pour ça que
                j'adore ça.
              </p>
              <footer className="mt-4 pl-6">
                <span className="font-sans text-leaf text-sm font-medium">— Lucie Gourdon</span>
              </footer>
            </blockquote>
          </div>

          {photos.slice(2, 4).map((photo, i) => (
            <motion.button
              key={photo.src}
              className="group relative aspect-square overflow-hidden rounded-xl text-left w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={() => openLightbox(i + 2)}
              aria-label={`Agrandir : ${photo.caption}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mangrove/90 to-transparent p-4">
                <p className="font-sans text-white/90 text-sm leading-snug">{photo.caption}</p>
              </div>
              <div className="absolute top-3 right-3 rounded-full bg-black/30 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
