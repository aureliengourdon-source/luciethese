'use client'

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps"

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const locations = [
  {
    name: "Paris",
    label: "Sorbonne · IEES Paris",
    coordinates: [2.35, 48.86] as [number, number],
    type: "france",
    description:
      "Laboratoire IEES Paris, Sorbonne Université. Études en écologie des zones humides et dynamiques côtières.",
  },
  {
    name: "Piracicaba",
    label: "USP ESALQ · Laboratoire",
    coordinates: [-47.65, -22.73] as [number, number],
    type: "brazil",
    description:
      "École supérieure d'agriculture Luiz de Queiroz (ESALQ), Université de São Paulo. Analyses en écologie et biologie tropicale.",
  },
  {
    name: "Pará — Amazonie",
    label: "Salinopolis · Marapanim",
    coordinates: [-47.5, -0.65] as [number, number],
    type: "brazil",
    description:
      "Collecte d'échantillons dans les mangroves du littoral amazonien (Pará, nord du Brésil). Objectif : comparer avec d'autres régions du littoral brésilien pour comprendre comment le contexte géomorphologique influence le stockage du carbone.",
  },
]

// Paris → Pará and Paris → Piracicaba arcs
const arcLines = [
  {
    from: [2.35, 48.86] as [number, number],
    to: [-47.5, -0.65] as [number, number],
  },
  {
    from: [2.35, 48.86] as [number, number],
    to: [-47.65, -22.73] as [number, number],
  },
]

function countryColor(name: string): string {
  if (name === "France") return "#52b788"
  if (name === "Brazil") return "#52b788"
  return "#1e3a5f"
}

export default function WorldMap() {
  const [tooltip, setTooltip] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="carte"
      ref={sectionRef}
      className="bg-ocean w-full py-20 px-4"
      style={{ color: "white" }}
    >
      {/* Titles */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2
          className="font-serif text-4xl md:text-5xl font-bold mb-3"
          style={{ color: "white", letterSpacing: "-0.02em" }}
        >
          Paris → Brésil
        </h2>
        <p
          className="text-lg md:text-xl italic"
          style={{ color: "rgba(255,255,255,0.70)" }}
        >
          Entre deux hémisphères, une même question
        </p>
      </div>

      {/* Map */}
      <motion.div
        className="max-w-4xl mx-auto w-full relative"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <ComposableMap
          projectionConfig={{ scale: 140, center: [-20, 10] }}
          width={800}
          height={400}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name: string =
                  (geo.properties as { name?: string }).name ?? ""
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: countryColor(name),
                        stroke: "#0d2240",
                        strokeWidth: 0.4,
                        outline: "none",
                      },
                      hover: {
                        fill: countryColor(name),
                        stroke: "#0d2240",
                        strokeWidth: 0.4,
                        outline: "none",
                      },
                      pressed: {
                        fill: countryColor(name),
                        outline: "none",
                      },
                    }}
                  />
                )
              })
            }
          </Geographies>

          {/* Arc lines Paris → Brésil */}
          {arcLines.map((arc, i) => (
            <Line
              key={i}
              from={arc.from}
              to={arc.to}
              stroke="rgba(255,255,255,0.45)"
              strokeWidth={1.5}
              strokeDasharray="6 4"
              fill="transparent"
            />
          ))}

          {/* Markers */}
          {locations.map((loc) => (
            <Marker
              key={loc.name}
              coordinates={loc.coordinates}
              onMouseEnter={() => setTooltip(loc.name)}
              onMouseLeave={() => setTooltip(null)}
              onClick={() => setTooltip((prev) => (prev === loc.name ? null : loc.name))}
            >
              {/* Pulse ring */}
              <circle
                r={8}
                fill={loc.type === "france" ? "#52b788" : "#74c69d"}
                className="map-marker-pulse"
              />
              {/* Outer glow ring */}
              <circle
                r={tooltip === loc.name ? 9 : 7}
                fill="transparent"
                stroke="rgba(255,255,255,0.30)"
                strokeWidth={2}
                style={{ transition: "r 0.2s ease" }}
              />
              {/* Core dot */}
              <circle
                r={tooltip === loc.name ? 5 : 4}
                fill={loc.type === "france" ? "#52b788" : "#74c69d"}
                stroke="white"
                strokeWidth={1.5}
                style={{
                  cursor: "pointer",
                  transition: "r 0.2s ease",
                }}
              />
              {/* Label above marker */}
              <text
                textAnchor="middle"
                y={-14}
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "7px",
                  fill: "rgba(255,255,255,0.90)",
                  pointerEvents: "none",
                  fontWeight: 600,
                }}
              >
                {loc.label}
              </text>
            </Marker>
          ))}
        </ComposableMap>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 rounded-lg px-3 py-1.5 text-sm pointer-events-none"
            style={{
              background: "rgba(13,34,64,0.90)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(6px)",
            }}
          >
            {locations.find((l) => l.name === tooltip)?.label}
          </div>
        )}
      </motion.div>

      {/* Brazil mangrove distribution map */}
      <motion.div
        className="max-w-4xl mx-auto mt-14 px-2"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      >
        <p
          className="font-sans text-xs font-semibold text-white/40 uppercase mb-3 text-center"
          style={{ letterSpacing: "0.08em" }}
        >
          Distribution des mangroves le long du littoral brésilien
        </p>
        <div className="relative w-full rounded-xl overflow-hidden border border-white/10" style={{ aspectRatio: "4/3" }}>
          <Image
            src="/carte-mangroves-bresil.jpeg"
            alt="Carte climatique du Brésil montrant la distribution des mangroves (rouge) le long du littoral"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
        <p className="font-sans text-white/40 text-xs text-center mt-2">
          En rouge : zones de mangroves. L'objectif est de couvrir des sites contrastés du nord au sud du littoral.
        </p>
      </motion.div>

      {/* Location cards */}
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="rounded-xl p-5"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{
                  background: loc.type === "france" ? "#52b788" : "#74c69d",
                }}
              />
              <span
                className="font-serif font-semibold text-base"
                style={{ color: "white" }}
              >
                {loc.name}
              </span>
            </div>
            <p
              className="text-xs leading-relaxed mb-1 font-medium"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              {loc.label}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.80)" }}
            >
              {loc.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
