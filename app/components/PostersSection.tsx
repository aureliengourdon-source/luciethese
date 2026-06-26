const posters = [
  {
    venue: '10e Symposium International SOM',
    location: 'São Paulo, 2026',
    description:
      'Revue quantitative du carbone organique associé aux minéraux dans les écosystèmes de carbone bleu — synthèse de 806 articles, 35 études retenues, 636 mesures analysées.',
    href: '/SOM_Poster_Lucie_Gourdon.pdf',
    label: 'Voir le poster',
  },
  {
    venue: 'Journée des Doctorants',
    location: 'IEES Paris · CNRS',
    description:
      'Facteurs lithoclimatiques et procédés microbiens impliqués dans le stockage de carbone dans les mangroves du Brésil — une approche intégrant terrain et méta-analyse.',
    href: '/poster JDD.pdf',
    label: 'Voir le poster',
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

export default function PostersSection() {
  return (
    <section className="bg-mist py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14">
          <p className="font-sans text-leaf text-sm font-semibold uppercase mb-2" style={{ letterSpacing: '0.1em' }}>
            Communications scientifiques
          </p>
          <h2
            className="font-serif text-mangrove text-4xl font-bold sm:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Travaux publiés
          </h2>
        </div>

        {/* Poster cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {posters.map((poster) => (
            <div
              key={poster.href}
              className="flex flex-col rounded-xl bg-white p-7 shadow-md"
            >
              {/* Icon */}
              <div className="mb-5">
                <DocumentIcon />
              </div>

              {/* Venue & location */}
              <div className="mb-4">
                <h3 className="font-serif text-mangrove text-xl font-bold leading-snug">
                  {poster.venue}
                </h3>
                <p className="font-sans text-earth/80 text-sm mt-1">{poster.location}</p>
              </div>

              {/* Description */}
              <p className="font-sans text-earth/90 text-sm leading-relaxed flex-1 mb-7">
                {poster.description}
              </p>

              {/* CTA button */}
              <a
                href={poster.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-lg border-2 border-mangrove px-5 py-2.5 font-sans text-sm font-semibold text-mangrove transition-colors duration-200 hover:bg-mangrove hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                {poster.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
