const SKILL_GROUPS = [
  {
    title: "Motion Graphics",
    icon: "motion",
    accent: "from-aqua-500/20 to-electric-500/10",
    items: ["Logo animation", "Title sequences", "Brand bumpers", "Lower thirds", "Broadcast packages"],
  },
  {
    title: "2D Animation",
    icon: "2d",
    accent: "from-electric-500/20 to-violet-500/10",
    items: ["Character animation", "Animated intros", "Looping animations", "Explainer videos", "Cover art animation"],
  },
  {
    title: "3D Animation",
    icon: "cube",
    accent: "from-violet-500/20 to-magenta-500/10",
    items: ["3D modeling", "Texturing & lighting", "3D animation", "Product visualization"],
  },
  {
    title: "Video Editing",
    icon: "film",
    accent: "from-magenta-500/20 to-coral-500/10",
    items: ["Music videos", "Promo edits", "Color grading", "Sound design"],
  },
  {
    title: "Augmented Reality",
    icon: "ar",
    accent: "from-coral-500/20 to-peach-500/10",
    items: ["AR experiences", "WebAR", "Social AR filters", "Interactive installations"],
  },
  {
    title: "Creative Direction",
    icon: "spark",
    accent: "from-peach-500/20 to-aqua-500/10",
    items: ["Concept development", "Visual identity", "Art direction", "Storytelling"],
  },
];

const SOFTWARE = [
  { name: "After Effects", short: "Ae" },
  { name: "Premiere Pro", short: "Pr" },
  { name: "Cinema 4D", short: "C4D" },
  { name: "Blender", short: "Bl" },
  { name: "Illustrator", short: "Ai" },
  { name: "Photoshop", short: "Ps" },
  { name: "Figma", short: "Fi" },
  { name: "Canva", short: "Cv" },
  { name: "CapCut", short: "CC" },
  { name: "Doratoon", short: "Dr" },
  { name: "Domika", short: "Dm" },
  { name: "GoEnhance", short: "GE" },
];

function Icon({ name }: { name: string }) {
  const c = "h-5 w-5";
  switch (name) {
    case "motion": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4" /></svg>);
    case "2d": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 12h18" /></svg>);
    case "cube": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" /></svg>);
    case "film": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" /></svg>);
    case "ar": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5v8l-9 5-9-5V8z" /><path d="M12 12l9-5M12 12v9M12 12L3 7" /></svg>);
    case "spark": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /></svg>);
    default: return null;
  }
}

export default function Studio() {
  return (
    <section id="studio" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* About */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">About</span>
            <h2 className="section-title mt-6">
              Telling stories through <span className="text-gradient-aqua">the art of animation.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              I'm Emmanuel Okechukwu, a motion designer and animator with over
              eight years of experience turning ideas into moving image. From
              music visualizers and brand films to AR installations and character
              animation, I work across the full spectrum of motion — crafting
              visuals that are as strategic as they are beautiful.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-400">
              I collaborate with artists, brands, and agencies across Africa,
              North America, and Europe, bringing a detail-obsessed eye and a
              deep love for the craft to every project.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Abuja, Nigeria", "Available worldwide", "Remote-friendly"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-400 backdrop-blur-md">{t}</span>
              ))}
            </div>
          </div>

          {/* Showcase card */}
          <div className="reveal">
            <div className="glass glass-hover overflow-hidden p-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/3139073/pexels-photo-3139073.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Emmanuel Okechukwu — motion design studio"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-white">Emmykingz Studios</div>
                    <div className="text-xs text-slate-400">Motion design · Animation · AR</div>
                  </div>
                  <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-slate-200 backdrop-blur-md">Est. 2016</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div id="services" className="mt-28 scroll-mt-24">
          <div className="reveal mb-12 max-w-2xl">
            <span className="eyebrow">What I do</span>
            <h3 className="section-title mt-6">A full spectrum of <span className="text-gradient-aqua">motion craft.</span></h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.map((s, i) => (
              <div key={s.title} className="reveal glass glass-hover group p-6" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className={`relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${s.accent} text-white`}>
                  <Icon name={s.icon} />
                </div>
                <h4 className="font-display text-lg font-semibold text-white">{s.title}</h4>
                <ul className="mt-3 space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="h-1 w-1 rounded-full bg-slate-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Software tools */}
        <div className="mt-20">
          <div className="reveal mb-8 text-center">
            <span className="eyebrow">Tools of the trade</span>
          </div>
          <div className="reveal flex flex-wrap justify-center gap-3">
            {SOFTWARE.map((s) => (
              <div key={s.name} className="glass glass-hover flex items-center gap-3 px-5 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] font-display text-xs font-semibold text-white">{s.short}</span>
                <span className="text-sm text-slate-300">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
