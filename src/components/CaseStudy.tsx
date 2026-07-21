import { useEffect, useState } from 'react'
import { X, ArrowLeft, ArrowRight, ExternalLink, Play } from 'lucide-react'
import type { Project } from '../data/projects'
import { getRelatedProjects, getAdjacentProjects } from '../data/projects'

type Props = {
  project: Project
  onClose: () => void
  onNavigate: (project: Project) => void
}

export function CaseStudy({ project, onClose, onNavigate }: Props) {
  const [playing, setPlaying] = useState(false)
  const related = getRelatedProjects(project)
  const { prev, next } = getAdjacentProjects(project)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    setPlaying(false)
  }, [project.id])

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-surface">
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 30% 0%, rgba(99,102,241,0.15), transparent 50%), radial-gradient(circle at 80% 100%, rgba(236,72,153,0.12), transparent 50%)',
        }}
      />

      <div className="sticky top-0 z-10 border-b border-white/5 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            <X size={16} />
            Close
          </button>
          <div className="flex items-center gap-1">
            {prev && (
              <button
                onClick={() => onNavigate(prev)}
                className="grid h-9 w-9 place-items-center rounded-lg glass text-white/60 transition-colors hover:text-white"
                aria-label="Previous project"
              >
                <ArrowLeft size={16} />
              </button>
            )}
            {next && (
              <button
                onClick={() => onNavigate(next)}
                className="grid h-9 w-9 place-items-center rounded-lg glass text-white/60 transition-colors hover:text-white"
                aria-label="Next project"
              >
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-medium text-white/55">
            {project.category}
          </span>
          <span className="text-xs text-white/30">{project.year}</span>
          <span className="text-xs text-white/30">·</span>
          <span className="text-xs capitalize text-white/30">{project.platform}</span>
        </div>

        <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          {project.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <div>
            <span className="text-white/30">Role</span>
            <span className="ml-2 text-white/70">{project.role}</span>
          </div>
          <div>
            <span className="text-white/30">Client</span>
            <span className="ml-2 text-white/70">{project.client}</span>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="relative aspect-video w-full bg-black">
            {playing ? (
              <Embed project={project} />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 h-full w-full"
                aria-label="Play video"
              >
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0d0d12] to-[#16213e]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-surface shadow-2xl transition-transform hover:scale-110">
                    <Play size={24} className="ml-1 fill-surface" />
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>

        <div className="mt-10 max-w-2xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
            Project Summary
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/60">
            {project.longDescription}
          </p>
        </div>

        <div className="mt-10 max-w-2xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
            Behind the Scenes
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <InfoCard label="Platform" value={project.platform.charAt(0).toUpperCase() + project.platform.slice(1)} />
            <InfoCard label="Category" value={project.category} />
            <InfoCard label="Role" value={project.role} />
            <InfoCard label="Year" value={project.year} />
          </div>
        </div>

        <div className="mt-8">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium text-white/65 transition-colors hover:text-white"
          >
            <ExternalLink size={14} />
            View on {project.platform.charAt(0).toUpperCase() + project.platform.slice(1)}
          </a>
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-white/5 pt-12">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Related Projects
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <button
                  key={r.id}
                  onClick={() => onNavigate(r)}
                  className="group overflow-hidden rounded-2xl text-left transition-transform hover:-translate-y-1"
                  style={{ background: '#111117', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="relative h-32 overflow-hidden">
                    {r.thumbnail && (
                      <img
                        src={r.thumbnail}
                        alt={r.title}
                        className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-white/35">{r.category}</p>
                    <h3 className="mt-1 text-sm font-semibold leading-snug tracking-tight text-white">
                      {r.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 flex items-center justify-between gap-4 border-t border-white/5 pt-8">
          {prev ? (
            <button
              onClick={() => onNavigate(prev)}
              className="group flex items-center gap-3"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl glass text-white/60 transition-colors group-hover:text-white">
                <ArrowLeft size={16} />
              </span>
              <span className="text-left">
                <span className="block text-xs text-white/30">Previous</span>
                <span className="block text-sm font-medium text-white/70">{prev.title}</span>
              </span>
            </button>
          ) : <div />}
          {next ? (
            <button
              onClick={() => onNavigate(next)}
              className="group flex items-center gap-3 text-right"
            >
              <span>
                <span className="block text-xs text-white/30">Next</span>
                <span className="block text-sm font-medium text-white/70">{next.title}</span>
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-xl glass text-white/60 transition-colors group-hover:text-white">
                <ArrowRight size={16} />
              </span>
            </button>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}

function Embed({ project }: { project: Project }) {
  if (project.platform === 'youtube') {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${project.embedId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={project.title}
      />
    )
  }
  if (project.platform === 'vimeo') {
    return (
      <iframe
        src={`https://player.vimeo.com/video/${project.embedId}?autoplay=1&title=0&byline=0&portrait=0`}
        className="absolute inset-0 h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={project.title}
      />
    )
  }
  return (
    <div className="absolute inset-0 grid place-items-center bg-black p-4">
      <div className="text-center">
        <p className="text-sm text-white/50">Instagram embed not available in preview.</p>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-surface"
        >
          <ExternalLink size={14} />
          View on Instagram
        </a>
      </div>
    </div>
  )
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl p-4" style={{ background: '#111117', border: '1px solid rgba(255,255,255,0.07)' }}>
      <p className="text-xs text-white/30">{label}</p>
      <p className="mt-1 text-sm font-medium text-white/70">{value}</p>
    </div>
  )
}
