import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import {
  Film,
  Layers,
  Cpu,
  Box,
  Sparkles,
  Pencil,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  glow: string
}

const services: Service[] = [
  {
    icon: Film,
    title: 'Motion Graphics',
    description:
      'Dynamic motion graphics and 2D animation for broadcasts, social media, explainer videos, and digital campaigns.',
    tags: ['Motion Graphics', '2D Animation', 'Kinetic Typography'],
    glow: 'linear-gradient(160deg, rgba(99,102,241,0.9) 0%, rgba(236,72,153,0.85) 55%, rgba(59,130,246,0.8) 100%)',
  },
  {
    icon: Pencil,
    title: 'Character Design & Animation',
    description:
      'Full-pipeline character work — concept, design, rigging, and performance animation in 2D.',
    tags: ['Character Design', 'Rigging', 'Character Animation'],
    glow: 'linear-gradient(155deg, rgba(16,185,129,0.9) 0%, rgba(132,204,22,0.8) 55%, rgba(6,182,212,0.75) 100%)',
  },
  {
    icon: Layers,
    title: 'Video Production & Editing',
    description:
      'From lyric videos and music visuals to corporate explainers — end-to-end production with tight turnarounds.',
    tags: ['Video Editing', 'Lyric Videos', 'Music Visuals', 'Explainer Videos'],
    glow: 'linear-gradient(160deg, rgba(251,113,133,0.9) 0%, rgba(167,139,250,0.85) 50%, rgba(59,130,246,0.8) 100%)',
  },
  {
    icon: Box,
    title: '3D Illustration',
    description:
      'Stylized 3D renders, scene-building, and product visuals created in Blender and Cinema 4D.',
    tags: ['Blender', 'Cinema 4D', '3D Rendering'],
    glow: 'linear-gradient(155deg, rgba(251,191,36,0.9) 0%, rgba(249,115,22,0.9) 55%, rgba(239,68,68,0.8) 100%)',
  },
  {
    icon: Sparkles,
    title: 'Augmented Reality',
    description:
      'Interactive AR filters, immersive experiences, and animated AR content using Meta Spark AR, Artivive, and Eyejack.',
    tags: ['Meta Spark AR', 'Artivive', 'Eyejack'],
    glow: 'linear-gradient(160deg, rgba(139,92,246,0.9) 0%, rgba(236,72,153,0.85) 55%, rgba(239,68,68,0.75) 100%)',
  },
  {
    icon: Cpu,
    title: 'Storyboarding & Visual Dev',
    description:
      'Pre-production direction — translating scripts and briefs into visual narratives ready for production.',
    tags: ['Storyboarding', 'Visual Development', 'Concept Art'],
    glow: 'linear-gradient(155deg, rgba(6,182,212,0.9) 0%, rgba(16,185,129,0.85) 55%, rgba(132,204,22,0.8) 100%)',
  },
]

export function Services() {
  const headRef = useReveal()

  return (
    <section id="services" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div ref={headRef} className="reveal mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
            What I do
          </span>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Full-spectrum creative
            <br />
            <span className="text-white/40">for moving images.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <GlowCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GlowCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useReveal<HTMLDivElement>()
  const Icon = service.icon

  return (
    <div
      ref={cardRef}
      className="reveal glow-card flex flex-col rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
      style={{
        '--glow': service.glow,
        background: '#111117',
        border: '1px solid rgba(255,255,255,0.07)',
        transitionDelay: `${index * 60}ms`,
      } as React.CSSProperties}
    >
      <div
        className="grid h-12 w-12 place-items-center rounded-2xl"
        style={{
          background: 'radial-gradient(135deg at 30% 30%, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Icon size={22} strokeWidth={1.5} className="text-white/85" />
      </div>

      <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-white">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/45">{service.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {service.tags.map((t) => (
          <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white/35">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-5">
        <button className="group flex items-center gap-1.5 text-sm font-medium text-white/55 transition-colors hover:text-white">
          Learn more
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  )
}
