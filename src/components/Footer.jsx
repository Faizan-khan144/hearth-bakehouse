import { Camera, Mail, MapPin, Phone, ArrowUp } from 'lucide-react'
import { navLinks } from '../data/content.js'

const mark = (
  <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
    <path
      d="M16 4c5 0 9 4 9 9 0 6-4 15-9 15S7 19 7 13c0-5 4-9 9-9z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M12 14c1.6-2 6.4-2 8 0M12 19c1.6-2 6.4-2 8 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
)

const columns = [
  {
    title: 'Visit',
    items: [
      { label: '14 Old Market Lane', href: null },
      { label: 'Blue door, corner entrance', href: null },
      { label: 'Find us on the map', href: '#visit' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { label: '+1 234 567 890', href: 'tel:+1234567890' },
      { label: 'hello@hearth.example', href: 'mailto:hello@hearth.example' },
      { label: 'Pre-orders', href: '#visit' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-crust text-cream">
      <div className="grain absolute inset-0" />
      <div className="wrap relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              {mark}
              <span className="font-display text-xl font-semibold">Hearth</span>
            </div>
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-cream/65">
              A small bakehouse on Old Market Lane. One oven, three bakers, and a
              starter that has outlived most of our plans.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Camera, label: 'Instagram', href: '#top' },
                { icon: Mail, label: 'Email', href: 'mailto:hello@hearth.example' },
                { icon: Phone, label: 'Call', href: 'tel:+1234567890' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 text-cream/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-wheat hover:bg-wheat hover:text-crust"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.2em] text-wheat uppercase">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
                  >
                    <span className="h-px w-0 bg-wheat transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[10px] font-semibold tracking-[0.2em] text-wheat uppercase">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((it) => (
                  <li key={it.label} className="text-sm text-cream/70">
                    {it.href ? (
                      <a href={it.href} className="transition-colors duration-300 hover:text-cream">
                        {it.label}
                      </a>
                    ) : (
                      it.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-cream/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-xs text-cream/55">
            <MapPin size={13} className="text-wheat" />
            © {new Date().getFullYear()} Hearth. A fictional bakehouse for demonstration.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-xs text-cream/55">
            <a href="#top" className="transition-colors duration-300 hover:text-cream">
              Privacy
            </a>
            <a href="#top" className="transition-colors duration-300 hover:text-cream">
              Terms
            </a>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-cream"
            >
              Back to top
              <ArrowUp
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}