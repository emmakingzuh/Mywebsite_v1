import { useState } from 'react'
import { ArrowUpRight, Play } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { projects, categories, sortByThumbnail, type Project, type Category } from '../data/projects'

type Props = {
  onOpenProject: (project: Project) => void
}

export function Work({ onOpenProject }: Props) {
  const headRef = useReveal()
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All')

  const portfolioProjects = projects.filter((p) => p.id !== 'showreel')
  const filtered = activeCategory === 'All'
    ? sortByThumbnail(portfolioProjects)
    : sortByThumbnail(portfolioProjects.filter((p) => p.category === activeCategory))

  return (
    <section id="work" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div ref={headRef} className="reveal mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
            Selected work
          </span>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Projects that
            <br />
            <span className="text-white/40">made an impact.</span>
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          <FilterButton
            label="All"
            active={activeCategory === 'All'}
            onClick={() => setActiveCategory('All')}
          />
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={onOpenProject} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
        active
          ? 'bg-white text-surface'
          : 'glass text-white/60 hover:text-white'
      }`}
    >
      {label}
    </button>
  )
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (p: Project) => void }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal group glow-card overflow-hidden rounded-3xl"
      style={{
        '--glow': project.thumbnail ? 'transparent' : 'rgba(99,102,241,0.25)',
        background: '#111117',
        border: '1px solid rgba(255,255,255,0.07)',
        transitionDelay: `${index * 40}ms`,
      } as React.CSSProperties}
    >
      <button onClick={() => onOpen(project)} className="block w-full text-left">
        <div className="relative overflow-hidden">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                const t = e.target as HTMLImageElement
                t.style.display = 'none'
                const parent = t.parentElement
                if (parent && !parent.querySelector('.fallback-bg')) {
                  const fb = document.createElement('div')
                  fb.className = 'fallback-bg absolute inset-0 h-52 w-full'
                  fb.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)'
                  parent.appendChild(fb)
                }
              }}
            />
          ) : (
            <div className="h-52 w-full" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-transform group-hover:scale-110">
            <Play size={14} className="ml-0.5 fill-white text-white" />
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white/[0.08] px-2.5 py-1 text-xs font-medium text-white/55">
              {project.category}
            </span>
            <span className="text-xs text-white/30">{project.year}</span>
          </div>
          <h3 className="mt-3 font-semibold leading-snug tracking-tight text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-white/35">{project.client}</p>
          <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-white/50 transition-colors group-hover:text-white">
            View project
            <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </button>
    </div>
  )
}
