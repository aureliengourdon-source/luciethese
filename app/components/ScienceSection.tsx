'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Mode = 'novice' | 'expert'
type GlossaryTerm = 'MAOM' | 'MAOC' | 'POM' | 'Blue Carbon' | 'SOC' | 'Redox' | 'Anoxie'

const GLOSSARY_TERMS: GlossaryTerm[] = [
  'MAOM',
  'MAOC',
  'POM',
  'Blue Carbon',
  'SOC',
  'Redox',
  'Anoxie',
]

const glossaryDefs: Record<GlossaryTerm, string> = {
  MAOM: "Matière Organique Associée aux Minéraux. Fraction du sol <53µm liée physiquement aux surfaces minérales (Fe, Mn, Al, argiles). Pool stable sur des siècles à millénaires.",
  MAOC: "Mineral-Associated Organic Carbon. La fraction carbone du MAOM.",
  POM: "Particulate Organic Matter. Débris végétaux >53µm, facilement dégradables. Pool dynamique.",
  "Blue Carbon": "Carbone stocké dans les écosystèmes côtiers (mangroves, herbiers, marais salants).",
  SOC: "Soil Organic Carbon. Carbone organique total du sol.",
  Redox: "Conditions d'oxydoréduction. Dans les mangroves, les cycles de marée créent des alternances oxique/anoxique qui influencent la décomposition de la MO.",
  Anoxie: "Absence d'oxygène. Ralentit la décomposition microbienne et favorise le stockage du carbone.",
}

interface NoviceBlock {
  title: string
  text: string
  badge?: string
  note?: string
  progress?: boolean
}

const noviceBlocks: NoviceBlock[] = [
  {
    title: "C'est quoi le carbone bleu ?",
    text: "Imagine une éponge géante sous la mer. Les mangroves agissent comme cette éponge : elles absorbent le CO₂ de l'air, le transforment en matière organique, et l'enfouissent dans leurs sols pour des millénaires.",
    badge: "10× plus rapide que les forêts terrestres pour capter le carbone",
  },
  {
    title: "Qu'est-ce que Lucie cherche exactement ?",
    text: "Imagine le sol d'une mangrove comme un millefeuille de boue. Lucie veut savoir dans quelle couche le carbone se cache, et pourquoi il y reste piégé plutôt que de repartir dans l'air.",
    badge: ">75 % du carbone stocké sous terre",
  },
  {
    title: "Mais ce carbone reste-t-il vraiment là ?",
    text: "Bonne question — et c'est justement ce qu'on ne sait pas encore bien. Pour les forêts terrestres, les mécanismes sont bien connus. Mais pour les mangroves et les autres écosystèmes côtiers, la science est encore jeune. Est-ce que ce carbone reste piégé des millénaires, ou peut-il repartir dans l'atmosphère si les conditions changent ? C'est une des grandes questions que Lucie contribue à éclairer.",
    badge: "Lacune majeure : la permanence du carbone bleu reste à démontrer",
  },
  {
    title: "Où en est-elle ?",
    text: "📚 Revue de littérature — Chapitre 1 terminé et présenté au symposium international SOM 2026 à São Paulo. Elle analyse actuellement les échantillons déjà collectés dans les mangroves d'Amazonie.",
    note: "Objectif : comparer des sites de différentes régions du littoral brésilien (nord → sud)",
    progress: true,
  },
]

const expertFindings: string[] = [
  "Le ratio MAOC/SOC croît avec la salinité (toutes BCEs confondues)",
  "Plus élevé en profondeur (>40 cm) qu'en surface (0-20 cm)",
  "Les mangroves présentent la plus forte variabilité vs mudflats et marais salants",
  "Surreprésentation des études chinoises (>80 % des mesures)",
  "Manque de données sur les herbiers marins",
  "Question ouverte : la séquestration du carbone est-elle vraiment pérenne dans ces sols ? Les mécanismes sont bien documentés pour les écosystèmes terrestres — bien moins pour les blue carbon.",
]

const fadeWait = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.28, ease: 'easeInOut' as const },
}

export default function ScienceSection() {
  const [mode, setMode] = useState<Mode>('novice')
  const [activeTerm, setActiveTerm] = useState<GlossaryTerm | null>(null)

  const handleTermClick = (term: GlossaryTerm) => {
    setActiveTerm((prev) => (prev === term ? null : term))
  }

  return (
    <section className="bg-sand py-24 px-6">
      <div className="mx-auto max-w-5xl">

        {/* ── Header ── */}
        <div className="mb-14 flex flex-col items-center gap-8 text-center">
          <h2
            className="font-serif text-mangrove text-4xl font-bold sm:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Comprendre sa recherche
          </h2>

          {/* Toggle pill */}
          <div className="inline-flex rounded-full bg-white border border-mangrove/20 p-1 shadow-sm gap-1">
            {(['novice', 'expert'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={
                  mode === m
                    ? 'rounded-full px-6 py-2 font-sans text-sm font-semibold bg-mangrove text-white transition-colors duration-200'
                    : 'rounded-full px-6 py-2 font-sans text-sm font-semibold bg-white text-mangrove border border-mangrove transition-colors duration-200'
                }
              >
                {m === 'novice' ? 'Novice' : 'Expert'}
              </button>
            ))}
          </div>
        </div>

        {/* ── Mode content ── */}
        <AnimatePresence mode="wait">
          {mode === 'novice' ? (
            <motion.div key="novice" {...fadeWait}>

              {/* 2×2 grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {noviceBlocks.map((block) => (
                  <div
                    key={block.title}
                    className="rounded-xl bg-white border border-leaf/30 p-6 shadow-sm flex flex-col gap-3"
                  >
                    <h3
                      className="font-serif text-mangrove text-xl font-semibold"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {block.title}
                    </h3>

                    {block.progress && (
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="font-sans text-xs font-semibold text-mangrove">Avancement</span>
                          <span className="font-sans text-xs font-bold text-leaf">5 %</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-mist">
                          <div className="h-2 rounded-full bg-leaf" style={{ width: '5%' }} />
                        </div>
                      </div>
                    )}

                    <p className="font-sans text-earth/90 text-sm leading-relaxed">
                      {block.text}
                    </p>

                    {block.badge && (
                      <span className="self-start inline-flex items-center rounded-full bg-leaf/15 border border-leaf/30 px-3 py-1 font-sans text-xs font-semibold text-leaf">
                        {block.badge}
                      </span>
                    )}

                    {block.note && (
                      <p className="font-sans text-earth/60 text-xs italic">
                        {block.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>

            </motion.div>
          ) : (
            <motion.div key="expert" {...fadeWait}>

              {/* 2-column expert layout */}
              <div className="rounded-2xl bg-mist p-8 grid grid-cols-1 gap-8 lg:grid-cols-2">

                {/* Left — scientific question + pools */}
                <div className="flex flex-col gap-5">
                  <div>
                    <h3
                      className="font-serif text-mangrove text-xl font-semibold mb-4"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      La question scientifique
                    </h3>
                    <blockquote className="border-l-4 border-leaf pl-4 font-sans text-sm text-mangrove/75 italic leading-relaxed">
                      Comment la récalcitrance de la matière organique, les conditions redox, la
                      dynamique microbienne et la géomorphologie interagissent-ils pour contrôler
                      la stabilisation du carbone dans les mangroves ?
                    </blockquote>
                  </div>

                  <div>
                    <h4
                      className="font-sans text-xs font-semibold text-earth uppercase mb-3"
                      style={{ letterSpacing: '0.07em' }}
                    >
                      Les deux pools de carbone
                    </h4>

                    <div className="flex flex-col gap-3">
                      {/* MAOM */}
                      <div className="rounded-lg bg-white/80 border border-leaf/20 p-4 flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 rounded-full bg-mangrove px-2 py-0.5 font-sans text-xs font-bold text-white">
                          MAOM
                        </span>
                        <div>
                          <p className="font-sans text-xs font-semibold text-mangrove mb-1">
                            Mineral-Associated Organic Matter
                          </p>
                          <p className="font-sans text-xs text-earth/80 leading-relaxed">
                            {"Densité >1,6 g/cm³, fractionné par taille <53µm. Lié aux minéraux Fe/Mn/Al/argiles. Turnover de "}
                            <strong>siècles à millénaires</strong>
                            {" — pool stable."}
                          </p>
                        </div>
                      </div>

                      {/* POM */}
                      <div className="rounded-lg bg-white/80 border border-leaf/20 p-4 flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 rounded-full bg-earth px-2 py-0.5 font-sans text-xs font-bold text-white">
                          POM
                        </span>
                        <div>
                          <p className="font-sans text-xs font-semibold text-mangrove mb-1">
                            Particulate Organic Matter
                          </p>
                          <p className="font-sans text-xs text-earth/80 leading-relaxed">
                            {"Densité <1,6 g/cm³, fractionné par taille >53µm. Débris végétaux facilement décomposables. Turnover "}
                            <strong>{"d'années à décennies"}</strong>
                            {" — pool dynamique."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-earth/50 mt-auto">
                    Financement : CNRS + TROPECOS (PEPR FairCarboN, ANR-22-PEXF-012)
                  </p>
                </div>

                {/* Right — preliminary results */}
                <div className="flex flex-col gap-4">
                  <div>
                    <h3
                      className="font-serif text-mangrove text-xl font-semibold mb-1"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      Résultats préliminaires
                    </h3>
                    <p className="font-sans text-xs text-earth/60">
                      Revue systématique — Chapitre 1 : 806 articles → 35 retenus → 636 mesures MAOC
                    </p>
                  </div>

                  <ul className="flex flex-col gap-3 mt-2">
                    {expertFindings.map((finding) => (
                      <li
                        key={finding}
                        className="flex items-start gap-3 font-sans text-sm text-mangrove/80 leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                        {finding}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Glossary ── */}
        <div className="mt-14 border-t border-mangrove/10 pt-8">
          <p
            className="font-sans text-xs font-semibold text-earth/50 uppercase mb-4"
            style={{ letterSpacing: '0.08em' }}
          >
            Glossaire
          </p>

          <div className="flex flex-wrap gap-2">
            {GLOSSARY_TERMS.map((term) => (
              <button
                key={term}
                onClick={() => handleTermClick(term)}
                className={
                  activeTerm === term
                    ? 'rounded-full px-3 py-1 font-sans text-xs font-semibold bg-mangrove text-white transition-colors duration-150'
                    : 'rounded-full px-3 py-1 font-sans text-xs font-semibold bg-white text-mangrove border border-mangrove/30 hover:border-mangrove/70 transition-colors duration-150'
                }
              >
                {term}
              </button>
            ))}
          </div>

          {/* Definition card */}
          <AnimatePresence>
            {activeTerm && (
              <motion.div
                key={activeTerm}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="mt-4 max-w-lg rounded-xl bg-mangrove p-4 shadow-lg"
              >
                <p
                  className="font-sans text-xs font-bold uppercase text-leaf mb-1"
                  style={{ letterSpacing: '0.07em' }}
                >
                  {activeTerm}
                </p>
                <p className="font-sans text-sm text-white/90 leading-relaxed">
                  {glossaryDefs[activeTerm]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
