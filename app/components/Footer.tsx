const links = [
  { label: "IEES Paris", href: "https://iees-paris.fr" },
  { label: "CNRS", href: "https://www.cnrs.fr" },
  { label: "USP ESALQ", href: "https://www.esalq.usp.br" },
  { label: "Sorbonne", href: "https://www.sorbonne-universite.fr" },
]

export default function Footer() {
  return (
    <footer className="bg-mangrove border-t border-white/10 py-10 px-6">
      <div className="mx-auto max-w-5xl flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        {/* Left — branding */}
        <div>
          <p
            className="font-serif text-white text-base font-semibold mb-1"
            style={{ letterSpacing: "-0.02em" }}
          >
            Lucie Gourdon
          </p>
          <p className="font-sans text-white/50 text-xs leading-relaxed max-w-xs">
            Thèse en cotutelle Sorbonne Université · USP São Paulo<br />
            Financement CNRS — TROPECOS · FairCarboN · ANR-22-PEXF-012
          </p>
        </div>

        {/* Right — institution links */}
        <div className="flex flex-col gap-2">
          <p
            className="font-sans text-white/40 text-xs uppercase font-semibold"
            style={{ letterSpacing: "0.08em" }}
          >
            Institutions
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl mt-8 pt-6 border-t border-white/10">
        <p className="font-sans text-white/30 text-xs text-center" style={{ letterSpacing: "0.03em" }}>
          © 2026 — Site réalisé par la famille Gourdon
        </p>
      </div>
    </footer>
  )
}
