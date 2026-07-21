import { useReveal } from '../hooks/useReveal'

const tools = [
  'After Effects',
  'Cinema 4D',
  'Blender',
  'Meta Spark AR',
  'Artivive',
  'Eyejack',
  'Toon Boom Harmony',
  'Toon Boom Storyboard Pro',
  'Photoshop',
  'Illustrator',
  'Procreate',
  'DaVinci Resolve',
  'Premiere Pro',
  'Audition',
]

const professionalDevelopment = [
  { course: 'Patterned Illustration in Blender', org: 'Patata School', year: '2024' },
  { course: 'Learning Moho from beginner to expert', org: '', year: '2024' },
  { course: 'Get Into 3D', org: 'Motion Design School', year: '2022' },
  { course: 'Cinema 4D Fundamentals', org: 'Motion Design School', year: '2022' },
  { course: 'Illustration for Animation', org: 'Motion Design School', year: '2022' },
  { course: 'British Council Creative Enterprise Support Program (Animation)', org: '', year: '2022' },
  { course: 'Science of Character Animation', org: 'Motion Design School', year: '2020' },
]

type ExperienceItem = {
  role: string
  org: string
  period: string
  bullets: string[]
}

const experience: ExperienceItem[] = [
  {
    role: 'Founder & Lead Animator',
    org: 'Emmykingz Studios, Abuja, Nigeria',
    period: '2020 — Present',
    bullets: [
      'Direct and produce motion design, 2D animation, AR experiences, and music visualizers for clients across four continents.',
      'Manage end-to-end creative pipelines from concept and storyboarding to final delivery.',
    ],
  },
  {
    role: 'Animator',
    org: 'MIVA Open University, Abuja, Nigeria',
    period: 'Oct 2023 — Present',
    bullets: [
      'Create educational animations and motion graphics to simplify complex academic concepts.',
      'Lead pre-production including storyboarding, visual planning, and animation direction.',
    ],
  },
  {
    role: 'Augmented Reality Designer',
    org: 'The Junction BIA, Toronto, Canada',
    period: 'Jun 2023 — Dec 2023',
    bullets: [
      'Designed AR window displays for the Window Wonderland public art festival.',
      'Created accessible, site-specific animated content for diverse audiences.',
    ],
  },
  {
    role: '2D Animator / Motion Graphics Artist',
    org: 'uLesson Education, Nigeria',
    period: 'Oct 2022 — Dec 2022',
    bullets: [
      'Designed and animated educational video lessons for diverse learners.',
      'Contributed to scalable content systems for the digital library.',
    ],
  },
  {
    role: 'Freelance Animator',
    org: 'Predeet & RBSM Marketplace',
    period: 'Jun 2022 — Oct 2022',
    bullets: [
      'Produced 2D explainer videos — character design, rigging, animation, and editing.',
      'Delivered a fully animated explainer video for RBSM Marketplace within three weeks.',
    ],
  },
]

export function About() {
  const ref = useReveal()

  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div ref={ref} className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              About
            </span>
            <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Emmanuel Okechukwu
            </h2>
            <p className="mt-1 text-sm text-white/40">
              Founder, Emmykingz Studios
            </p>
            <p className="mt-5 text-base leading-relaxed text-white/50">
              Motion designer, animator, and video editor based in Abuja, Nigeria with
              8+ years creating 2D animations, motion graphics, AR experiences, and
              video content. I work across education, music, and digital media —
              helping brands and artists tell stories that move.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/50">
              Through Emmykingz Studios, I've delivered work for clients across
              Nigeria, the USA, Canada, and the UK — including MIVA Open University,
              The Junction BIA Toronto, uLesson, and the Nigerian Nostalgia Project.
              My toolkit spans traditional animation software, 3D, and emerging AR
              platforms.
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/25">
                Tools &amp; Software
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg glass px-3 py-1.5 text-xs font-medium text-white/55"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/25">
                Professional Development
              </p>
              <ul className="mt-3 space-y-2">
                {professionalDevelopment.map((item, i) => (
                  <li key={i} className="flex items-baseline gap-2.5 text-sm leading-relaxed text-white/50">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/25" />
                    <span>
                      <span className="text-white/70">{item.course}</span>
                      {item.org && <span className="text-white/40"> — {item.org}</span>}
                      <span className="text-white/30"> ({item.year})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/25">
              Experience
            </p>
            <div className="mt-4 space-y-3">
              {experience.map((e, i) => (
                <ExperienceCard key={i} item={e} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal rounded-2xl p-5"
      style={{
        background: '#111117',
        border: '1px solid rgba(255,255,255,0.07)',
        transitionDelay: `${index * 80}ms`,
      } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold leading-snug tracking-tight text-white">{item.role}</h3>
          <p className="text-sm text-white/45">{item.org}</p>
        </div>
        <span className="shrink-0 rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white/40">
          {item.period}
        </span>
      </div>
      <ul className="mt-3 space-y-1.5">
        {item.bullets.map((b, j) => (
          <li key={j} className="flex gap-2 text-sm leading-relaxed text-white/40">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/25" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}
