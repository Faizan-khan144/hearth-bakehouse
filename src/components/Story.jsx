import { img, stats } from '../data/content.js'
import { Reveal, MaskImage, SplitHeading, CountUp } from './Motion.jsx'

export default function Story() {
  return (
    <section id="story" className="relative scroll-mt-24 overflow-hidden bg-cream-dark py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="relative">
          <MaskImage
            src={img('1519676867240-f03562e64548', 1200)}
            alt="Hands shaping a loaf on the worktop"
            className="aspect-4/5 rounded-2xl"
          />
          <div className="absolute -bottom-8 -right-2 hidden w-56 sm:block lg:-right-8 lg:w-64">
            <MaskImage
              src={img('1587241321921-91a834d6d191', 700)}
              alt="Flour-dusted worktop"
              delay={220}
              className="aspect-square rounded-2xl ring-8 ring-cream-dark"
            />
          </div>
          <div className="absolute -top-6 -left-4 hidden rounded-full border border-crust/10 bg-shell/90 px-5 py-3 backdrop-blur-md sm:block">
            <p className="font-display text-[13px] italic text-crust-soft">
              “Fourteen years, same starter.”
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="eyebrow">The bakehouse</span>
          </Reveal>

          <SplitHeading
            text="One oven on a street that never sleeps"
            delay={80}
            className="font-display mt-5 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.06] font-medium tracking-[-0.02em] text-crust"
          />

          <Reveal delay={260} className="mt-6 space-y-4">
            <p className="text-[15px] leading-relaxed text-crust-soft sm:text-base">
              We took a unit that used to sell newspapers, put a stone deck oven where
              the magazine rack stood, and started baking at five in the morning. The
              neighbours complained for a week and then started queuing.
            </p>
            <p className="text-[15px] leading-relaxed text-mocha">
              Everything is mixed by hand, fermented for thirty-six hours and baked in
              one oven. There is no second location, no wholesale account and no
              plan for either. When the shelves are empty, we close the door.
            </p>
          </Reveal>

          <Reveal delay={360} className="mt-9 border-t border-crust/10 pt-7">
            <p className="font-display text-lg italic text-crust">Jonah &amp; Marta Vale</p>
            <p className="mt-1 text-xs tracking-[0.14em] text-mocha uppercase">
              Bakers, and still here at four
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={420 + i * 90}>
                <p className="font-display text-3xl font-medium text-crust sm:text-[2rem]">
                  <CountUp to={s.value} />
                  {s.suffix}
                </p>
                <p className="mt-1.5 text-[11px] leading-snug text-mocha">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}