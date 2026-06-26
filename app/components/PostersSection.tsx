"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

type ReadLevel = "10s" | "1min" | "5min"

const posters = [
  {
    venue: "10e Symposium International SOM",
    location: "São Paulo, 2026",
    description:
      "Revue quantitative du carbone organique associé aux minéraux dans les écosystèmes de carbone bleu — synthèse de 806 articles, 35 études retenues, 636 mesures analysées.",
    href: "/SOM_Poster_Lucie_Gourdon.pdf",
    previews: {
      "10s": "Première méta-analyse mondiale du carbone lié aux minéraux dans les écosystèmes côtiers : les mangroves stockent moins que les mudflats, mais varient bien plus.",
      "1min": [
        "Les écosystèmes de carbone bleu (mangroves, marais salants, herbiers) séquestrent le carbone pour des millénaires, mais les mécanismes de stabilisation restent mal compris.",
        "Sur 806 articles, seulement 35 rapportent des données MAOC exploitables (636 mesures) — le sujet est fortement sous-étudié, avec plus de 80 % des mesures venant de Chine.",
        "Résultat clé : le ratio MAOC/SOC augmente avec la salinité et est plus élevé en profondeur (>40 cm). La salinité apparaît comme un facteur déterminant du stockage à long terme.",
      ],
      "5min":
        "La thèse commence par une question simple : sait-on vraiment comment le carbone se stabilise dans les sols côtiers ? Pour y répondre, Lucie a réalisé une revue systématique de littérature. Sur 806 articles issus de Scopus et Web of Science, 35 seulement contenaient des données sur le MAOC (Mineral-Associated Organic Carbon) — soit 636 mesures exploitables. Premier constat : le sujet est dramatiquement sous-représenté, avec une surreprésentation des études chinoises. Deuxième constat : les mangroves présentent les valeurs MAOC les plus faibles, mais la variabilité la plus forte — ce qui suggère que les conditions locales (géomorphologie, salinité, végétation) jouent un rôle décisif. Troisième constat : le ratio MAOC/SOC augmente avec la salinité et est systématiquement plus élevé dans les couches profondes (>40 cm). Ces résultats valident les deux hypothèses de départ et orientent la suite : aller mesurer directement sur le terrain brésilien ce que la littérature ne peut pas encore expliquer.",
    },
  },
  {
    venue: "Journée des Doctorants",
    location: "IEES Paris · CNRS",
    description:
      "Facteurs lithoclimatiques et procédés microbiens impliqués dans le stockage de carbone dans les mangroves du Brésil — une approche intégrant terrain et méta-analyse.",
    href: "/poster JDD.pdf",
    previews: {
      "10s": "Comment les conditions géographiques et climatiques du Brésil influencent-elles le stockage du carbone dans les mangroves ? Lucie part le mesurer directement dans la boue.",
      "1min": [
        "Les mangroves séquestrent le carbone 10 fois plus vite que les forêts terrestres, mais les mécanismes restent obscurs — surtout dans les contextes géomorphologiques variés du littoral brésilien.",
        "Lucie prélève des carottes de sol de plus d'un mètre de profondeur dans le Pará (nord Brésil), le long de gradients de salinité et dans plusieurs configurations géomorphologiques contrastées.",
        "L'objectif : identifier quelle fraction du carbone est liée aux minéraux (MAOC) et comment les conditions locales — salinité, dynamique redox, microbiologie — contrôlent ce stockage.",
      ],
      "5min":
        "Ce poster présente le cadre global de la thèse : pourquoi les mangroves, pourquoi le Brésil, et pourquoi se concentrer sur le MAOC. Les mangroves brésiliennes sont parmi les plus étendues au monde, mais elles sont aussi extrêmement menacées. Plus de 75 % de leur stock de carbone est stocké sous terre, sous forme de MAOM (Mineral-Associated Organic Matter) et de POM (Particulate Organic Matter). Le MAOM — lié physiquement aux surfaces minérales (Fe, Mn, Al, argiles) — est le pool stable, avec un turnover de siècles à millénaires. Le POM est dynamique et rapidement dégradable. La question centrale : comment la récalcitrance de la matière organique, les conditions redox, la dynamique microbienne et la géomorphologie interagissent-ils pour contrôler la stabilisation du carbone ? Pour y répondre, Lucie collecte des carottes de plus d'1 mètre dans deux contextes contrastés du Pará (Salinopolis, Marapanim), le long de gradients de salinité. Les analyses en laboratoire à l'USP ESALQ (Piracicaba) permettront de quantifier le MAOC, caractériser les minéraux, et évaluer l'activité microbienne. Une comparaison avec des échantillons du Vietnam est également prévue.",
    },
  },
]

function DocumentIcon() {
  return (
    <svg
      className="h-8 w-8 text-mangrove"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  )
}

const levelLabels: Record<ReadLevel, string> = {
  "10s": "En 10 secondes",
  "1min": "En 1 minute",
  "5min": "En 5 minutes",
}

function PosterCard({ poster }: { poster: typeof posters[0] }) {
  const [activeLevel, setActiveLevel] = useState<ReadLevel | null>(null)

  return (
    <div className="flex flex-col rounded-xl bg-white p-5 sm:p-7 shadow-md">
      <div className="mb-5">
        <DocumentIcon />
      </div>

      <div className="mb-4">
        <h3 className="font-serif text-mangrove text-xl font-bold leading-snug">
          {poster.venue}
        </h3>
        <p className="font-sans text-earth/80 text-sm mt-1">{poster.location}</p>
      </div>

      <p className="font-sans text-earth/90 text-sm leading-relaxed flex-1 mb-6">
        {poster.description}
      </p>

      {/* Quick read buttons */}
      <div className="mb-5">
        <p className="font-sans text-earth/60 text-xs uppercase font-semibold mb-3" style={{ letterSpacing: "0.08em" }}>
          Aperçu rapide
        </p>
        <div className="flex gap-2 flex-wrap">
          {(["10s", "1min", "5min"] as ReadLevel[]).map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(activeLevel === level ? null : level)}
              className={`rounded-full px-3 py-1.5 font-sans text-xs font-semibold transition-all duration-200 border ${
                activeLevel === level
                  ? "bg-mangrove text-white border-mangrove"
                  : "bg-white text-mangrove border-mangrove/40 hover:border-mangrove"
              }`}
            >
              {levelLabels[level]}
            </button>
          ))}
        </div>
      </div>

      {/* Expandable preview */}
      <AnimatePresence mode="wait">
        {activeLevel && (
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mb-6 rounded-lg bg-mist border-l-4 border-leaf p-4">
              {activeLevel === "10s" && (
                <p className="font-sans text-mangrove text-sm leading-relaxed font-medium italic">
                  {poster.previews["10s"]}
                </p>
              )}
              {activeLevel === "1min" && (
                <ul className="space-y-2.5">
                  {poster.previews["1min"].map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/30 font-sans text-xs font-bold text-mangrove">
                        {i + 1}
                      </span>
                      <p className="font-sans text-earth/90 text-sm leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              )}
              {activeLevel === "5min" && (
                <p className="font-sans text-earth/90 text-sm leading-relaxed">
                  {poster.previews["5min"]}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA button */}
      <a
        href={poster.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 self-start rounded-lg border-2 border-mangrove px-5 py-2.5 font-sans text-sm font-semibold text-mangrove transition-colors duration-200 hover:bg-mangrove hover:text-white mt-auto"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        Voir le poster complet
      </a>
    </div>
  )
}

export default function PostersSection() {
  return (
    <section id="travaux" className="bg-mist py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="font-sans text-leaf text-sm font-semibold uppercase mb-2" style={{ letterSpacing: "0.1em" }}>
            Communications scientifiques
          </p>
          <h2 className="font-serif text-mangrove text-4xl font-bold sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Travaux publiés
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {posters.map((poster) => (
            <PosterCard key={poster.href} poster={poster} />
          ))}
        </div>
      </div>
    </section>
  )
}
