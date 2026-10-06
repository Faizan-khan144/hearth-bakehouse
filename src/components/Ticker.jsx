import { Flame } from 'lucide-react'
import { tickerItems } from '../data/content.js'

export default function Ticker() {
  const doubled = [...tickerItems, ...tickerItems]
  return (
    <div className="relative overflow-hidden border-y border-crust/10 bg-cream-dark py-4">
      <div className="ticker flex w-max items-center gap-10 whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-[13.5px] text-crust-soft">
            <span className="num">{t}</span>
            <Flame size={14} className="text-ember" aria-hidden="true" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-dark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-dark to-transparent" />
    </div>
  )
}