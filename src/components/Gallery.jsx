import { gallery, img } from '../data/content.js'
import { Reveal, SplitHeading, MaskImage } from './Motion.jsx'

export default function Gallery() {
  return (
    <section id="gallery" className="relative scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">The place</span>
            </Reveal>
            <SplitHeading
              text="A week at number 14"
              delay={80}
              className="font-display mt-5 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.06] font-medium tracking-[-0.02em] text-crust"
            />
          </div>
          <Reveal delay={200} className="max-w-sm">
            <p className="text-[15px] leading-relaxed text-crust-soft">
              Photographs taken across one week in March. No styling, no props, just
              the counter as it looked.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal
              key={`${g.id}-${i}`}
              delay={i * 80}
              className={`group relative overflow-hidden rounded-2xl ${
                g.span === 'tall' ? 'row-span-2' : g.span === 'wide' ? 'col-span-2' : ''
              }`}
            >
              <MaskImage
                src={img(g.id, g.span === 'wide' ? 1000 : 700)}
                alt={g.alt}
                delay={i * 80}
                className="h-full w-full"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-crust/80 via-crust/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="p-4 text-[13px] leading-snug font-medium text-cream">{g.alt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}