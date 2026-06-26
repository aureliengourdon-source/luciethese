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
    text: "On sait que les mangroves stockent du carbone — mais est-ce vraiment pérenne ? Contrairement aux écosystèmes terrestres, on connaît encore peu les mécanismes qui stabilisent ce carbone dans les sols côtiers. Lucie étudie le MAOC sur des échantillons prélevés à travers le littoral brésilien pour commencer à répondre.",
  },
]

const timeline = [
  { date: "Janvier 2026", label: "Début de la thèse", icon: "🎓" },
  { date: "2026 – 2028", label: "Terrain au Brésil & analyses", icon: "🌎" },
  { date: "Jan – Mars 2029", label: "Soutenance", icon: "🏆" },
]

export default function ThesisSection() {
  return (
    <section id="these" className="bg-sand py-24 px-6">
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
          {/* Desktop timeline */}
          <div className="relative hidden sm:flex sm:items-start">
            <div className="absolute top-5 h-px w-full bg-leaf/30" />
            {timeline.map((step) => (
              <div
                key={step.date}
                className="relative flex flex-1 flex-col items-center text-center"
              >
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

          {/* Mobile timeline */}
          <div className="relative flex flex-col gap-6 sm:hidden pl-6">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-leaf/30" />
            {timeline.map((step) => (
              <div key={step.date} className="flex items-start gap-4">
                <div className="relative z-10 shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-white text-lg shadow-md -ml-6">
                  <span>{step.icon}</span>
                </div>
                <div className="pt-1.5">
                  <span
                    className="block font-sans text-earth text-xs font-semibold uppercase mb-0.5"
                    style={{ letterSpacing: "0.06em" }}
                  >
                    {step.date}
                  </span>
                  <span className="font-sans text-mangrove text-sm font-medium">{step.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
