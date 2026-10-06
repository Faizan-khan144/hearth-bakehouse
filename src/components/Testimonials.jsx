import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { testimonials } from '../data/content.js'
import { Reveal, SplitHeading } from './Motion.jsx'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = (n) => setI((n + testimonials.length) % testimonials.length)

  return (
    <section className="relative bg-cream-dark py-24 sm:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="eyebrow">Regulars</span>
          </Reveal>
          <SplitHeading
            text="People who queue in the rain"
            delay={80}
            className="font-display mt-5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] font-medium tracking-[-0.02em] text-crust"
          />
          <Reveal delay={220} className="mt-6 max-w-xs">
            <p className="text-[15px] leading-relaxed text-mocha">
              Half of these people live within four streets. The rest drive in on
              Saturdays and refuse to say from where.
            </p>
          </Reveal>

          <Reveal delay={320} className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(i - 1)}
              aria-label="Previous review"
              className="grid h-11 w-11 place-items-center rounded-full border border-crust/20 text-crust transition-all duration-300 hover:border-crust hover:bg-crust hover:text-cream"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => go(i + 1)}
              aria-label="Next review"
              className="grid h-11 w-11 place-items-center rounded-full border border-crust/20 text-crust transition-all duration-300 hover:border-crust hover:bg-crust hover:text-cream"
            >
              <ArrowRight size={17} />
            </button>
            <span className="num ml-2 text-xs text-mocha">
              0{i + 1} <span className="text-crust/25">/</span> 0{testimonials.length}
            </span>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="relative rounded-3xl border border-crust/10 bg-shell p-7 shadow-soft sm:p-11">
            <Quote size={44} strokeWidth={1} className="text-ember/30" aria-hidden="true" />
            <blockquote
              key={i}
              className="font-display mt-5 text-[clamp(1.25rem,2.4vw,1.85rem)] leading-[1.4] font-medium tracking-[-0.01em] text-crust"
            >
              {t.quote}
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-4 border-t border-crust/10 pt-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ember text-sm font-semibold text-cream">
                {t.initials}
              </span>
              <span>
                <span className="block text-sm font-semibold text-crust">{t.name}</span>
                <span className="block text-xs text-mocha">{t.role}</span>
              </span>
              <span className="ml-auto hidden gap-1 sm:flex" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((n) => (
                  <svg key={n} width="13" height="13" viewBox="0 0 24 24" fill="#d9a441">
                    <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
                  </svg>
                ))}
              </span>
            </figcaption>
          </div>

          <div className="mt-5 flex gap-2">
            {testimonials.map((_, n) => (
              <button
                key={n}
                type="button"
                onClick={() => go(n)}
                aria-label={`Review ${n + 1}`}
                aria-current={n === i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  n === i ? 'w-9 bg-ember' : 'w-4 bg-crust/15 hover:bg-crust/30'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}