import { ArrowDown, ArrowRight, Clock } from 'lucide-react'
import { hero, img } from '../data/content.js'
import { SplitHeading, Reveal } from './Motion.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-crust">
      <div className="absolute inset-0">
        <img
          src={img(hero.image, 1920, 72)}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-crust/85 via-crust/45 to-crust/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-crust/70 via-transparent to-transparent" />
      </div>

      {/* steam mark */}
      <div className="pointer-events-none absolute top-28 right-8 hidden lg:block" aria-hidden="true">
        <div className="relative h-24 w-24">
          <span className="steam absolute bottom-0 left-3 h-8 w-1.5 rounded-full bg-cream/45 blur-[3px]" />
          <span className="steam-2 absolute bottom-0 left-1/2 h-10 w-1.5 -translate-x-1/2 rounded-full bg-cream/45 blur-[3px]" />
          <span className="steam-3 absolute bottom-0 right-3 h-8 w-1.5 rounded-full bg-cream/45 blur-[3px]" />
        </div>
      </div>

      <div className="wrap relative flex min-h-[100svh] flex-col justify-end pt-32 pb-14">
        <Reveal delay={100}>
          <span className="eyebrow text-wheat">{hero.eyebrow}</span>
        </Reveal>

        <SplitHeading
          as="h1"
          text={hero.title}
          delay={200}
          className="font-display mt-6 max-w-3xl text-[clamp(2.5rem,7vw,5rem)] leading-[1] font-medium tracking-[-0.03em] text-cream"
        />

        <Reveal delay={560} className="mt-6 max-w-xl">
          <p className="text-[15px] leading-relaxed text-cream/75 sm:text-base">{hero.note}</p>
        </Reveal>

        <Reveal delay={680} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            See today's menu
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#story"
            className="group inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream backdrop-blur-sm transition-colors duration-300 hover:border-cream/60 hover:bg-cream/10"
          >
            The bakehouse
            <ArrowDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
        </Reveal>

        <Reveal delay={800} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cream/15 pt-6">
          <span className="flex items-center gap-2 text-[13px] text-cream/70">
            <Clock size={14} className="text-wheat" />
            Open today <span className="num font-semibold text-cream">07:00 — 15:00</span>
          </span>
          <span className="flex items-center gap-2 text-[13px] text-cream/70">
            <span className="h-1.5 w-1.5 rounded-full bg-wheat" />
            First batch out at <span className="num font-semibold text-cream">07:00</span>
          </span>
          <span className="hidden text-[13px] text-cream/50 italic sm:block">
            Old market, number 14
          </span>
        </Reveal>
      </div>
    </section>
  )
}