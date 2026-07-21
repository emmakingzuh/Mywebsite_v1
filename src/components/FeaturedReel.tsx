import { useState } from 'react'
import { Play } from 'lucide-react'
import { getFeaturedReel } from '../data/projects'

export function FeaturedReel() {
  const [playing, setPlaying] = useState(false)
  const reel = getFeaturedReel()

  return (
    <section id="showreel" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
            Showreel
          </span>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            A year in motion.
          </h2>
        </div>

        <div
          className="group relative aspect-video w-full overflow-hidden rounded-4xl"
          style={{
            background: '#000',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {playing ? (
            <iframe
              src={`https://player.vimeo.com/video/${reel.embedId}?autoplay=1&title=0&byline=0&portrait=0`}
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={reel.title}
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 h-full w-full"
              aria-label="Play showreel"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0d0d12] to-[#16213e]" />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    'radial-gradient(circle at 30% 40%, rgba(99,102,241,0.4), transparent 50%), radial-gradient(circle at 70% 60%, rgba(236,72,153,0.3), transparent 50%)',
                }}
              />
              <div className="noise absolute inset-0 opacity-[0.06] mix-blend-soft-light" />

              <div className="absolute inset-0 grid place-items-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-full bg-white/20" style={{ animationDuration: '2.5s' }} />
                  <div className="relative grid h-20 w-20 place-items-center rounded-full bg-white/90 text-surface shadow-2xl transition-transform group-hover:scale-110">
                    <Play size={28} className="ml-1 fill-surface" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  Featured Reel
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  {reel.title}
                </h3>
                <p className="mt-1 max-w-md text-sm text-white/50">
                  {reel.description}
                </p>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
