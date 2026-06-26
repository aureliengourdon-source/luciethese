const cards = [
  {
    emoji: "🍃",
    title: "Le carbone bleu",
    text: "Quand les plantes poussent, elles capturent le CO₂ de l'air. Dans les milieux côtiers comme les mangroves, ce carbone s'accumule dans le sol et y reste des millénaires — on l'appelle le carbone bleu. C'est un allié discret mais puissant contre le changement climatique.",
  },
  {
    emoji: "🌿",
    title: "Les mangroves",
    text: "Les mangroves sont des forêts côtières tropicales qui poussent les pieds dans l'eau salée. Elles séquestrent le carbone 10 fois plus vite que les forêts terrestres et abritent une biodiversité remarquable. Plus de 75 % de leur carbone est stocké dans leur sol, parfois sur plusieurs mètres de profondeur.",
  },
  {
    emoji: "🔬",
    title: "La question de Lucie",
    text: "Comment le carbone se lie-t-il aux particules minérales du sol des mangroves ? Lucie étudie le MAOC — le carbone organique associé aux minéraux — dans des sols prélevés au nord du Brésil. Comprendre ce mécanisme permet de mieux protéger ces réservoirs naturels de carbone.",
  },
]

const timeline = [
  { date: "Janvier 2026", label: "Début de la thèse", icon: "🎓" },
  { date: "2026 – 2028", label: "Terrain au Brésil & analyses", icon: "🌎" },
  { date: "Jan – Mars 2029", label: "Soutenance", icon: "🏆" },
]

export default function ThesisSection() {
  return (
    <section className="bg-sand py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <h2
            className="font-serif text-mangrove mb-5 text-4xl font-bold sm:text-5xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            La thèse en quelques mots
          </h2>
          <p className="font-sans text-earth text-lg leading-relaxed">
            Les mangroves brésiliennes sont parmi les écosystèmes les plus efficaces de la planète
            pour stocker du carbone. Lucie part à leur rencontre — dans la boue, les racines et les
            profondeurs du sol — pour comprendre comment ce carbone est capturé et conservé. Une
            question scientifique qui compte pour le climat, et une aventure humaine unique.
          </p>
        </div>

        {/* Cards */}
        <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border-l-4 border-leaf bg-white p-6 shadow-sm"
            >
              <span className="mb-3 block text-3xl" aria-hidden="true">
                {card.emoji}
              </span>
              <h3 className="font-serif text-mangrove mb-3 text-xl font-semibold">
                {card.title}
              </h3>
              <p className="font-sans text-earth/90 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <h3
            className="font-serif text-mangrove mb-10 text-2xl font-semibold"
            style={{ letterSpacing: "-0.03em" }}
          >
            Les grandes étapes
          </h3>
          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-0">
            {/* Horizontal line — visible on desktop */}
            <div className="absolute top-5 hidden h-px w-full bg-leaf/30 sm:block" />

            {timeline.map((step) => (
              <div
                key={step.date}
                className="relative flex flex-1 flex-col items-center text-center"
              >
                {/* Dot */}
                <div className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-white text-lg shadow-md">
                  <span>{step.icon}</span>
                </div>
                <span
                  className="font-sans text-earth text-xs font-semibold uppercase mb-1"
                  style={{ letterSpacing: "0.06em" }}
                >
                  {step.date}
                </span>
                <span className="font-sans text-mangrove text-sm font-medium">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
