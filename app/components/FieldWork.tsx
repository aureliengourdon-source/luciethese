'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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

export default function FieldWork() {
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

        {/* Photo grid with quote in the middle */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Row 1: photos 0 & 1 */}
          {photos.slice(0, 2).map((photo) => (
            <motion.div
              key={photo.src}
              className="group relative aspect-square overflow-hidden rounded-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mangrove/90 to-transparent p-4">
                <p className="font-sans text-white/90 text-sm leading-snug">{photo.caption}</p>
              </div>
            </motion.div>
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

          {/* Row 2: photos 2 & 3 */}
          {photos.slice(2, 4).map((photo) => (
            <motion.div
              key={photo.src}
              className="group relative aspect-square overflow-hidden rounded-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mangrove/90 to-transparent p-4">
                <p className="font-sans text-white/90 text-sm leading-snug">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
