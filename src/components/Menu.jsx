import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { menuGroups, img } from '../data/content.js'
import { Reveal, SplitHeading, MaskImage } from './Motion.jsx'

export default function Menu() {
  const [active, setActive] = useState(menuGroups[0].id)
  const group = menuGroups.find((g) => g.id === active)

  return (
    <section id="menu" className="relative scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Today's counter</span>
            </Reveal>
            <SplitHeading
              text="What came out of the oven"
              delay={80}
              className="font-display mt-5 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.06] font-medium tracking-[-0.02em] text-crust"
            />
          </div>
          <Reveal delay={200} className="max-w-sm">
            <p className="text-[15px] leading-relaxed text-crust-soft">
              The board changes with the season and the flour. Prices are per piece,
              everything is baked here.
            </p>
          </Reveal>
        </div>

        <Reveal delay={260} className="mt-10 flex flex-wrap gap-2.5">
          {menuGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(g.id)}
              aria-pressed={active === g.id}
              className={`rounded-full border px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                active === g.id
                  ? 'border-ember bg-ember text-cream'
                  : 'border-crust/15 text-crust-soft hover:border-crust/35 hover:bg-cream-dark'
              }`}
            >
              {g.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {group.items.map((it, i) => (
            <Reveal
              key={it.name}
              delay={i * 100}
              className="group flex flex-col overflow-hidden rounded-2xl bg-shell shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <MaskImage
                  src={img(it.id, 800)}
                  alt={it.name}
                  delay={i * 100}
                  className="h-full w-full"
                />
                {it.badge && (
                  <span className="absolute top-4 left-4 rounded-full bg-wheat px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-crust uppercase">
                    {it.badge}
                  </span>
                )}
                <span className="absolute right-4 bottom-4 grid h-10 w-10 translate-y-3 place-items-center rounded-full bg-cream text-crust opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={17} />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl leading-tight font-medium text-crust">
                    {it.name}
                  </h3>
                  <p className="shrink-0">
                    <span className="num font-display text-xl font-semibold text-ember">
                      ${it.price}
                    </span>
                  </p>
                </div>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-mocha">
                  {it.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320} className="mt-12 rounded-2xl border border-crust/10 bg-cream-dark p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-xl font-medium text-crust">
                Whole cakes and bread by the crate
              </h3>
              <p className="mt-2 max-w-lg text-[14.5px] leading-relaxed text-crust-soft">
                Pre-order by 16:00 the day before and we will have it boxed with your
                name on it.
              </p>
            </div>
            <a
              href="#visit"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-crust px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember"
            >
              Place an order
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}