import { useEffect, useRef, useState } from 'react'

type StatItem = { value: number; suffix: string; label: string }

const stats: StatItem[] = [
  { value: 8, suffix: '+', label: 'Years experience' },
  { value: 50, suffix: '+', label: 'Projects delivered' },
  { value: 4, suffix: '', label: 'Continents served' },
  { value: 10, suffix: '+', label: 'Software mastered' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          io.unobserve(e.target)
          const duration = 1400
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setVal(Math.round(target * eased))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return (
    <span className="flex items-baseline gap-0.5">
      <span ref={ref} className="text-4xl font-semibold tracking-tight text-white">
        {val}
      </span>
      <span className="text-2xl font-semibold text-white/35">{suffix}</span>
    </span>
  )
}

export function StatsBar() {
  return (
    <section className="px-5 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl glass md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-7 [&:not(:last-child)]:border-r [&:not(:last-child)]:border-white/5">
            <CountUp target={s.value} suffix={s.suffix} />
            <p className="mt-1 text-sm text-white/40">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
