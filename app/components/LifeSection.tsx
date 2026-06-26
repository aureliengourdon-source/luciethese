import Image from "next/image"

const anecdotes = [
  {
    icon: "🪸",
    title: "Dans la boue jusqu'aux hanches",
    text: "Évoluer dans les mangroves, c'est se déplacer entre des racines aériennes enchevêtrées comme sur des rochers, et s'enfoncer dans une vase noire et odorante à chaque pas. Pour Lucie, c'est le quotidien du terrain — et une source intarissable de fous rires.",
  },
  {
    icon: "🇧🇷",
    title: "Un mois sans parler français",
    text: "Installée à Piracicaba (São Paulo), Lucie est plongée dans la vie brésilienne au quotidien. Après quelques semaines, le portugais s'impose naturellement — au point de passer des journées entières sans prononcer un seul mot de français.",
  },
  {
    icon: "🍝",
    title: "La coloc et les 500 g de semoule",
    text: "Un soir à 23h, la colocataire de Lucie lui apporte fièrement 500 grammes de semoule sèche — comme s'il s'agissait d'un vrai repas. Un moment de pure complicité interculturelle, quelque part entre la solidarité et l'incompréhension culinaire.",
  },
  {
    icon: "⚽",
    title: "Coupe du Monde au Brésil",
    text: "Faire sa thèse au Brésil pendant la Coupe du Monde, c'est vivre dans un pays en effervescence permanente. Les rues, les universités, les cafés — tout s'arrête pour le football. Une ambiance unique qui rend cette expérience encore plus inoubliable.",
  },
]

export default function LifeSection() {
  return (
    <section id="vie" className="bg-ocean py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header row */}
        <div className="mb-14 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2
              className="font-serif text-white text-4xl font-bold sm:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              La vie de chercheuse
            </h2>
            <p className="font-serif italic text-white/60 mt-3 text-lg">
              En direct de Piracicaba
            </p>
          </div>

          {/* Round photo */}
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-leaf/40 shadow-xl self-center sm:self-start">
            <Image
              src="/Lucie avion Brésil.jpeg"
              alt="Lucie dans l'avion pour le Brésil"
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
        </div>

        {/* Anecdote cards */}
        <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {anecdotes.map((anecdote) => (
            <div
              key={anecdote.title}
              className="rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {anecdote.icon}
                </span>
                <h3 className="font-sans text-white font-bold text-base leading-snug">
                  {anecdote.title}
                </h3>
              </div>
              <p className="font-sans text-white/80 text-sm leading-relaxed">
                {anecdote.text}
              </p>
            </div>
          ))}
        </div>

        {/* En ce moment */}
        <div className="mb-8 rounded-xl border border-leaf/30 bg-white/5 px-6 py-5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-leaf animate-pulse" />
            <span className="font-sans text-leaf text-sm font-semibold uppercase" style={{ letterSpacing: "0.08em" }}>
              En ce moment
            </span>
          </div>
          <p className="font-sans text-white/90 text-sm leading-relaxed">
            Lucie est à <strong className="text-white">Piracicaba</strong> jusqu&apos;au <strong className="text-white">20 juillet 2026</strong> — partie de France le 29 mai.
            Un nouveau séjour au Brésil est prévu ensuite pour la suite du terrain.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-8">
          <p
            className="font-sans text-white/40 text-xs text-center leading-relaxed"
            style={{ letterSpacing: "0.04em" }}
          >
            Thèse financée par le CNRS · Projet TROPECOS · FairCarboN · ANR-22-PEXF-012
          </p>
        </div>
      </div>
    </section>
  )
}
