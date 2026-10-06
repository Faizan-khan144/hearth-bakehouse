import { Wheat, Timer, Flame } from 'lucide-react'
import { process } from '../data/content.js'
import { Reveal, SplitHeading } from './Motion.jsx'

const icons = { Wheat, Timer, Flame }

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-crust py-24 text-cream sm:py-32">
      <div className="pointer-events-none absolute -top-32 -right-32 h-[26rem] w-[26rem] rounded-full border border-cream/10 spin-slow" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-[18rem] w-[18rem] rounded-full border border-cream/10 spin-slow" style={{ animationDirection: 'reverse' }} />
      <div className="grain absolute inset-0" />

      <div className="wrap relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-wheat">How it happens</span>
          </Reveal>
          <SplitHeading
            text="Three things, done the same way every day"
            delay={80}
            className="font-display mt-5 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.06] font-medium tracking-[-0.02em]"
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {process.map((p, i) => {
            const Icon = icons[p.icon]
            return (
              <Reveal
                key={p.step}
                delay={i * 130}
                className="group relative rounded-2xl border border-cream/12 bg-cream/[0.04] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-wheat/50 hover:bg-cream/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-wheat/40 text-wheat transition-all duration-400 group-hover:border-wheat group-hover:bg-wheat group-hover:text-crust">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <span className="num font-display text-4xl font-medium text-cream/15 transition-colors duration-400 group-hover:text-wheat/40">
                    {p.step}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-2xl font-medium">{p.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-cream/65">{p.text}</p>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={260} className="mt-10">
          <p className="font-display text-lg text-cream/50 italic">
            No shortcuts, no preservatives, no second oven.
          </p>
        </Reveal>
      </div>
    </section>
  )
}