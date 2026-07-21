const SOCIALS = ["Instagram", "Behance", "Vimeo", "LinkedIn", "X"];

export default function Footer() {
  return (
    <footer className="relative px-6 pb-12 pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="glass overflow-hidden">
          <div className="grid gap-10 p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-aqua-500/30 via-electric-500/20 to-violet-500/30" />
                  <span className="relative font-display text-sm font-semibold text-white">E</span>
                </span>
                <span className="font-display text-base font-semibold tracking-tight text-white">Emmykingz<span className="text-slate-500"> Studios</span></span>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
                A premium creative production studio crafting cinematic visual
                stories, brand films, and immersive digital experiences.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Explore</div>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                {["Home", "Studio", "Work", "Services", "Contact"].map((l) => (
                  <li key={l}><a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Connect</div>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                {SOCIALS.map((s) => (
                  <li key={s}><a href="#" className="transition-colors hover:text-white">{s}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 px-8 py-6 text-xs text-slate-500 sm:flex-row lg:px-12">
            <span>© {new Date().getFullYear()} Emmykingz Studios. All rights reserved.</span>
            <span>Crafted with intent · Lagos · London</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
