import { ArrowUpRight, Play, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative px-5 pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-white/70">
              <MapPin size={13} className="text-amber-300" />
              Abuja, Nigeria — Available for remote & global projects
            </div>

            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl md:text-[5rem]">
              Motion, animation
              <br />
              <span className="text-white/45">&amp; visual storytelling.</span>
            </h1>

            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/55">
              Emmykingz Studios — a creative practice by Emmanuel Okechukwu. 8+ years
              bringing ideas to life across education, music, AR, and digital media.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-surface transition-transform hover:scale-[1.03]"
              >
                View selected work
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#showreel"
                className="group inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10">
                  <Play size={11} className="ml-0.5 fill-white text-white" />
                </span>
                Watch showreel
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProfileImage() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-3 rounded-full opacity-50 blur-2xl"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(251,146,60,0.3), rgba(99,102,241,0.3), rgba(16,185,129,0.3), rgba(236,72,153,0.3), rgba(251,146,60,0.3))',
        }}
      />
      <div className="relative h-56 w-56 overflow-hidden rounded-full border border-white/10 bg-surface-card sm:h-64 sm:w-64">
        <img
          src="/profile.jpg"
          alt="Emmanuel Okechukwu — Emmykingz Studios"
          className="h-full w-full object-cover"
          onError={(e) => {
            const img = e.target as HTMLImageElement
            img.style.display = 'none'
            const parent = img.parentElement
            if (parent) {
              parent.classList.add('grid', 'place-items-center')
              parent.innerHTML = '<span class="text-5xl font-black tracking-tight text-white/20">E</span>'
            }
          }}
        />
      </div>
    </div>
  )
}
