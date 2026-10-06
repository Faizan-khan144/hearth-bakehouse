import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react'
import { hours, img } from '../data/content.js'
import { Reveal, SplitHeading } from './Motion.jsx'

export default function Visit() {
  return (
    <section id="visit" className="relative scroll-mt-24 overflow-hidden bg-cream py-24 sm:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">Visit</span>
          </Reveal>
          <SplitHeading
            text="Find us before we sell out"
            delay={80}
            className="font-display mt-5 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.06] font-medium tracking-[-0.02em] text-crust"
          />
          <Reveal delay={240} className="mt-6 max-w-md">
            <p className="text-[15px] leading-relaxed text-crust-soft">
              No reservations, no delivery apps. Come in, take a number, and talk to
              whoever is behind the counter.
            </p>
          </Reveal>

          <Reveal delay={320} className="mt-9 space-y-5">
            <div className="flex items-start gap-3.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-ember" />
              <div>
                <p className="text-sm font-semibold text-crust">14 Old Market Lane</p>
                <p className="mt-0.5 text-[14px] text-mocha">
                  Corner entrance, blue door, next to the flower stall
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Phone size={18} className="mt-0.5 shrink-0 text-ember" />
              <div>
                <p className="text-sm font-semibold text-crust">
                  <span className="num">+1 234 567 890</span>
                </p>
                <p className="mt-0.5 text-[14px] text-mocha">
                  For pre-orders before 16:00
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400} className="mt-9 rounded-2xl border border-crust/10 bg-cream-dark p-6">
            <h3 className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-ember uppercase">
              <Clock size={14} /> Opening hours
            </h3>
            <dl className="mt-4 space-y-3">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-baseline justify-between gap-4 border-b border-crust/10 pb-3 last:border-0 last:pb-0"
                >
                  <dt className="text-[14px] font-medium text-crust">{h.day}</dt>
                  <dd className="num text-right text-[14px] text-crust-soft">{h.time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-soft">
            <img
              src={img('1495147466023-ac5c588e2e94', 1000)}
              alt="The counter at opening time"
              loading="lazy"
              decoding="async"
              className="aspect-4/5 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-crust/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-xl font-medium text-cream">The morning rush</p>
              <p className="mt-1 text-[13.5px] text-cream/70">
                By ten the shelves are half empty. By half ten they are not.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-crust/10 bg-shell p-6 shadow-soft">
            <h3 className="font-display text-xl font-medium text-crust">Order ahead</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-mocha">
              Call with what you need and a pickup time. We will write it on the board
              with your name.
            </p>
            <a
              href="tel:+1234567890"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-deep"
            >
              Call the bakehouse
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}